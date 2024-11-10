// components/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-16 px-8 max-w-[800px] mx-auto text-center font-sans text-white ">
      <h2 className="text-4xl mb-8">Get in Touch</h2>
      <p className="text-lg leading-relaxed mb-12">
        If you’d like to discuss a project or just want to say hello, feel free to get in touch!
        I’ll try my best to get back to you as soon as possible.
      </p>

      <form className="flex flex-col gap-6">
        <input className='p-4 border border-gray-300 rounded-lg text-black text-lg focus:border-[goldenrod] focus:outline-none' type="text" name="name" placeholder="Your Name" required />
        <input className='p-4 border border-gray-300 rounded-lg text-black text-lg focus:border-[goldenrod] focus:outline-none' type="email" name="email" placeholder="Your Email" required />
        <textarea className='p-4 border border-gray-300 rounded-lg text-black text-lg focus:border-[goldenrod] focus:outline-none' name="message" placeholder="Your Message" required></textarea>
        <button className='p-4 text-xl text-white bg-[goldenrod] rounded-lg transition-colors hover:bg-[#e7c05c]' type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
