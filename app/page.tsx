
import Hero from "./(components)/(Hero)/page";
import About from "./(components)/(About)/page";
import SparklesPreview from "./(components)/(Hero)/page";


export default function Home(){
    return (
        <>
            {/* Hero section  */}
            <SparklesPreview/>

            {/* <Hero/> */}

            <About/>
        </>
        
    );
}