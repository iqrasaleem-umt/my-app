import React from 'react';

function MenuItems() {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-6 space-y-4 px-4 sm:px-6 md:px-8">
      {/* Item Name */}
      <div>
        <label htmlFor="item-name" className="block text-sm text-gray-500">
          Item Name
        </label>
        <input
          id="item-name"
          type="text"
          placeholder="Enter item name"
          className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm text-gray-500">
          Description
        </label>
        <textarea
          id="description"
          placeholder="Enter item description"
          className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-primary bg-gray-100"
        />
      </div>

      {/* Base Price */}
      <div>
        <label htmlFor="base-price" className="block text-sm text-gray-500">
          Base Price
        </label>
        <input
          id="base-price"
          type="text"
          placeholder="Enter base price"
          className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      {/* Sizes Section */}
      <div>
        <h2 className="text-xl text-gray-500">Sizes</h2>
        <div className="flex justify-between mt-2 text-sm text-gray-500 gap-8">
          <span>Size Name</span>
          <span>Extra Price</span>
        </div>
        
        <div className="flex gap-4 mt-3 flex-wrap">
          <input
            type="text"
            placeholder="Size name"
            className="flex-1 p-2 border rounded focus:outline-none focus:ring focus:ring-primary mb-2 sm:mb-0"
          />
          <input
            type="text"
            placeholder="Extra price"
            className="flex-1 p-2 border rounded focus:outline-none focus:ring focus:ring-primary mb-2 sm:mb-0"
          />
        </div>
        
        <button className="text-gray-400 rounded-full mt-2 w-full sm:w-auto">Add item size</button>
        <button className="bg-primary text-white rounded-full mt-2 w-full sm:w-auto">Save</button>
      </div>
    </div>
  );
}

export default MenuItems;
