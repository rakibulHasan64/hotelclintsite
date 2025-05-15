import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../../assets/assets";


function HotelDetalisPage() {

   const { id } = useParams();
   const [room, setRoom] = useState(null);
   const [minImage, setMinImage] = useState(null);
   
   useEffect(() => {
      const room = roomsDummyData.find(room => room._id === id)
      room && setRoom(room)
      room && setMinImage(room.images[0])
   }, [id]);


   return room && (
      <>
         
         <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32">
            {/* {room detlis} */}

            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
               <h1 className="text-3xl md:text-4xl ">{room.hotel.name} <span className="text-sm ">{room.roomType}</span></h1>

               <p className="text-xs py-1.5 px-3 text-white bg-orange-500 rounded-full">20% OFF</p>
            </div>

            <div className="flex items-center gap-1 mt-2">
               <span>⭐⭐⭐⭐💥</span>
               <p className="ml-2">200+ reviews</p>
            </div>


            <div className="flex items-center gap-1 mt-2">
               <img src={assets.locationIcon} alt="locationIcon" />
               <span>{room.hotel.address}</span>
            </div>


            {/* room image */}
            

            <div className="flex flex-col lg:flex-row mt-6 gap-6 w-full">

               <div className="flex lg:w-full w-full">
                  <img src={minImage} alt="Room Image" className="w-full rounded-xl shadow-lg object-cover" />

                  
               </div>


               <div className="grid grid-cols-2 gap-4  w-full">
                  {
                     room?.images.length > 1 &&
                     room.images.map((image, index) => (
                        <img

                           onClick={() => setMinImage(image)}

                           key={index} src={image} alt="" className={`w-full shadow-md object-cover rounded-md cursor-pointer ${minImage === image && "outline-3 outline-orange-500"}`} />
                     ))
                  }
               </div>

               




            </div>



            <div className="flex flex-col md:flex-row md:justify-between mt-10">

               <div className="flex flex-col">
                  <h2 className="text-3xl md:text-4xl ">Experience Luxury Like Never Before</h2>

                  <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                     {room.amenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gray-100">
                           <img className="w-5 h-5" src={facilityIcons[item]} alt={item} />

                           <p className="text-xs">{item}</p>

                        </div>
                     ))}
                  </div>
               </div>

               {/* Room Prie */}

               <p className="text-2xl font-medium">${room.pricePerNight}/night</p>

               <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_20px_rgba(o,o,o,o,o.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">


                  <div className="">
                     
                  </div>
               </form>
               
            </div>




         </div> 
         
      </>
   );
}

export default HotelDetalisPage;