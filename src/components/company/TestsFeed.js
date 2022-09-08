import React from "react";

function TestsFeed() {
  return <div>
    <div>
      <div classNameName="py-16 white gap-6">
        <div className="container gap-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl ">
            TEST FEED
          </h2>
          <div className="grid gap-6 md:grid-rows-1 lg:grid-cols-1">
            {/* ------------------------------------------code starts------------------------------------- */}
            <div className="grid gap-2 md:grid-rows-1 lg:grid-cols-1">
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-6 sm:p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="gap-6">
                    <h1 className="font-bold">TEST TITLE </h1>
                    <div className="flex-none flex items-center justify-center sm:justify-start gap-10	">
                      <div>
                        <h5>
                         <b>Duration:</b>
                        </h5>
                        <h6>10 Tests</h6>
                      </div>
                      <div>
                        <h5>
                          <b>Industry experience:</b>
                        </h5>
                        <h6>3 Years</h6>
                      </div>
                      <div>
                        <h5>
                          <b>Created:</b>
                        </h5>
                        <h6>10 Tests</h6>
                      </div>
                    </div>
                    <div className="gap-10">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur facere velit dolorum neque quia quasi sit omnis aliquam. Aliquid! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, placeat?</p>
                    </div>
                    <div>
                    <span id="badge-dismiss-default" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800">
  Default
  <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
      <svg aria-hidden="true" className="w-3.5 h-3.5" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span className="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-dark" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-200 dark:text-gray-800">
  Dark
  <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
      <svg aria-hidden="true" className="w-3.5 h-3.5" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span className="sr-only">Remove badge</span>
  </button>
</span>
<span id="badge-dismiss-red" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-200 dark:text-red-800">
  Red
  <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-300 dark:hover:text-red-900" data-dismiss-target="#badge-dismiss-red" aria-label="Remove">
      <svg aria-hidden="true" className="w-3.5 h-3.5" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span className="sr-only">Remove badge</span>
  </button>
</span>
                    </div>
                  </div>
                 

                  <div className="flex justify-center">
                    <img className="p-1 w-20 h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 xl:justify-end" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" alt="Bordered avatar" />
                  </div>
                </div>

              </div>
            </div>
            {/* ---------------------------------------------------------------code end--------------------------------------- */}

          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default TestsFeed;
