import React from 'react'
import Image from "next/image";
import MenuCard from './menucard';
import SectionHeaders from '../components/sectionheader';
function Menu () {
  return (
    <div>
        <div className="absolute  left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className='text-center'> 
        <SectionHeaders subHeader={'check out'}
        mainHeader={'Menu'} />
        </div>
        
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
     
      <div className="max-w-6xl mx-auto p-4 mt-8  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-colors group-hover:bg-white ">
        <MenuCard  />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
     
  
</div>
</div>

  )
}

export default Menu 


