import { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo/amir.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

gsap.registerPlugin(useGSAP);

// <-- scope is for selector text (optional)

const Nav = () => {
	const container = useRef();

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isOpen , setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
		setIsOpen(!isOpen)
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
		setIsOpen(!isOpen)

	};


	useGSAP(
		() => {
			// use selectors...
			gsap.to(".box", { y: 100, stagger: 0.1, duration: 1, ease: "bounce.out", repeatDelay: 2, });

		},
		{ scope: container }
	); // <-- scope for selector text (optional)
	return (
		<div ref={container} className="sticky navbar inset-0 bg-black bg-opacity-50 backdrop-blur-md text-white top-0 z-[99999]">


			<div className="navbar px-20 justify-evenly lg:max-w-[1800px] w-full mx-auto hidden lg:flex bg-transparent ">
				<div className="flex-1">
					<a href="#home">
						{/* <img className="w-40 h-14" src={logo} alt="" /> */}
						<p className='text-2xl font-extrabold'>AMIR</p>
					</a>

				</div>

				<div className="flex-none">
					<ul className=" -translate-y-24 menu menu-horizontal text-[#CD5FF8] px-1">

						<li>
							<a className="box" href="#About">About Me</a>
						</li>
						<li>
							<a className="box" href="#Skills">Skills</a>
						</li>
						<li>
							<a className="box" href="#Projects">Projects</a>
						</li>
						<li>
							<a className="box" href="#Education">Education</a>
						</li>
						<li>
							<a className="box" href="#Contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex lg:bg-transparent md:hidden">
				<div className="relative">
					<div 
						tabIndex={0}
						role="button"
						className="btn text-2xl btn-ghost"
						onClick={toggleDropdown}
					>

						{isOpen? <RxCross2 /> : <RiMenu2Line />}
						


					</div>

					{isDropdownOpen && (
						<ul
							tabIndex={0}
							className="menu menu-sm space-y-10 absolute -ml-2 duration-125 z-[1] p-2 shadow bg-base-100 rounded-box py-4 h-screen w-screen text-center items-center pt-10"
							onClick={closeDropdown}
						>
							<li><a href="#About">About Me</a></li>
							<li><a href="#Skills">Skills</a></li>
							<li><a href="#Projects">Projects</a></li>
							<li><a href="#Education">Education</a></li>
							<li><a href="#Contact">Contact</a></li>
						</ul>
					)}
				</div>
				<a href="#home">
					{/* <img className="h-12 w-40" src={logo} alt="Logo" /> */}
					<p className='text-xl font-extrabold'>AMIR</p>

				</a>
			</div>
		</div>
	);
};

export default Nav;
