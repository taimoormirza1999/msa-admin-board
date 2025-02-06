'use client'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputField from "@/components/FormElements/InputField";
import MultipleValueTextInput from "@/components/FormElements/MultipleValueTextInput";
import React, { useState,useCallback, useEffect } from "react";
import FileUploadInput from "@/components/FormElements/FileUploadInput";
import Editor from "@/components/FormElements/Editor";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { useParams } from "next/navigation";

const EditBlog = () => {
  const params = useParams();
  const id = params.id;
  const [categories, setCategories] = useState(['Animation Courses']);
  const [metaTags, setMetaTags] = useState(['Courses']);
  const [metaTitle, setMetaTitle] = useState("Learn Drawing & Animation: A Beginner's Guide to Creative Expression");
  const [metaDescription, setMetaDescription] = useState("Unleash your creative potential with our step-by-step guide on learning drawing and animation for beginners. Explore the world of visual arts.");
  const [editorData, setEditorData] = useState("");
  const [blogsTitle, setBlogsTitle] = useState("Learn Drawing & Animation: A Beginner's Guide to Creative Expression");
  const [blogsContentType, setBlogsContentType] = useState("html");
  const [blogsCoverPic, setBlogsCoverPic] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEditorChange = useCallback((data) => {
    setEditorData(data);
  }, []);
  
  function makefriendlyUrl(title: string){
    const slug = title
     .toString()
     .toLowerCase()
     .replace(/\s+/g, '-') 
     .replace(/[^\w-]+/g, '') 
     .replace(/--+/g, '-');
    return slug;
  }
  const [blogData, setBlogData] = useState(null);

  const fetchBlogs = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`);
    setBlogData(response.data);
    setCategories(response.data.categories)
    setMetaTags(response.data)
    setMetaTitle(response.data.title)
    setMetaDescription(response.data)
    setEditorData(response.data.content)
    setBlogsTitle(response.data)
    setBlogsContentType(response.data)
    setBlogsCoverPic(response.data.coverImage)
  };

  useEffect(() => {
    alert(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`)
    fetchBlogs();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const friendlyUrl=makefriendlyUrl(blogsTitle);

    const toastId = toast.loading("Blog Saving...");
    setLoading(true);
    const blogData = {
      title: blogsTitle,
      content: editorData,
      metaTitle,
      metaDescription,
      metaTags,
      coverImage: blogsCoverPic,
      postedBy: "Taimoor",
      postedDate: new Date().toISOString(),
      categories,
      friendlyUrl,
    };

    try {
      const response = await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/blogs`,blogData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      setLoading(false);
      toast.update(toastId, {
        render: "Blog posted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000, // Automatically close after 3 seconds
      });
      // console.log("Blog posted successfully:", response.data);
    } catch (error) {
      setLoading(false);
      toast.update(toastId, {
        render: "Error posting blog!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
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
                <div className="mb-5.5">
                    <label className="mb-0 block font-bold text-lg text-black dark:text-white">
                      Content Section 
                    </label>
                    <div className="flex flex-row flex-wrap gap-1 mb-2 justify-end">
                    <button
                    onClick={()=>setBlogsContentType('html')}
                className={`text-gray-500 ${blogsContentType=='html'?'bg-gray-300':'bg-gray-100'} bg-gray-100 border-[1.34px] shadow-gray-2 border-gray-300 py-0.5 text-[0.55rem] lg:text-[0.65rem] font-medium px-2 rounded-[6px] font-impact-regular bg-opacity-45 shadow-2xl `}
              >
                Code
              </button>
                    <button
                onClick={()=>setBlogsContentType('editor.js')}
                className={`text-gray-500 ${blogsContentType=='editor.js'?'bg-gray-300':'bg-gray-100'} border-[1.34px] shadow-gray-2 border-gray-300 py-0.5 text-[0.55rem] lg:text-[0.65rem] font-medium px-2 rounded-[6px] font-impact-regular bg-opacity-45 shadow-2xl `}
              >
                Editor
              </button>
                    </div>
                    </div>
                <form onSubmit={handleSubmit}>
                  <div >
                  
                    {
                      blogsContentType === "editor.js" ? (
                        <div className="mt-5.5">
                          <Editor data={editorData} onChange={handleEditorChange} />
                        </div>
                      ): (
                        <div className="mt-5.5  ">
                        <textarea
                         rows={20}
                         className="w-full bg-gray-100 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          value={editorData}
                          onChange={(e) => handleEditorChange(e.target.value)}
                        />
                      </div>
                      )  
                    }
                    {/* <Editor data={editorData} onChange={handleEditorChange} /> */}
                    </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-stroke dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="cursor-pointer flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-black-2 transition-all duration-300 ease-in-out"
                      type="submit"
                    >      
                    {loading&&<div className="spinner-border animate-spin h-5 w-5 border-[3px] border-t-transparent border-white rounded-full mr-2" />}
                     {loading?"Saving....":"Save"} 
                  
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
      <ToastContainer />
      </div>

    </DefaultLayout>
  );
};

export default EditBlog;
