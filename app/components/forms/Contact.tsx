'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mjvnrvgj"); 
  if (state.succeeded) {
    return <p className="mt-12 text-lg font-semibold text-center p-24 text-indigo-500">Thanks for contacting Gamer Date admins! We'll get back to you as soon as we can!</p>;
  }

  return (
    <div className='flex justify-center items-center bg-indigo-200 p-5 md:p-8 rounded-xl mx-auto w-full sm:w-3/4 sm:min-w-[60vh] lg:min-h-[75vh] md:min-w-[80vh] lg:min-w-[80vh]' >
    <form onSubmit={handleSubmit} className="py-6 px-4 sm:px-6 bg-white shadow-md rounded-md overflow-y-auto hide-scrollbar w-full my-8'">
      <legend className="text-lg font-medium text-gray-200 mb-4">
        <h1 className='text-black text-2xl font-bold text-center mt-2 mb-4 navfont'>Contact Us</h1>
      </legend>

      <div className="formItem">
        <label htmlFor="name" className="block text-lg text-black mb-1 mt-3">
          Name:
        </label>
        <input type="text" name="name" id="name" placeholder="Name*" required
          className="w-full px-4 py-2 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-800 focus:border-indigo-800" />
      </div>

      <div className="formItem">
        <label htmlFor="email" className="block text-lg text-black mb-1 mt-3">
          Email:
        </label>
        <input type="email" name="email" id="email" placeholder="Email*" required
          className="w-full px-4 py-2 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-800 focus:border-text-box" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />
      </div>

      <div className="formItem">
        <label htmlFor="message" className="block text-lg text-black mb-1 mt-3">
          Message:
        </label>
        <textarea name="message" id="message" rows={5} placeholder="Message*" required
          className="w-full p-4 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-800 focus:border-indigo-800"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />
      </div>

      <button type="submit" disabled={state.submitting} className="text-box py-2 px-4 bg-indigo-800 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
        Send Message
      </button>
    </form>
    <br></br>
    </div>
  );
};

export default ContactForm;
