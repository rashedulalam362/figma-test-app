import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='container mx-auto flex justify-between items-centre py-[30px]'>
      {/* logo */}
      <div>
        <span className="text-[#F55F1D] font-bold">Design</span>
        <span className='text-[#000000] font-bold'>AGENCY</span>
         </div>
         {/* {/* menu item */} 
         <div>
          <nav>
            <ul className="flex gap-[30px] ">
            <Link href={"/"} className="font-semi-bold text-[1px] text-gray-900">
                Home
              </Link>
              <Link href={"/"} className="font-bold text-[18px] text-gray-900">
                Team
              </Link>
              <Link href={"/"} className="font-bold text-[18px] text-gray-900">
             Projects 
              </Link>
              <Link href={"/"} className="font-bold text-[18px] text-gray-900">
                Services
              </Link>
              <Link href={"/"} className="font-bold text-[18px] text-gray-900">
                Testimonilas
              </Link>
              <Link href={"/"} className="font-bold text-[18px] text-gray-900">
                Testimonilas
              </Link>
            </ul>
          </nav>

         </div>
         {/* login/register */}
          <div className='flex gap-[30px]  '>
             <div>
              <Link href={"/"}  className=" outline outline-1  outline-offset-1 py-[14px] px-[22px]  rounded-lg font-semibold">
               Login 
              </Link>
           
              </div>
             <div>
             <Link href={"/"}  className=" py-[14px] px-[22px] bg-[#20B15A] rounded-lg font-semibold text-white">
               Register 
              </Link>
             </div>
          </div>
    </div>
  )
}

export default Header