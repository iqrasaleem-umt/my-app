import SectionHeaders from "./components/sectionheader";
import Hero from "./views/hero";
import HomeItems from "./views/homeitems";
import MenuList from "./views/menulist";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4 -inset-40 ">
      {/* Hero Section */}
      <Hero />

      {/* Home Items Section */}
      <section className="max-w-6xl mx-auto p-4 sm:px-6 md:px-8 lg:px-16">
        <HomeItems />
      </section>

      {/* Menu List Section (Hidden on Mobile) */}
      <section className="  max-w-6xl mx-auto p-4 hidden sm:block px-4 sm:px-6 md:px-8 lg:px-16">
        <MenuList />
      </section>

      {/* About Us Section */}
      <section className="text-center my-6 px-4 sm:my-8 md:my-10">
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <p className="max-w-lg mx-auto mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
          The combination of spices and herbs creates a tantalizing aroma that fills the air, making every slice irresistible. Whether you love it bold and spicy or simple and classic, our pizza offers a mouthwatering experience that leaves you craving more.
        </p>
        <p className="max-w-lg mx-auto mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
          Every bite of our pizza is a symphony of flavors that dance on your taste buds. The crispy, golden crust gives way to a rich, tangy tomato sauce, perfectly balanced with a blend of melty, gooey cheese.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="text-center my-6 px-4 sm:my-8 md:my-10">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="mt-4">
          <a
            className="text-lg sm:text-xl md:text-2xl underline text-gray-500"
            href="tel:+92:030012345"
          >
            +92 0300 12345
          </a>
        </div>
      </section>
    </div>
  );
}
