
'use client'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputField from "@/components/FormElements/InputField";
import MultipleValueTextInput from "@/components/FormElements/MultipleValueTextInput";
import React, { useEffect, useState } from "react";
import FileUploadInput from "@/components/FormElements/FileUploadInput";
import Editor from "@/components/FormElements/Editor";
import TableThree from "@/components/Tables/TableThree";
import { Package } from "@/types/package";
import axios from "axios";

// export const metadata: Metadata = {
//   title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const Settings = () => {
  const [blogData, setBlogData] = useState(null);
  const fetchBlogs = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/admin`);
    setBlogData(response.data);
};
  useEffect(() => { fetchBlogs(); },[]);

  // const handleEditorChange = (newData) => {
  //   setEditorData(newData);
  // };
  // const handleItemAdded = (item, allItems) => {
  //   console.log(`Item added: ${item}`, allItems);
  // };

  // const handleItemDeleted = (item, allItems) => {
  //   console.log(`Item removed: ${item}`, allItems);
  // };
  // const blogData: Package[] = [
  //   {
  //     _id: "679b99864df187549beaf36d",
  //     title: "Understanding the Basics of MongoDB",
  //     content: "<p>MongoDB is a NoSQL database that allows for scalable storage and high-performance queries. In this blog post, we will explore its key features.</p><img src='https://example.com/mongodb-image.jpg' alt='MongoDB Logo'>",
  //     metaTitle: "MongoDB Basics | Learn MongoDB",
  //     metaDescription: "Learn the fundamentals of MongoDB, a popular NoSQL database, including its key features, uses, and advantages.",
  //     metaTags: [
  //         "mongodb",
  //         "database",
  //         "nosql",
  //         "web development",
  //         "backend"
  //     ],
  //     status: "published",
  //     coverImage: "https://msa-club.com/assets/path_banner-YixP4d6l.png",
  //     postedBy: "Taimoor",
  //     postedDate: "2025-01-30T10:00:00.000Z",
  //     categories: [
  //         "Technology",
  //         "Database",
  //         "Web Development"
  //     ],
  // }
  // ];
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-[1920px] ">
        <Breadcrumb pageName="Saved Blogs" />

        <div className="">
          <div className="w-full">
            <div className="rounded border w-full border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <TableThree blogData={blogData}/>
            </div>
          </div>
          
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
