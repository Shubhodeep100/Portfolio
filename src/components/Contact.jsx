import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full bg-gradient-to-b from-black to-gray-900 p-2 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto w-full h-full">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <p className="py-6 text-center">
          Submit the form below to get in touch with me
        </p>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/db61004d-259c-4004-8efa-37745c52e6d7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-lg  text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-lg  text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-lg hover:scale-110 duration-300">
              Lets Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
