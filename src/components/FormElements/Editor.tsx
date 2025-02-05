import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import RawTool from "@editorjs/raw";
import ImageTool from "@editorjs/image";

const Editor = ({ data, onChange }) => {
  const editorInstance = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: editorRef.current,
        data,
        onChange: async () => {
          const savedData = await editorInstance.current.save();
          onChange(savedData);
        },
        tools: {
          header: Header,
          list: List,
          raw: RawTool,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "http://localhost:5002/uploadFile", // Change this to your file upload endpoint
                byUrl: "http://localhost:5002/fetchImage",   // Change this to your URL upload endpoint
              },
            },
          },
        },
      });
    }

    return () => {
      if (editorInstance.current && typeof editorInstance.current.destroy === "function") {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  return <div className="border-[1.5px] border-gray-300/80 bg-slate-300/35 rounded-lg shadow-lg lg:pl-3 py-3" ref={editorRef} />;
};

export default Editor;
