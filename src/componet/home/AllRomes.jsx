import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../../assets/assets";
import { PiStarAndCrescentThin } from "react-icons/pi";

function AllRomes() {

   const nagevate = useNavigate();

   return (
      <>
         
         <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
            <div className="">
               <div className="flex flex-col items-start text-left">
                  <h1 className="text-4xl md:text-[40px]">Hotel Rooms</h1>
                  <p className="text-sm md:text-base text-gray-500/90 mt-2 ">Take advantage of our limited-time offers and special packages to enhance <br /> your stay and create unforgettable memories.</p>

               </div>

               {roomsDummyData?.map((room) => (
                  <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 last:pb-30 last:border-0">
                     <img onClick={() => { nagevate(`/rooms/${room._id}`); scrollTo(0,0)}} className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer" src={room.images[0]} alt="" />
                     
                     <div className="md:w-1/2 flex flex-col">
                        <p className="text-gray-500">{room.hotel.city}</p>
                        <p onClick={() => { nagevate(`/rooms/${room._id}`); scrollTo(0, 0)}} className="text-gray-800 text-3xl cursor-pointer">{room.hotel.name}</p>

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

               <div className=""></div>
            </div>
         </div>
         

         
      </>
   );
}

export default AllRomes;