import React, { useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image'; 
import EditorjsList from '@editorjs/list'; 
import Header from '@editorjs/header'; 
import Paragraph from '@editorjs/paragraph';  
import Raw from '@editorjs/raw';  
import Embed from '@editorjs/embed'; 

const Editor = ({ onChange, data }) => {
  const editorRef = useRef(null);
  let editorInstance = useRef(null);

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: editorRef.current,
        data: data || {}, // Initial data if any
        tools: {
          // Image Tool
          image: {
            class: ImageTool,
            config: {
              uploader: {
                /**
                 * Simulate the file upload process locally
                 * @param {File} file - Selected image file
                 * @returns {Promise}
                 */
                uploadByFile: (file) => {
                  return new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    // Read the file as a Data URL
                    reader.onload = () => {
                      resolve({
                        success: 1,
                        file: {
                          url: reader.result, // Use base64 data URL as the image URL
                        },
                      });
                    };

                    reader.onerror = () => {
                      reject(new Error('Error reading file.'));
                    };

                    reader.readAsDataURL(file); // Convert file to base64 URL
                  });
                },

                /**
                 * Handle image upload by URL
                 * @param {string} url - Image URL
                 * @returns {Promise}
                 */
                uploadByUrl: (url) => {
                  return new Promise((resolve, reject) => {
                    // Validate the URL (simple check, can be improved)
                    if (url && url.startsWith('http')) {
                      resolve({
                        success: 1,
                        file: {
                          url, // Return the URL directly
                        },
                      });
                    } else {
                      reject(new Error('Invalid URL'));
                    }
                  });
                },
              },
            },
          },
          // Header Tool
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a heading',
              levels: [1, 2, 3, 4, 5, 6], // Allow heading levels from H1 to H6
              defaultLevel: 2,
            },
          },
          // List Tool (Ordered/Unordered)
          list: {
            class: EditorjsList,
            config: {
              defaultStyle: 'unordered', // Default list type
            },
          },
          // Paragraph Tool (For basic text paragraphs)
          paragraph: {
            class: Paragraph,
          },
          // Raw HTML Tool (For adding raw HTML code)
          raw: {
            class: Raw,
          },
          // Embed Tool (For embedding content from external sources like YouTube)
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                twitter: true,
                // Add other services if required
              },
            },
          },
        },
        onChange: async () => {
          const savedData = await editorInstance.current.save();
          onChange(savedData);
        },
      });
    }

    return () => {
      editorInstance.current = null;
    };
  }, [onChange, data]);

  return (
    <div
      className="editor-js rounded border  border-stroke bg-gray/50 dark:bg-transparent"
      ref={editorRef}
    ></div>
  );
};

export default Editor;
