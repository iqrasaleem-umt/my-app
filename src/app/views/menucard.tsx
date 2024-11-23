import Image from "next/image";

const MenuCard = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center max-w-sm mx-auto mt-24 hover:bg-white transition duration-300 ease-in-out">
      <Image
        className="mx-auto"
        src="/pizza.png"
        alt="Pepperoni Pizza"
        width={100}
        height={100}
      />
      <h4 className="font-bold text-lg mt-4">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm mt-2">
        A delicious pepperoni pizza with a crispy crust.
      </p>
      <button className="bg-primary text-white px-4 py-2 rounded-full mt-4">
        Add to Cart $12
      </button>
    </div>
  );
};

export default MenuCard;
