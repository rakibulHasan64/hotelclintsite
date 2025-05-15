import { TbArrowsDiagonalMinimize } from "react-icons/tb";
import { assets, exclusiveOffers } from "../../assets/assets";

function ExclusiveOffers() {
   return (
      <div className="bg-[#FDFDFD]">
         <div className="container mx-auto py-24 px-4">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
               <div>
                  <h3 className="text-start text-3xl font-semibold mb-2">Exclusive Offers</h3>
                  <p className="text-start text-[18px] text-gray-600">
                     Take advantage of our limited-time offers and special packages to enhance your<br className="hidden md:block" />
                     stay and create unforgettable memories.
                  </p>
               </div>

               <div className="flex items-center gap-2 text-primary font-medium cursor-pointer hover:underline">
                  <span>View All Offers</span>
                  <TbArrowsDiagonalMinimize size={24} />
               </div>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
               {exclusiveOffers.map((item) => (
                  <div
                     key={item._id}
                     className="group relative flex flex-col justify-around items-start h-72 bg-no-repeat text-white bg-cover bg-center rounded-xl overflow-hidden shadow-md"
                     style={{ backgroundImage: `url(${item.image})` }}
                  >
                     {/* Dark Overlay */}
                     {/* <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">


                        
                     </div> */}

                     {/* Discount Badge */}
                     <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full z-10">
                        {item.priceOff}% OFF
                     </p>

                     {/* Content */}
                     <div className="p-4 z-10">
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-sm mb-1">{item.description}</p>
                        <p className="text-xs">Expires {item.expiryDate}</p>

                        <button className="flex items-center gap-2 font-medium cursor-pointer mt-4">
                           View Offers
                           <img
                              className="invert group-hover:translate-x-1 transition-all duration-300"
                              src={assets.arrowIcon}
                              alt="arrow icon"
                           />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default ExclusiveOffers;
