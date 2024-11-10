// components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-[#413333] text-[#f1f1f1] py-4 shadow-[0_4px_8px_rgba(218,165,32,1)] sticky top-0 z-10">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[goldenrod]">
          <Link className='text-[inherit] no-underline' href="/">My Portfolio</Link>
        </h1>

        {/* Hidden checkbox for mobile menu toggle */}
        <input type="checkbox" id="menuToggle" className="hidden" />
        <label htmlFor="menuToggle" className="text-[#f1f1f1] text-2xl cursor-pointer z-20 sm:hidden" aria-label="Toggle menu">
          ☰
        </label>

        <nav className="absolute top-full right-8 bg-[#333] p-4 shadow-[0_4px_8px_rgba(0,0,0,0.2)] hidden flex-col gap-4 sm:flex sm:static sm:flex-row sm:gap-8">
          <Link href="/" className="text-[#f1f1f1] no-underline font-medium transition ease-in-out duration-300 hover:text-[goldenrod] hover:underline hover:font-semibold">Home</Link>
          <Link href="/about" className="text-[#f1f1f1] no-underline font-medium transition ease-in-out duration-300 hover:text-[goldenrod] hover:underline hover:font-semibold">About</Link>
          <Link href="/contact" className="text-[#f1f1f1] no-underline font-medium transition ease-in-out duration-300 hover:text-[goldenrod] hover:underline hover:font-semibold">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
