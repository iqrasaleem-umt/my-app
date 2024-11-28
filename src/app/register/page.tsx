"use client";

import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState(""); // Correctly manage email state
  const [password, setPassword] = useState(""); 

  function handleFormSubmit(ev: { preventDefault: () => void; }) {
    ev.preventDefault();
    console.log("Form submitted with:", { email, password });
    // Here you can handle any client-side actions after the form submission
  }

  return (
    <div>
      <section className="mt-8 px-4 sm:px-6 md:px-8">
        <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
        <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto" onSubmit={handleFormSubmit}>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Register
          </button>

          {/* Alternative Login Providers */}
          <div className="my-4 text-center text-gray-500">
            or register with provider
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex gap-4 justify-center bg-gray-100 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Register with Google
          </button>
        </form>
      </section>
    </div>
  );
}

export default RegisterPage;
