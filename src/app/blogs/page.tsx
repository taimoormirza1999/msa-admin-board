
'use client'; 
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import InputField from "../../components/FormElements/InputField";
import MultipleValueTextInput from "../../components/FormElements/MultipleValueTextInput";
import React, { useCallback, useEffect, useState } from "react";
import FileUploadInput from "../../components/FormElements/FileUploadInput";
import Editor from "../../components/FormElements/Editor";
import TableThree from "../../components/Tables/TableThree";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

// export const metadata: Metadata = {
//   title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const Settings = () => {
  const [blogData, setBlogData] = useState(null);

  const fetchBlogs = useCallback(async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/admin`);
    setBlogData(response.data);
  }, []);
  
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-[1920px] ">
        <Breadcrumb pageName="Saved Blogs" />

        <div className="">
          <div className="w-full">
            <div className="rounded border w-full border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {/* <TableThree blogData={blogData} fetchBlogs={fetchBlogs as any}/> */}
            <TableThree blogData={blogData} fetchBlogs={fetchBlogs as any} />

            </div>
          </div>
          
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
