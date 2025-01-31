
'use client'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputField from "@/components/FormElements/InputField";
import MultipleValueTextInput from "@/components/FormElements/MultipleValueTextInput";
import React, { useState } from "react";
import FileUploadInput from "@/components/FormElements/FileUploadInput";
import Editor from "@/components/FormElements/Editor";

// export const metadata: Metadata = {
//   title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const Settings = () => {
  const [categories, setCategories] = useState(['Animation Courses',]);
  const [editorData, setEditorData] = useState(null);

  // const handleEditorChange = (newData) => {
  //   setEditorData(newData);
  // };
  // const handleItemAdded = (item, allItems) => {
  //   console.log(`Item added: ${item}`, allItems);
  // };

  // const handleItemDeleted = (item, allItems) => {
  //   console.log(`Item removed: ${item}`, allItems);
  // };
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-[1920px]">
        <Breadcrumb pageName="Create A New Blog Post" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <InputField
        label="Blog Title:"
        placeholder="Enter Blog Title"
        value={"cover"}
        onChange={()=>console.log("changed")}
      />
              </div>
              
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
