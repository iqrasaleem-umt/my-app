import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
      {/* Logo and Navigation Links */}
      <nav className="flex flex-col md:flex-row gap-8 text-gray-500 font-semibold items-center md:justify-between w-full md:w-auto">
        <Link className="text-primary font-semibold text-2xl" href="/">
          Delicious Pizza
        </Link>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0">
          <Link href="/">Home</Link>
          <Link href="/wholemenu">Whole Menu</Link>
        </div>
      </nav>

      {/* Login, Register, and Profile */}
      <nav className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-center text-gray-500 font-semibold">
        <Link className="mt-2" href="/login">Login</Link>
        <Link href="/register" className="bg-primary text-white rounded-full px-8 py-2">Register</Link>
        <Link href="/profile" className="bg-primary text-white rounded-full px-8 py-2">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
