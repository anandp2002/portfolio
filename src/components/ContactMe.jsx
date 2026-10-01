import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const EMAILJS_SERVICE_ID = 'service_favf68v';
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
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error(`Error : ${error.text}`);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto p-5 pt-24" id="contact">
      <Toaster />

      <h2 className="mb-10 text-center text-3xl font-medium lg:text-4xl">
        CONTACT ME
      </h2>

      {/* Form with animation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <form
          className="border border-purple-300/20 rounded-lg py-10 px-6 sm:px-10 space-y-6 bg-white/[0.03] backdrop-blur-sm"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <label className="block text-purple-200/80 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 bg-white/5 text-stone-200 rounded-md border border-purple-300/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 placeholder-stone-500 transition duration-200"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200/80 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 bg-white/5 text-stone-200 rounded-md border border-purple-300/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 placeholder-stone-500 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200/80 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 bg-white/5 text-stone-200 rounded-md border border-purple-300/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 placeholder-stone-500 transition duration-200 h-36 resize-none"
              placeholder="Type your message"
              required
            />
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              disabled={isSending}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-md hover:from-purple-500 hover:to-violet-500 transition-all duration-200 cursor-pointer shadow-lg shadow-purple-900/40 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
