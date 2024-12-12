import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactMe = () => {
  const EMAILJS_SERVICE_ID = 'service_fxlxjgh';
  const EMAILJS_TEMPLATE_ID = 'template_n3xybyf';
  const EMAILJS_PUBLIC_KEY = 'wgL8-ExK_02SaZx7h';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Email sent successfully !');
        },
        (error) => {
          toast.error(`Error : ${error.text}`);
        }
      );
  };

  return (
    <div
      className="max-w-7xl mx-auto p-5 pt-24 flex items-stretch"
      id="contact"
    >
      <Toaster />

      {/* Left side */}
      <div className="w-full lg:w-1/2 h-[593px]">
        <form
          className="bg-gray-100 py-4 px-6 rounded-lg lg:rounded-none lg:rounded-l-lg shadow-md max-w-2xl mx-auto space-y-6 h-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2 className="mb-6 text-start text-3xl font-medium lg:text-4xl text-[#190417] ">
            CONTACT ME
          </h2>
          <label className="block text-[#190417] font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950/20"
            placeholder="Enter your name"
            required
          />

          <label className="block text-[#190417] font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950/20"
            placeholder="Enter your email"
            required
          />

          <label className="block text-[#190417] font-semibold">Message</label>
          <textarea
            name="message"
            className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950/20 h-32"
            placeholder="Type your message"
            required
          />

          <input
            type="submit"
            value="Send"
            className="w-[100px] p-3 bg-[#190417] text-white font-semibold rounded-md hover:bg-[#43213f] transition ease-in-out duration-200 cursor-pointer"
          />
        </form>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 h-[593px] hidden lg:block">
        <img src="c4.jpg" className="h-full w-full object-cover rounded-r-lg" />
      </div>
    </div>
  );
};

export default ContactMe;
