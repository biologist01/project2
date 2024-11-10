// components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#413333] text-[#f1f1f1] py-8 text-center">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-2xl font-bold text-[goldenrod]">
          <Link className='text-[inherit] no-underline' href="/">My Portfolio</Link>
        </div>

        <div className="flex gap-6">
          <Link href="/about" className="text-[#f1f1f1] no-underline font-medium transition-colors duration-300 hover:text-[goldenrod]">About</Link>
          <Link href="/contact" className="text-[#f1f1f1] no-underline font-medium transition-colors duration-300 hover:text-[goldenrod]">Contact</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://vercel.com/fatimas-projects-f0392711" target="_blank" rel="noopener noreferrer" className="text-[#f1f1f1] no-underline transition-colors duration-300 hover:text-[goldenrod]">Vercel</a>
          <a href="https://linkedin.com/in/fatima-aamir-shaikh-3aa3bb313" target="_blank" rel="noopener noreferrer" className="text-[#f1f1f1] no-underline transition-colors duration-300 hover:text-[goldenrod]">LinkedIn</a>
          <a href="https://github.com/biologist01" target="_blank" rel="noopener noreferrer" className="text-[#f1f1f1] no-underline transition-colors duration-300 hover:text-[goldenrod]">GitHub</a>
        </div>

        <p className="text-[#ccc] text-sm mt-6 md:mt-0">© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
