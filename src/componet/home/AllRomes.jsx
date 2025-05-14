import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../../assets/assets";
import { PiStarAndCrescentThin } from "react-icons/pi";
import { useState } from "react";


export const Checkbox = ({ label, selected = false, onChange = () => { } }) => {
   return (
      <label className="flex items-center mt-2 gap-2 cursor-pointer text-sm text-gray-700">
         <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onChange(e.target.checked,label)}
            
         />

         <span className="font-light select-none">{label}</span>
         
      </label>
   );
};




export const RedioButton = ({ label, selected = false, onChange = () => { } }) => {
   return (
      <label className="flex items-center mt-2 gap-2 cursor-pointer text-sm text-gray-700">
         <input
            type="radio"
            name="sortOption"
            checked={selected}
            onChange={(label)}
         />
         <span className="font-light select-none">{label}</span>
      </label>
   );
};




function AllRomes() {

   const nagevate = useNavigate();

   const [openFilters, setOpenFilters] = useState(false);

   const [data, setData] = useState(roomsDummyData)

   const roomType = [
      "Single Bed",
      "Double Bed",
      "Family suite",

   ];


   const priceRanges = [
      '0 to 500',
      '500 to 1000',
      '1000 to 2000',
      '2000 to 3000',
   ];


   const sotrOption = [
      "price Low to High",
      "Price High to Low",
      "Newest First"
   ];


   return (
      <>

         <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
            <div className="grid grid-cols-12">
               <div className="flex flex-col items-start text-left col-span-8">
                  <h1 className="text-4xl md:text-[40px]">Hotel Rooms</h1>
                  <p className="text-sm md:text-base text-gray-500/90 mt-2 ">Take advantage of our limited-time offers and special packages to enhance <br /> your stay and create unforgettable memories.</p>

                  {data?.map((room) => (
                     <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 last:pb-30 last:border-0">
                        <img onClick={() => { nagevate(`/rooms/${room._id}`); scrollTo(0, 0) }} className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer" src={room.images[0]} alt="" />

                        <div className="md:w-1/2 flex flex-col">
                           <p className="text-gray-500">{room.hotel.city}</p>
                           <p onClick={() => { nagevate(`/rooms/${room._id}`); scrollTo(0, 0) }} className="text-gray-800 text-3xl cursor-pointer">{room.hotel.name}</p>

                           <div className="flex items-center gap-2">
                              <span>⭐⭐⭐⭐💥</span>

                              <p>+200 reviews</p>
                           </div>

                           <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                              <img src={assets.locationIcon} alt="" />
                              <span>{room.hotel.address}</span>
                           </div>

                           <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                              {room.amenities.map((item, index) => (
                                 <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                                    <img src={facilityIcons[item]} className="w-5 h-5" alt="" />

                                    <p className="text-xs">{item}</p>
                                 </div>
                              ))}
                           </div>

                           <p className="text-xl font-medium text-gray-700">${room.pricePerNight} /night</p>
                        </div>
                     </div>
                  ))}


               </div>

               
               <div className="bg-white h-1/3 col-span-4 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">

                  <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
                     <p className="text-xs font-medium text-gray-800">FLITERS</p>

                     <div className="text-xs cursor-pointer">
                        <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
                           {openFilters ? "HIDE" : "HIDE"}</span>
                        <span className="hidden lg:block">CLEAR</span>
                     </div>
                  </div>

                  <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>

                     <div className="px-5 pt-5 ">
                        <p className="font-medium text-gray-800 pb-2">Poplular filters</p>

                        {
                           roomType.map((room,index) => (
                              <Checkbox key={index} label={room} />
                           ))
                        }
                     </div>


                     <div className="px-5 pt-5 ">
                        <p className="font-medium text-gray-800 pb-2">Price Range</p>

                        {
                           priceRanges.map((range, index) => (
                              <Checkbox key={index} label={`$ ${range}`} />
                           ))
                        }
                     </div>



                     <div className="px-5 pt-5 ">
                        <p className="font-medium text-gray-800 pb-2"> </p>

                        {
                           sotrOption.map((option, index) => (
                              <RedioButton key={index} label={option} />
                           ))
                        }
                     </div>

                  </div>


               </div>
            </div>
         </div>



      </>
   );
}

export default AllRomes;