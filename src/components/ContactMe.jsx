import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const EMAILJS_SERVICE_ID = 'service_fxlxjgh';
  const EMAILJS_TEMPLATE_ID = 'template_n3xybyf';
  const EMAILJS_PUBLIC_KEY = 'wgL8-ExK_02SaZx7h';

  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    setIsSending(true);
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          toast.success('Email sent successfully !');
          form.current.reset(); // Clear the form after sending
        },
        (error) => {
          setIsSending(false);
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

      {/* Left side: Form with animation */}
      <motion.div
        className="w-full lg:w-1/2 h-[593px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <form
          className="bg-gray-100 py-4 px-6 rounded-lg lg:rounded-none lg:rounded-l-lg shadow-md max-w-2xl mx-auto space-y-6 h-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2 className="mb-6 text-center sm:text-right text-3xl font-medium lg:text-4xl text-[#190417] ">
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

          <button
            type="submit"
            className="w-[100px] p-3 bg-[#3f1e3c] text-white font-semibold rounded-md hover:bg-[#2d152a] transition ease-in-out duration-200 cursor-pointer"
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* Right side: Image with animation */}
      <motion.div
        className="w-full lg:w-1/2 h-[593px] hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="contactme.jpg"
          className="h-full w-full object-cover rounded-r-lg"
        />
      </motion.div>
    </div>
  );
};

export default ContactMe;
