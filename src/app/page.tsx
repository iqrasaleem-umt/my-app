


import SectionHeaders from "./components/sectionheader";

import Hero from "./views/hero";
import HomeItems from "./views/homeitems";
import MenuList from "./views/menulist";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Home Items Section */}
      <HomeItems />

      {/* Menu List Section */}
      <MenuList />

      {/* About Us Section */}
      <section className="text-center my-16 px-4 md:px-8 lg:px-16">
        <SectionHeaders
          subHeader="Our story"
          mainHeader="About us"
        />
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum corrupti natus? Unde, illo! Quas aliquid iusto itaque architecto consectetur nisi adipisci dolorem, ut sint modi facere voluptate sed saepe?
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum corrupti natus? Unde, illo! Quas aliquid iusto itaque architecto consectetur nisi adipisci dolorem, ut sint modi facere voluptate sed saepe?
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="text-center my-8 px-4 md:px-8 lg:px-16">
        <SectionHeaders
          subHeader="Don't hesitate"
          mainHeader="Contact us"
        />
        <div className="mt-4">
          <a
            className="text-xl md:text-2xl underline text-gray-500"
            href="tel:+92:030012345"
          >
            +92 0300 12345
          </a>
        </div>
      </section>
    </>
  );
}
