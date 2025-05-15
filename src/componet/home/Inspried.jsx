import { BsArrowRight } from "react-icons/bs";
import Title from "./Title";


function Inspried() {
   return (
      <>

         <div className="container mx-auto py-28  px-9 ">
            <div className="bg-black py-20 rounded-xl">

               <h3 className="text-center text-white text-6xl mb-4">Stay Inspired</h3>

               <p className="text-white text-[17px] text-center">Join our newsletter and be the first to discover new destinations, exclusive offers, and travel<br /> inspiration.</p>

               <div className="flex items-center justify-center gap-4 mt-6">
                  <input
                     className="border border-amber-50 py-2 px-6 rounded-lg text-white placeholder-white"
                     type="text"
                     placeholder="Enter your email"
                  />


                  <button className="flex items-center justify-center gap-2 text-white">Subscribe 
                   <BsArrowRight />
                  </button>
               </div>

               <p className="text-gray-400 text-[17px] mt-16 text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>



            </div>
         </div>

      </>
   );
}

export default Inspried;