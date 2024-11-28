import React from 'react'
import MenuCard from '../components/menucard'
import { Products } from '../utils/mock'


function wholeMenu() {
  return (
    <div>
         <div className='flex items-center justify-evenly mt-14  flex-wrap p-4"'> 
      {Products.map((product) => (
        <MenuCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image} // Assuming `product.image` contains a string path or StaticImageData
              id={product.id} 
              description={product.description}        />
      ))}
    </div>
    </div>
  );
}

export default wholeMenu