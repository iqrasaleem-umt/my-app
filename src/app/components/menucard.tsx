"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface MenuCardProps {
  name: string;
  price: number;
  image: StaticImageData | string; // Allow both StaticImageData or string
  description: string;
  id: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, price, image, description }) => {
  const [message, setMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    setMessage('Your order has been added to the cart!');
    setTimeout(() => setMessage(null), 3000); // Clear the message after 3 seconds
  };

  return (
    <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] p-4 rounded-lg shadow-sm flex flex-col justify-between bg-white">
      <div className="flex justify-center items-center w-full h-[200px] bg-gray-100 rounded-t-lg overflow-hidden border-0">
  <Image
    src={image}
    alt={name}
    width={220}
    height={140}
    className="object-cover w-full h-full"
  />
</div>
      <h1 className="text-center text-md font-semibold mt-3">{name}</h1>
      <p className="text-gray-600 text-sm text-center mt-2">{description}</p>
      <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 mt-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
      >
        Add to Cart ${price}
      </button>
      {message && (
        <p className="text-green-500 text-center mt-2 text-sm">{message}</p>
      )}
    </div>
  );
};

export default MenuCard; // Ensure this is a default export
