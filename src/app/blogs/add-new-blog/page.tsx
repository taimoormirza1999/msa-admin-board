'use client'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputField from "@/components/FormElements/InputField";
import MultipleValueTextInput from "@/components/FormElements/MultipleValueTextInput";
import React, { useState } from "react";
import FileUploadInput from "@/components/FormElements/FileUploadInput";
import Editor from "@/components/FormElements/Editor";
import axios from "axios";

const Settings = () => {
  const [categories, setCategories] = useState(['Animation Courses']);
  const [metaTags, setMetaTags] = useState(['Courses']);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [editorData, setEditorData] = useState("");
  const [blogsTitle, setBlogsTitle] = useState("");
  const [blogsCoverPic, setBlogsCoverPic] = useState("https://images.unsplash.com/photo-1613487957484-32c977a8bd62?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({
  //     blogsTitle,
  //     blogsCoverPic,
  //     editorData,
  //     categories,
  //     metaTitle,
  //     metaDescription,
  //     metaTags,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      title: blogsTitle,
      content: "editorData",
      metaTitle,
      metaDescription,
      metaTags,
      coverImage: blogsCoverPic,
      postedBy: "Taimoor",
      postedDate: new Date().toISOString(),
      categories,
    };

    try {
      const response = await axios.post("http://localhost:5002/blogs",blogData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log("Blog posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };
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
                  value={blogsTitle}
                  onChange={(e) => setBlogsTitle(e.target.value)}
                />
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5">
                    <label className="mb-3 block font-bold text-lg text-black dark:text-white">
                      Content Section
                    </label>
                    {/* <Editor data={editorData} onChange={(data) => setEditorData(data)} /> */}
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-stroke dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-black-2 transition-all duration-300 ease-in-out"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-bold text-lg text-black dark:text-white">Choose Blog Format</h3>
              </div>
              <div className="p-7">
                <form>
                  <div className="mb-5.5">
                    <InputField
                      label="Blog Cover:"
                      placeholder="Enter Blog Cover Picture URL"
                      value={blogsCoverPic}
                      onChange={(e) => setBlogsCoverPic(e.target.value)}
                    />
                  </div>
                  <FileUploadInput
                    label="Click to upload an image"
                    accept="image/jpeg, image/png"
                    maxSize={500000}
                    maxDimensions={{ width: 500, height: 500 }}
                    onFileChange={(file) => console.log('File uploaded:', file)}
                    disabled={false}
                  />
                  <div className="mb-5.5">
                    <MultipleValueTextInput
                      label="Categories"
                      name="categories"
                      placeholder="Separate with comma or enter."
                      values={categories}
                      onItemAdded={(value) => setCategories([...categories, value])}
                      onItemDeleted={(value) => setCategories(categories.filter((item) => item !== value))}
                    />
                  </div>
                  <div className="mb-5.5">
                    <InputField
                      label="Meta Title"
                      placeholder="Enter Meta Title"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-5.5">
                    <InputField
                      label="Meta Description"
                      placeholder="Enter Meta Description"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-5.5">
                    <MultipleValueTextInput
                      label="Meta Tags"
                      name="metaTags"
                      placeholder="Separate with comma or enter."
                      values={metaTags}
                      onItemAdded={(value) => setMetaTags([...metaTags, value])}
                      onItemDeleted={(value) => setMetaTags(metaTags.filter((item) => item !== value))}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
