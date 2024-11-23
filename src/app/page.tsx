

import SectionHeaders from "./components/sectionheader"
import Hero from "./views/hero"
import Menu from "./views/menu"

export default function Home() {
  return (
   <>
    
    <Hero/>
    <Menu/> 
    <section className="text-center my-16">
   <SectionHeaders
   subHeader={'Our story '}
   mainHeader={'About us'}/>
   <p className="max-w-2xl mx-auto mt-4 text-gray-500"> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum corrupti natus? Unde, illo! Quas aliquid iusto itaque architecto consectetur nisi adipisci dolorem, ut sint modi facere voluptate sed saepe?
   </p>
   <p className="max-w-2xl mx-auto mt-4 text-gray-500"> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum corrupti natus? Unde, illo! Quas aliquid iusto itaque architecto consectetur nisi adipisci dolorem, ut sint modi facere voluptate sed saepe?
   </p>
   </section>
   <section className="text-center my-8">
   <SectionHeaders
   subHeader={"Don't hesitate"}
   mainHeader={'Contact us'}/>
   <div className="mt-4">
   <a className="text-2xl underline text-gray-500"  href="tel:+92:030012345">+92 0300 12345</a>
   </div>
   
   </section>
   
   </>
  )
}
