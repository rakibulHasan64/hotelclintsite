export default function Hero() {

   const handleSubmit = (e) => {
      e.preventDefault();

      const form = e.target;

      const destination = form.destination.value;
      const checkIn = form.checkIn.value;
      const checkOut = form.checkOut.value;
      const guests = form.guests.value;

      const data = {
         destination,
         checkIn,
         checkOut,
         guests,
      }

      console.log(data);
      
   };

   return (
      <div
         className="flex flex-col items-start justify-center text-white bg-no-repeat bg-cover bg-center h-screen"
         style={{
            backgroundImage: `url('https://i.ibb.co/qMs4R9c8/4f49e9370a1c757c2fc9d0ffc6e9182901bc3407.png')`,
         }}
      >
         <div className="container mx-auto px-4">
            <p className="px-4 py-1 bg-[#49B9FF80] rounded-2xl inline-block mb-2">The Ultimate Hotel Experience</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
               Discover Your Perfect<br />Getaway Destination
            </h1>
            <p className="text-lg md:text-2xl max-w-xl mb-8">
               Unparalleled luxury and comfort await at the world's most exclusive<br />
               hotels and resorts. Start your journey today.
            </p>

         

            <form onSubmit={handleSubmit} className="bg-white text-gray-700 rounded-lg px-6 py-4 flex flex-col md:flex-row md:items-end gap-4 max-w-5xl">
               {/* Destination */}
               <div className="flex-1">
                  <label htmlFor="destinationInput" className="flex items-center gap-2 font-medium mb-1">
                     <DestinationIcon />
                     Destination
                  </label>
                  <input
                     name="destination" // ✅ Added
                     list="destinations"
                     id="destinationInput"
                     type="text"
                     className="w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none"
                     placeholder="Type here"
                     required
                  />
                  <datalist id="destinations">
                     <option value="Maldives" />
                     <option value="Bali" />
                     <option value="Santorini" />
                     <option value="Paris" />
                  </datalist>
               </div>

               {/* Check In */}
               <div>
                  <label htmlFor="checkIn" className="flex items-center gap-2 font-medium mb-1">
                     <DestinationIcon />
                     Check in
                  </label>
                  <input
                     name="checkIn" // ✅ Added
                     id="checkIn"
                     type="date"
                     className="rounded border border-gray-200 px-3 py-2 text-sm outline-none"
                  />
               </div>

               {/* Check Out */}
               <div>
                  <label htmlFor="checkOut" className="flex items-center gap-2 font-medium mb-1">
                     <DestinationIcon />
                     Check out
                  </label>
                  <input
                     name="checkOut" // ✅ Added
                     id="checkOut"
                     type="date"
                     className="rounded border border-gray-200 px-3 py-2 text-sm outline-none"
                  />
               </div>

               {/* Guests */}
               <div>
                  <label htmlFor="guests" className="font-medium mb-1 block">Guests</label>
                  <input
                     name="guests" // ✅ Added
                     id="guests"
                     type="number"
                     min={1}
                     max={4}
                     className="rounded border border-gray-200 px-3 py-2 text-sm outline-none w-20"
                     placeholder="0"
                  />
               </div>

               {/* Search Button */}
               <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-md bg-black py-3 px-6 text-white hover:bg-gray-800 transition-colors max-md:w-full"
               >
                  <SearchIcon />
                  <span>Search</span>
               </button>
            </form>
         </div>
      </div>
   );
}

function DestinationIcon() {
   return (
      <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
      </svg>
   );
}

function SearchIcon() {
   return (
      <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
      </svg>
   );
}
