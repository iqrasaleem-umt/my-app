"use client";

import SectionHeaders from "../components/sectionheader";
import Image from "next/image";


export default function HomeItems() {
  // Hardcoded best sellers data to avoid fetching from the backend
 
  return (
    <section className="relative mt-12">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>

      </div>

      <div className="text-center mb-4">
        <SectionHeaders subHeader={'Check out'} mainHeader={'Our Best Sellers'} />
      </div>

      
    </section>
  );
}
