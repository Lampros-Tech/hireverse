import React from "react";

function CreatorsList() {
  return (
    <div>
      <div classNameName="py-16 white gap-0.5">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl ">
            CREATORS
          </h2>
          <div className="grid gap-2 md:grid-rows-1 lg:grid-cols-1">
          {/* ------------------------------------------code starts------------------------------------- */}
          <div className="grid gap-2 md:grid-rows-1 lg:grid-cols-1">
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-6 sm:p-5">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-start sm:mt-0 sm:text-left">
                <h6 className="text-lg font-semibold leading-none">Deepak</h6>
                <p className="text-gray-600">
                  {" "}
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div className="flex-none flex items-center justify-center sm:justify-start  gap-10	">
                  <div>
                    <h5>
                      <b>Created:</b>
                    </h5>
                    <h6>10 Tests</h6>
                  </div>
                  <div>
                    <h5>
                      <b>Industry experience:</b>
                    </h5>
                    <h6>3 Years</h6>
                  </div>
                </div>
                <div className="flex-none flex items-center justify-center sm:justify-start  gap-10">
                  <h5>
                    <b>Expertise</b>
                  </h5>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:#134E6F dark:text-blue-800">
                    Tag-1
                  </span>
                  <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Tag-2
                  </span>
                  <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    Tag-3
                  </span>
                </div>
                <div className="flex-none flex items-end justify-end  gap-10">
                  <button
                    type="button"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
    
        {/* ---------------------------------------------------------------code end--------------------------------------- */}
        </div></div>
    </div>
    </div>
  );
}

export default CreatorsList;
