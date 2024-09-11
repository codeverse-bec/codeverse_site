"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useState, useEffect } from 'react';

const navLinks = [
    {name:"home", href:"/",icon:<HomeOutlinedIcon/>},
    {name: "resources", href:"/resources",icon:<LibraryBooksOutlinedIcon/>},
    {name: "events", href:"/events",icon:<EmojiEventsOutlinedIcon/>},
    {name: "leaderboard", href:"/leaderboard",icon:<LeaderboardIcon/>},
    {name: "contact us", href:"/contact-us",icon:<Groups2OutlinedIcon/>},

];


export default function Navbar(){


    const [isVisible, setIsVisible] = useState(true); // Initially visible

    useEffect(() => {
        // Function to handle screen size changes
        const handleResize = () => {
        setIsVisible(window.innerWidth < 768); // Adjust condition based on screen size
        };

        // Initial check on component mount
        handleResize();

        // Event listener for screen size changes
        window.addEventListener('resize', handleResize);

        // Clean-up on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run effect only once on mount

    const pathName = usePathname();

    return (
        <div className="flex topnav fixed top-10 z-10 " >
            {navLinks.map((link)=>{
                let isActive = pathName.startsWith(link.href) && !link.href.endsWith('/');
                isActive = link.href==pathName;
                
                return (
                    <Link href={link.href} key={link.name} className={`${isActive? "font-bold mr-4" : "text-blue-500 mr-4"} linkele`}>{isVisible ? link.icon : link.name} </Link>
                );
            })}
        </div>
    );
}