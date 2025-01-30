
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
        // value={cover}
        // onChange={handleCoverChange}
      />
              </div>
              <div className="p-7">
                <form action="#">
                <div className="mb-5.5">
                    <label
                      className="mb-3 block font-bold text-lg text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Content Section
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-5">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_88_10224">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                       <Editor data={editorData}  />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-stroke dark dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out "
                      type="submit"
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
                <h3 className="font-bold text-lg text-black dark:text-white">
                Choose Blog Format
                </h3>
              </div>
              <div className="p-7 ">
                <form action="#">
                <div className="mb-5.5">
                <InputField
        label="Blog Cover:"
        placeholder="Enter Blog Cover Picture URL"
        // value={cover}
        // onChange={handleCoverChange}
      />
              </div>
              <FileUploadInput
  label="Click to upload an image"
  accept="image/jpeg, image/png"
  maxSize={500000} // 500KB
  maxDimensions={{ width: 500, height: 500 }} // Max 500x500px image
  onFileChange={(file) => console.log('File uploaded:', file)}
  disabled={false}
/>
                <div className="mb-5.5">
                <MultipleValueTextInput
        label="Categories"
        name="item-input"
        placeholder="Separate with comma or enter."
        values={categories}
        // onItemAdded={handleItemAdded}
        // onItemDeleted={handleItemDeleted}
      />
              </div>
                <div className="mb-5.5">
                <InputField
        label="Meta Title"
        placeholder="Enter Meta Title"
        // value={cover}
        // onChange={handleCoverChange}
      />
              </div>
                <div className="mb-5.5">
                <InputField
        label="Meta Description"
        placeholder="Enter Meta Description"
        // value={cover}
        // onChange={handleCoverChange}
      />
              </div>
                <div className="mb-5.5">
                <MultipleValueTextInput
        label="Meta Tags"
        name="item-input"
        placeholder="Separate with comma or enter."
        values={categories}
        // onItemAdded={handleItemAdded}
        // onItemDeleted={handleItemDeleted}
      />
              </div>
              <div className="mb-5.5">
              <h3 className="font-bold text-lg text-black dark:text-white mb-3.5">
               Posted By
                </h3>
                  <div className="mb-4 flex items-center gap-3">
                    
                    <div className="h-14 w-14 rounded-full">
                      <Image
                        src={"/images/user/user-03.png"}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                   
                      <span className="mb-1.5 font-bold text-base text-black dark:text-white">
                      Taimoor
                      </span>
                      <span className="flex text-sm gap-2.5">
                        12:00 pm 
                       
                      </span>
                    </div>
                  </div>

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
