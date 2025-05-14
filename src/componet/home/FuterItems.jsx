import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function FuterItems({ room, index }) {
   if (!room) return null;

   
   const {
      _id,
      hotel: { name: hotelName,  address: hotelAddress },
      roomType,
      pricePerNight,
      images,
      isAvailable,
   } = room;

   return (
      <Link to={`/rooms/${_id}`}>
         <div className="rounded-xl bg-white relative overflow-hidden shadow-lg">
            <img
               className="w-full h-48 object-cover rounded-t-xl"
               src={images[0]}
               alt={`${hotelName} - ${roomType}`}
            />

            {isAvailable && (
               <button className="absolute z-50 top-4 left-4 px-2 py-1 bg-white rounded-full text-sm">
                  Best Seller
               </button>
            )}

            <div className="bg-white p-6">
               <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold">{hotelName}</h4>
                  {/* যদি rating থাকে, দেখাতে পারেন */}
               </div>

               <div className="flex items-center text-sm text-gray-600 mb-4">
                  <BiLocationPlus className="mr-1" />
                  {hotelAddress /* অথবা hotelAddress */}
               </div>

               <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${pricePerNight} / night</span>
                  <button className="text-sm px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                     Buy Now
                  </button>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default FuterItems;
