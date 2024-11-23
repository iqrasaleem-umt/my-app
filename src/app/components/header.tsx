import React from 'react'
import  Link  from "next/link";
function Header() {
  return (
    <header className="flex items-center justify-between">
    
    <nav className="flex gap-8 text-gray-500 font-semibold items-center">
    <Link className="text-primary font-semibold text-2xl" href="/">Delicious Pizza</Link>
      <Link href={'/'}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>contact</Link>
      </nav>
      <nav className='flex text-center text-gray-500 gap-4 font-semibold'>
        <Link className='mt-2' href={"/login"}>Login</Link>
      <Link href={'/register'} className="bg-primary text-white rounded-full px-8 py-2">Register</Link>
      <Link href={'/profile'} className="bg-primary text-white rounded-full px-8 py-2">Profile</Link>

        </nav> 
      </header> 
  )
}

export default Header