"use client";
import React, { useState } from "react";

function LoginPge() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="mt-8 px-4 sm:px-8 md:px-16">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-md mx-auto text-center">
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="block w-full max-w-[300px] p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary mx-auto"
        />
        
        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="block w-full max-w-[300px] p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary mx-auto"
        />
        
        {/* Login Button */}
        <button
          type="submit"
          className="w-full max-w-[300px] bg-primary text-white py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary mx-auto"
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
          className="w-full max-w-[300px] flex gap-4 justify-center bg-gray-100 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary mx-auto"
        >
          Register with Google
        </button>
      </form>
    </section>
  );
}

export default LoginPge;
