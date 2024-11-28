// import React from 'react';
// import Image, { StaticImageData } from 'next/image';
// // Defining the interface for the component props
// interface MenuCardProps {
//   name: string;
//   price: number; 
//   image: StaticImageData;
//   description: string;
//   id: number;
// }

// // Correcting the component definition and typing
// const MenuCard: React.FC<MenuCardProps> = ({ name, price, image, description }) => {
//   return (
//     <div >
//       {/* Centered Image */}
//       <div className=''>
//         <Image
//           src={image}  // Using the image prop here
//           alt={name}   // Using the name as alt text for better accessibility
//           width={220}
//           height={140}
//           className="rounded-t-lg"
//         />
//       </div>

//       {/* Title */}
//       <h1 className="text-center text-md font-semibold mt-3">{name}</h1>

//       {/* Description */}
//       <p className="text-gray-600 text-sm text-center mt-2">{description}</p>

//       {/* Button */}
//       <button className="w-full px-4 py-2 mt-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
//         Add to Cart ${price}
//       </button>
//     </div>
//   );
// };

// export default MenuCard;

// Add this line at the top of the file
"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

// Defining the interface for the component props
interface MenuCardProps {
  name: string;
  price: number;
  image: StaticImageData;
  description: string;
  id: number;
}

// Correcting the component definition and typing
const MenuCard: React.FC<MenuCardProps> = ({ name, price, image, description }) => {
  const [message, setMessage] = useState<string | null>(null); // State to track the message

  const handleAddToCart = () => {
    setMessage('Your order has been added to the cart!');
    setTimeout(() => setMessage(null), 3000); // Clear the message after 3 seconds
  };

  return (
    <div className="w-[280px] h-[360px] border p-4 rounded-lg shadow-sm flex flex-col justify-between">
      {/* Image */}
      <div className="flex justify-center items-center w-full h-[140px] bg-gray-100 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={220}
          height={140}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-md font-semibold mt-3">{name}</h1>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center mt-2">{description}</p>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 mt-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
      >
        Add to Cart ${price}
      </button>

      {/* Message */}
      {message && (
        <p className="text-green-500 text-center mt-2 text-sm">{message}</p>
      )}
    </div>
  );
};

export default MenuCard;
