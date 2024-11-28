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
      <section className="text-center my-8 px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-base sm:text-lg">
          The combination of spices and herbs creates a tantalizing aroma that fills the air, making every slice irresistible. Whether you love it bold and spicy or simple and classic, our pizza offers a mouthwatering experience that leaves you craving more.
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-base sm:text-lg">
          Every bite of our pizza is a symphony of flavors that dance on your taste buds. The crispy, golden crust gives way to a rich, tangy tomato sauce, perfectly balanced with a blend of melty, gooey cheese. 
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="text-center my-8 px-4 md:px-8 lg:px-16">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="mt-4">
          <a className="text-xl sm:text-2xl md:text-3xl underline text-gray-500" href="tel:+92:030012345">
            +92 0300 12345
          </a>
        </div>
      </section>

      {/* Add to Cart Button Section */}
      <section className="text-center my-8 px-4 md:px-8 lg:px-16">
        
      </section>
    </>
  );
}
