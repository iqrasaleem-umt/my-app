"use client";

import SectionHeaders from "../components/sectionheader";


export default function HomeItems() {
  // Hardcoded best sellers data to avoid fetching from the backend
 
  return (
    <section className="relative mt-12">
      

      <div className="text-center mb-4">
        <SectionHeaders subHeader={'Check out'} mainHeader={'Our Best Sellers'} />
      </div>

      
    </section>
  );
}
