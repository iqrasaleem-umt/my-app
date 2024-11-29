import React from 'react';
import MenuCard from '../components/menucard';
import { Products } from '../utils/mock';

function MenuList() {
  const productChunks = Products.slice(0, 4); // Correct slicing for 4 products

  return (
    <div className='flex items-center justify-evenly mt-14  gap-2  p-4 rounded-lg shadow-sm ="'> 
      {productChunks.map((product) => (
        <MenuCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image} // Assuming `product.image` contains a string path or StaticImageData
              id={product.id} 
              description={product.description}        />
      ))}
    </div>
  );
}

export default MenuList;
