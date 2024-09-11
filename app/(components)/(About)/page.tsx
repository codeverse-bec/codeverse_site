import { HeroHighlightDemo } from "../(HeroHighlightDemo)/page";
import { InfiniteMovingCardsDemo } from "../(InfiniteMovingCardsDemo)/page";
import Venue from "../(Venue)/page";
import BenifitsSection from "../(BenifitsSection)/page";
import WhatDoWeDo from "../(whatDoWeDo)/page";
import FAQs from "../(faqs)/page";

export default function About(){
    return (
        <>
            <div >
                
            

            <WhatDoWeDo/>  
            <BenifitsSection/>
            <HeroHighlightDemo/>
            {/* <Venue/>  */}
            <InfiniteMovingCardsDemo/> 
            <FAQs/>
            
            
            </div>
            
        </>
    );
}