import { Product } from "./types";
 import pic1 from "/public/product1.jpg";
 import pic2 from "/public/product2.jpg";
 import pic3 from "/public/product3.jpg";
 import pic4 from "/public/product4.jpg";
 import pic5 from "/public/product5.jpg";
 import pic6 from "/public/product6.jpg";
 import pic7 from "/public/product7.jpg";
 import pic8 from "/public/product8.jpg";
 import pic9 from "/public/pastaimg1.jpg"
 import pic10 from "/public/pastaimg2.jpg"
 import pic11 from "/public/pastaimg3.jpg"
 import pic12 from "/public/pastaimg4.jpg"
 import pic13 from "/public/dessertimg1.jpg"
 import pic14 from "/public/dessertimg2.jpg"
export const Products: Product[]=[
  {
    id: 1,
    name: "Chicken Pizza",
    category: "pizza",
    description:"A savory delight loaded with tender chicken chunks and a blend of flavorful sauces",
    price: 12,
     image: pic1,
  },
  {
    id: 2,
    name: "Sausage Pizza",
    category: "pizza",
    description:"Packed with juicy, seasoned sausage and oozing with melted cheese, this pizza delivers bold ",
    price: 15,
     image: pic2,
  },
  {
    id: 3,
    name: "Plain cheez pizza",
    category: "pizza",
    description:"The classic comfort food with a crispy crust, rich tomato sauce, and layers of gooey mozzarella.",
    price: 18,
     image: pic3,
  },
  {
    id: 4,
    name: "Mashroom Pizza",
    category: "pizza",
    description:"Topped with fresh, savory mushrooms and melted cheese,  balance of earthy and creamy flavors.",
    price: 10,
     image: pic4,
  },
  {
    id: 5,
    name: "Lazania Pizza",
    category: "pizza",
    description:"A fusion of pizza and lasagna, layers of cheese, and hearty toppings for a unique twist.",
    
    price: 15,
     image: pic5,
  },
  {
    id: 6,
    name: "Beef Pizza",
    category: "pizza",
    description:"Juicy, marinated beef with a medley of spices crowns this hearty pizza.",
    price: 26,
     image: pic6,
  },{
    id: 7,
    name: "Vege Pizza",
    category: "pizza",
    description:"A vibrant mix of garden-fresh vegetables atop a crispy crust, perfect for a light yet flavorful meal.",
    price: 16,
     image: pic7,
  },
  {
    id: 8,
    name: "Mix herb Pizza",
    category: "pizza",
    description:"nfused with aromatic herbs and topped with melty cheese, this pizza offers a fragrant and flavorful experience.",
    price: 23,
     image: pic8,
  },
  {
    id: 9,
    name: "Veggie Psta",
    category: "pasta",
    description:"The veggie pasta is packed with colorful, fresh vegetables, tossed in a rich sauce that enhances its flavors, making every bite a satisfying experience.",
    price: 25,
     image: pic9,
  },
  {
    id: 10,
    name: "Pasta with Sauce",
    category: "pasta",
    description:"The chinese pasta is stir-fried to perfection, with savory sauce and tender noodles",
    price: 20,
     image: pic10,
  },
  {
    id: 11,
    name: "Chinese Pasta",
    category: "pasta",
    description:"mouth-watering pasta is topped with a sprinkle of herbs, and served with a delightful presentation",
    price: 24,
     image: pic11,
  },
  {
    id: 12,
    name: "Mouth watering Pasta",
    category: "pasta",
    description:"this is tempting and moth watering piza",
    price: 25,
     image: pic12,
  },
  {
    id: 13,
    name: "Sprinkle Donuts",
    category: "dessert",
    description:"The sprinkle donuts are a delightful treat, coated in vibrant, colorful sprinkles that add a fun crunch to the soft, sweet dough. Each bite is a perfect balance of sweetness",
    price: 16,
     image: pic13,
  },
  {
    id: 14,
    name: "Cherry slice",
    category: "dessert",
    description:"A cherry slice is a sweet, juicy piece of cherry, often used as a garnish, adding a burst of color and flavor to desserts or beverages",
    price: 13,
     image: pic14,
  },
];
