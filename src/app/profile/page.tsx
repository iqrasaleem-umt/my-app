"use client";

import { useState } from "react";

function ProfilePage() {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
        <div className="flex flex-col items-center mb-6">
          {/* Profile Image */}
          <h2 className="  text-2xl font-bold text-primary mt-8">Profile info</h2>
          <p className="text-xl text-gray-500">Enter your info</p>
          <div className="relative w-24 h-24"></div>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4 -mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            console.log({
              firstName,
              lastName,
              email,
              phone,
              street,
              city,
              country,
            });
            alert("Profile saved successfully!");
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border rounded bg-gray-100"
          />
          <input
            type="text"
            placeholder="Street Address"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-full hover:bg-blue-600 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
