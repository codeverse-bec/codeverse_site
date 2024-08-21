import { HeroHighlightDemo } from "../(HeroHighlightDemo)/page";
import { InfiniteMovingCardsDemo } from "../(InfiniteMovingCardsDemo)/page";
import Venue from "../(Venue)/page";
import WhatAreWe from "../(WhatAreWe)/page";
import WhatDoWeDo from "../(whatDoWeDo)/page";

export default function About(){
    return (
        <>
            <WhatAreWe/>
            <WhatDoWeDo/>   
            <Venue/>        
            <HeroHighlightDemo/>
            <InfiniteMovingCardsDemo/> 
            
        </>
    );
}