"use client";

import { useState } from "react";
import UserTabs from "../components/usertabs";

function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <section>
      <div className="mt-8 text-gray-500 rounded-lg">
        <UserTabs />
      </div>
      <div className="flex items-center justify-center min-h-screen mt-8 px-4 sm:px-6 md:px-8">
        <div className="bg-white p-8 rounded-lg w-full max-w-md sm:max-w-lg shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold text-primary mt-4">Profile Info</h2>
            <p className="text-xl text-gray-500 mb-4">Enter your info</p>
            {/* Placeholder Profile Image */}
            <div className="relative w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">Upload</span>
            </div>
          </div>

          {/* Form */}
          <form
            className="flex flex-col items-center gap-4"
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
              className="block w-full max-w-[300px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full max-w-[300px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full max-w-[300px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full max-w-[300px] p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="block w-full max-w-[300px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="block w-full max-w-[300px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="block w-full max-w-[300px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="block w-full max-w-[300px] bg-primary text-white py-2 rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
