
import Link from 'next/link'
// import {recImage} from '../../public/images/Rectangle.png'
function Hero() {
  return (
    <section>
     < div className="container mx-auto my-[165px] px-[100px]">
      <div className='grid grid-cols-12 gap-[30px]'>
         <div className="col-span-6">
           <p className='font-bold  text-[50px]  '>Increase Your <br /> Customers Loyalty and  <br /> Satisfaction</p>
           <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente minus, magni ea sunt repellat dolorum numquam! </p>
           <div className='d-block my-[20px]'>
            <Link href={"/"} className=" py-[14px] px-[22px] bg-[#20B15A] rounded-lg font-semibold text-white">
              Get Started
            </Link>
          </div>
        
         </div>
          {/* <div className="col-span-6   ">
           <div className="grid  grid-cols-2 gap-2 mx-auto w-full h-full">
      
            <img src="/images/Rectangle.png" alt="" />
            <img  className="mr-px[200px] "src="/images/Rectangle 2.png" alt="" />
          
         
            <img src="/images/Rectangle3.png" alt="" />
            <img  src="/images/Rectangle4.png" alt="" />
      
           </div>
         
           
         </div> */}
         <div className="col-span-6">
  <div className="grid grid-cols-2 gap-2 mx-auto ">
    <div className="flex items-center justify-center">
      <img  className="" src="/images/Rectangle.png" alt="" />
    </div>
    <div className="flex items-center justify-center ">
      <img  className="w-full h-full"src="/images/Rectangle 2.png" alt=""  />
    </div>
    <div className="flex items-center justify-center w-full h-full">
      <img  className="w-full h-full" src="/images/Rectangle3.png" alt="" />
    </div>
    <div className="flex items-center justify-center ">
      <img className='w-full h-full' src="/images/Rectangle4.png" alt="" />
    </div>
  </div>
</div>

         </div>
            </div>   

    </section>
  )
}

export default Hero