 
 import { StaticImageData } from "next/image";
export interface Product {
    id: number;
    name: string;
   
    category: string;
    description:string;
    price: number;
    
     image: StaticImageData; // Assuming you're using next/image and StaticImageData type
  }