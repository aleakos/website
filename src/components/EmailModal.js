import React, { useState } from 'react';

const EmailModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="py-3 px-6 my-6 lowercase text-gray-800 dark:text-white font-black text-3xl flex items-center hover:text-purple-400 hover:cursor-pointer"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 1792 1792"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
        </svg>
        <span className=" plex text-lg ml-3 mt-1">aleakos@gmail.com</span>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="plex text-3xl font-semibold">contact form.</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" plex relative p-6 flex-auto">
                  <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-100 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Alex"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Leakos"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          Email
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="email"
                          type="email"
                          placeholder="wellfunded@company.com"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          Message
                        </label>
                        <textarea
                          class=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                          id="message"
                          placeholder="We'd like to offer you a new job opportunity..."
                        ></textarea>
                      </div>
                    </div>
                    <div class="md:flex md:items-center"></div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 space-x-4">
                  <button
                    className="uppercase py-2 my-2 px-4 md:mt-0 mx-4bg-transparent bg-white dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="uppercase py-2 my-2 px-4 md:mt-0 bg-transparent bg-green-200 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md box-shadow-black hover:box-shadow-purple mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EmailModal;
