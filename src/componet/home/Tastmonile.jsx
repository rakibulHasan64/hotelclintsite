import Title from "./Title";

function Testimonial() {
   return (
      <div className="container mx-auto py-32">
         <Title
            title={"What Our Guests Say"}
            subTitle={
               "Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
            }
         />

         <div className="flex flex-wrap items-center justify-center gap-6 pt-14">
            {/* Review Card 1 */}
            <div className="text-sm w-80 mt-6 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
               <div className="flex flex-col items-center px-5 py-4 relative">
                  <img
                     className="h-24 w-24 absolute -top-14 rounded-full object-cover"
                     src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                     alt="userImage1"
                  />
                  <div className="pt-16 text-center">
                     <h1 className="text-lg font-medium text-gray-800">Donald Jackman</h1>
                     <p className="text-gray-800/80">Content Creator</p>
                  </div>
               </div>
               <p className="text-gray-500 px-6 text-center">
                  I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
               </p>
               <StarRating />
            </div>

            {/* Review Card 2 */}
            <div className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
               <div className="flex flex-col items-center px-5 py-4 relative">
                  <img
                     className="h-24 w-24 absolute -top-14 rounded-full object-cover"
                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                     alt="userImage2"
                  />
                  <div className="pt-16 text-center">
                     <h1 className="text-lg font-medium text-gray-800">Richard Nelson</h1>
                     <p className="text-gray-800/80">Instagram Influencer</p>
                  </div>
               </div>
               <p className="text-gray-500 px-6 text-center">
                  I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
               </p>
               <StarRating />
            </div>

            {/* Review Card 3 */}
            <div className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
               <div className="flex flex-col items-center px-5 py-4 relative">
                  <img
                     className="h-24 w-24 absolute -top-14 rounded-full object-cover"
                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                     alt="userImage3"
                  />
                  <div className="pt-16 text-center">
                     <h1 className="text-lg font-medium text-gray-800">James Washington</h1>
                     <p className="text-gray-800/80">Marketing Manager</p>
                  </div>
               </div>
               <p className="text-gray-500 px-6 text-center">
                  I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
               </p>
               <StarRating />
            </div>
         </div>
      </div>
   );
}

function StarRating() {
   const starSVG = (
      <svg
         width="18"
         height="18"
         viewBox="0 0 22 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
            fill="#FF532E"
         />
      </svg>
   );

   return (
      <div className="flex justify-center pt-4">
         <div className="flex gap-0.5">{Array(5).fill(starSVG)}</div>
      </div>
   );
}

export default Testimonial;
