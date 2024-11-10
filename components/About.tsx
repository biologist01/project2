// components/AboutContent.jsx
import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-16 px-8 bg-black text-center font-sans animate-fadeIn">
      <h2 className="text-4xl text-white">About Me</h2>
      <p className='text-lg max-w-[800px] mx-auto text-white leading-relaxed mt-6' >
        Hello! I am a passionate web developer with a love for creating modern and user-friendly websites.
        I specialize in front-end development, particularly using React, Next.js, and Tailwind CSS, but I also
        have experience with back-end technologies like Node.js. My goal is to build fast, responsive,
        and beautiful web applications that provide excellent user experiences.
      </p>

      <p className='text-lg max-w-[800px] mx-auto text-white leading-relaxed mt-6'>
        I am always excited to learn new technologies and improve my skills. Outside of coding, I enjoy traveling, 
        photography, and exploring the latest design trends. My mission is to continuously challenge myself and
        create innovative solutions for my clients and users.
      </p>
    </section>
  );
};

export default AboutContent;
