import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../../assets/assets";
import { useState } from "react";

// ✅ Checkbox Component
export const Checkbox = ({ label, selected = false, onChange = () => { } }) => {
   return (
      <label className="flex items-center mt-2 gap-2 cursor-pointer text-sm text-gray-700">
         <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onChange(e.target.checked, label)}
         />
         <span className="font-light select-none">{label}</span>
      </label>
   );
};

// ✅ Radio Button Component
export const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
   return (
      <label className="flex items-center mt-2 gap-2 cursor-pointer text-sm text-gray-700">
         <input
            type="radio"
            name="sortOption"
            checked={selected}
            onChange={() => onChange(label)}
         />
         <span className="font-light select-none">{label}</span>
      </label>
   );
};

function AllRooms() {
   const navigate = useNavigate();

   const [openFilters, setOpenFilters] = useState(false);
   const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
   const [selectedPriceRange, setSelectedPriceRange] = useState([]);
   const [sortOption, setSortOption] = useState("");

   const roomType = ["Single Bed", "Double Bed", "Family suite"];
   const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
   const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

   const [data] = useState(roomsDummyData);

   // ✅ Filtering & Sorting
   const filteredRooms = data
      .filter((room) => {
         if (selectedRoomTypes.length > 0 && !selectedRoomTypes.includes(room.roomType)) {
            return false;
         }
         if (selectedPriceRange.length > 0) {
            const match = selectedPriceRange.some((range) => {
               const [min, max] = range.split(" to ").map(Number);
               return room.pricePerNight >= min && room.pricePerNight <= max;
            });
            if (!match) return false;
         }
         return true;
      })
      .sort((a, b) => {
         if (sortOption === "Price Low to High") {
            return a.pricePerNight - b.pricePerNight;
         }
         if (sortOption === "Price High to Low") {
            return b.pricePerNight - a.pricePerNight;
         }
         if (sortOption === "Newest First") {
            return new Date(b.createdAt) - new Date(a.createdAt);
         }
         return 0;
      });

   // ✅ Filter Handlers
   const handleRoomTypeChange = (checked, label) => {
      setSelectedRoomTypes((prev) =>
         checked ? [...prev, label] : prev.filter((type) => type !== label)
      );
   };

   const handlePriceRangeChange = (checked, label) => {
      const range = label.replace("$ ", "");
      setSelectedPriceRange((prev) =>
         checked ? [...prev, range] : prev.filter((r) => r !== range)
      );
   };

   return (
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start justify-between pt-28 px-4 md:px-16 lg:px-24">
         <div className="grid grid-cols-12 w-full">
            {/* ===== Room List ===== */}
            <div className="flex flex-col items-start text-left col-span-12 lg:col-span-8">
               <h1 className="text-4xl md:text-[40px]">Hotel Rooms</h1>
               <p className="text-sm md:text-base text-gray-500/90 mt-2">
                  Take advantage of our limited-time offers and special packages to enhance your stay.
               </p>

               {filteredRooms.length > 0 ? (
                  filteredRooms.map((room) => (
                     <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:border-0">
                        <img
                           onClick={() => {
                              navigate(`/rooms/${room._id}`);
                              scrollTo(0, 0);
                           }}
                           className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                           src={room.images[0]}
                           alt=""
                        />
                        <div className="md:w-1/2 flex flex-col">
                           <p className="text-gray-500">{room.hotel.city}</p>
                           <p
                              onClick={() => {
                                 navigate(`/rooms/${room._id}`);
                                 scrollTo(0, 0);
                              }}
                              className="text-gray-800 text-3xl cursor-pointer"
                           >
                              {room.hotel.name}
                           </p>
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
                  ))
               ) : (
                  <p className="text-center text-gray-600 text-xl py-12">No rooms found matching your filters.</p>
               )}
            </div>

            {/* ===== Filter Sidebar ===== */}
            <div className="bg-white col-span-12 lg:col-span-4 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
               <div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-300">
                  <p className="text-xs font-medium text-gray-800">FILTERS</p>
                  <div className="text-xs cursor-pointer">
                     <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
                        {openFilters ? "HIDE" : "SHOW"}
                     </span>
                     <span
                        className="hidden lg:block"
                        onClick={() => {
                           setSelectedRoomTypes([]);
                           setSelectedPriceRange([]);
                           setSortOption("");
                        }}
                     >
                        CLEAR
                     </span>
                  </div>
               </div>

               <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
                  <div className="px-5 pt-5">
                     <p className="font-medium text-gray-800 pb-2">Room Types</p>
                     {roomType.map((room, index) => (
                        <Checkbox
                           key={index}
                           label={room}
                           selected={selectedRoomTypes.includes(room)}
                           onChange={handleRoomTypeChange}
                        />
                     ))}
                  </div>

                  <div className="px-5 pt-5">
                     <p className="font-medium text-gray-800 pb-2">Price Range</p>
                     {priceRanges.map((range, index) => (
                        <Checkbox
                           key={index}
                           label={`$ ${range}`}
                           selected={selectedPriceRange.includes(range)}
                           onChange={handlePriceRangeChange}
                        />
                     ))}
                  </div>

                  <div className="px-5 pt-5 pb-5">
                     <p className="font-medium text-gray-800 pb-2">Sort By</p>
                     {sortOptions.map((option, index) => (
                        <RadioButton
                           key={index}
                           label={option}
                           selected={sortOption === option}
                           onChange={setSortOption}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AllRooms;
