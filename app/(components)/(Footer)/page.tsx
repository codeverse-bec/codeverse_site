import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ToolTip from '../(ToolTip)/page';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: React.FC = () => {
	return (
		<>
			<div className="bg-[#000000] w-full flex flex-col md:flex-row justify-around items-center md:items-start p-10 border-t border-transparent dark:border-white/[0.2]">
				<div className="p-5 text-center md:text-left">
					<ul>
						<p className="text-white font-bold text-3xl pb-6">
                            CODE<span className="text-blue-600">VERSE</span>
						</p>
						<div className="flex justify-center md:justify-start gap-6 pb-5">
							<InstagramIcon className="text-2xl cursor-pointer hover:text-orange-500" />
							<TelegramIcon className="text-2xl cursor-pointer hover:text-[#1cacff]" />
							<LinkedInIcon className="text-2xl cursor-pointer hover:text-blue-500" />
							<YouTubeIcon className="text-2xl cursor-pointer hover:text-red-500" />
						</div>
						<ToolTip/>
					</ul>
				</div>
				<div className="p-5 text-center md:text-left">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Resources</p>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Introduction to CP
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							DSA Roadmaps
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Web Development
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							MAD
						</li>
                        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Full Stack Development
						</li>
					</ul>
				</div>
				<div className="p-5 text-center md:text-left">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Events</p>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Contests
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Hackathons
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Workshops
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Weekly Sessions
						</li>
					</ul>
				</div>
				<div className="p-5 text-center md:text-left">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Services</p>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Websites
						</li>
						<li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Mobile Apps
						</li>
                        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Mentoring
						</li>
                        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Tutoring
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-5 bg-[#1A2027]">
				<h1 className="text-white font-semibold">
					All rights reserved | Built with ❤ by{' '}
					<span className="hover:text-blue-500 font-semibold cursor-pointer">
						CODEVERSE
					</span>
				</h1>
			</div>
		</>
	);
};

export default Footer;
