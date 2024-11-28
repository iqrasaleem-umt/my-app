"use client";
import React, { useState } from "react";

function LoginPge() {
  const [email, setEmail] = useState(""); // Correctly manage email state
  const [password, setPassword] = useState(""); 

  return (
    <section className="mt-8 px-4 sm:px-8 md:px-16">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-md mx-auto"> 
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email} // Bind email state to the input
          onChange={(ev) => setEmail(ev.target.value)} // Update email state on change
          className="block w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password} // Bind password state to the input
          onChange={(ev) => setPassword(ev.target.value)} // Correctly update password state
          className="block w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Login
        </button>

        {/* Provider Text */}
        <div className="my-4 text-center text-gray-500">
          or register with provider
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full flex gap-4 justify-center bg-gray-100 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Register with Google
        </button>
      </form>
    </section>
  );
}

export default LoginPge;
