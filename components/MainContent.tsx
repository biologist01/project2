// components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main className="font-sans p-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[goldenrod] to-[#feb47b] text-white text-center py-16 px-4 rounded-lg mb-8">
        <div>
          <h1 className="text-4xl m-0">Welcome to My Portfolio</h1>
          <p className='text-lg mt-4'>Crafting beautiful, responsive, and performant websites tailored to your needs.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center my-8">
        <h2 className='text-3xl'>About Me</h2>
        <p className='max-w-[700px] mx-auto text-lg text-[#555] mt-4'>
          I am a passionate web developer with experience in creating functional and visually appealing
          websites. My goal is to bring your ideas to life in the digital world with clean, modern designs.
        </p>
      </section>

      {/* Features Section */}
      <section className="text-center mt-16 ">
        <h2 className='text-4xl mb-8'>What I Offer</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-8 text-[#555] rounded-lg shadow-lg max-w-[300px] w-full text-center  hover:-translate-y-2 hover:shadow-[0_6px_12px_rgba(218,165,32,0.4)]">
            <h3 className='text-2xl mb-6'>Responsive Design</h3>
            <p>Beautiful designs that adapt perfectly to any screen size.</p>
          </div>
          <div className="bg-white p-8 text-[#555] rounded-lg shadow-lg max-w-[300px] w-full text-center hover:-translate-y-2 hover:shadow-[0_6px_12px_rgba(218,165,32,0.4)]">
            <h3 className='text-2xl mb-6'>Fast Performance</h3>
            <p>Optimized code to ensure fast loading and a smooth experience.</p>
          </div>
          <div className="bg-white p-8 text-[#555] rounded-lg shadow-lg max-w-[300px] w-full text-center hover:-translate-y-2 hover:shadow-[0_6px_12px_rgba(218,165,32,0.4)]">
            <h3 className='text-2xl mb-6'>SEO Friendly</h3>
            <p>Ensuring your site is visible to search engines from day one.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
