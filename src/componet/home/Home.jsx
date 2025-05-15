import ExxluseiveOffers from "./ExxluseiveOffers";
import FuterHotell from "./FuterHotell";
import Hero from "./Hero";
import Inspried from "./Inspried";
import Tastmonile from "./Tastmonile";

function Home() {
   return (
      <>
         
         <div className="">
            <Hero />
            <FuterHotell />

            <ExxluseiveOffers />

            <Tastmonile />
            <Inspried />
         </div>

         
      </>
   );
}

export default Home;