
import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../../assets/assets";
import FuterItems from "./FuterItems";

function FuterHotell() {

   const nagavite = useNavigate();
   return (
      <>
         
         <div className="bg-white">
            <div className="container mx-auto py-28">

               <h3 className="text-center text-5xl mb-6">Featured Hotels</h3>

               <p className="text-[20px] text-center ">Discover our handpicked selection of exceptional properties around the world, offering<br /> unparalleled luxury and unforgettable experiences</p>

               <div className="mt-20 grid grid-cols-4 gap-4">
                  {
                     roomsDummyData?.slice(0, 4)?.map((room, index) => (
                        <FuterItems key={room._id} room={room} index={index} />
                     ))
                  }


                  
               


               </div>
               <button onClick={() => { nagavite('/romes'); scrollTo(0,0)}} className="text-sm mx-auto text-center block mt-12  px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  View Details
               </button>



            </div>
      </div>
         
      </>
   );
}

export default FuterHotell;