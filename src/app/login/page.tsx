"use client"
import React from 'react'
import { useState } from "react";
function LoginPge() {
    const [email, setEmail] = useState(""); // Correctly manage email state
    const [password, setPassword] = useState(""); 
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
        <form  className='max-w-xs mx-auto'> 
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={email} // Bind email state to the input
            onChange={(ev) => setEmail(ev.target.value)} // Update email state on change
            className="block w-full p-2 mb-4 border rounded"
          />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password} // Bind password state to the input
            onChange={(ev) => setPassword(ev.target.value)} // Correctly update password state
            className="block w-full p-2 mb-4 border rounded"
          /> 
           <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-full"
          >Login</button>
          <div className="my-4 text-center text-gray-500">
            or register with provider
          </div>
          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex gap-4 justify-center bg-gray-100 py-2 rounded-full border"
          >
            Register with Google
          </button>
        </form>
    </section>
  )
}

export default LoginPge