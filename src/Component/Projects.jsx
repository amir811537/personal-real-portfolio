import React, { useEffect, useState } from "react";

import AlaminElectronics from "../assets/websiteThumbnail/ALamineletronics.png"
import houseswift from "../assets/websiteThumbnail/houseswift.png"
import hotelbookig from "../assets/websiteThumbnail/hotelbookig.png"
import taskmanagement from "../assets/websiteThumbnail/taskmanagement.png"
import translateapp from "../assets/websiteThumbnail/translateapp.png"


import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {



	const Data = [
		{
			title: "Al-Amin Electronics",
			description: "Al-Amin Electronics is a comprehensive e-commerce platform for selling and purchasing electronics. The site is designed with a user-friendly interface, secure transactions, and a range of features that enhance both user and admin experiences.",
			thumbnailImage: AlaminElectronics,
			category: "FullStack",
			clintLink: "https://github.com/amir811537/AlaminElectronics-main",
			serverLink: "https://github.com/amir811537/AlaminElectronics-server",
			LiveLInk: "https://al-amin-watachandsunglassessbd.netlify.app"

		},
		{
			title: "House Swift",
			description: "House Swift: A streamlined platform for finding property rentals with ease. Our website connects renters with verified listings, featuring user-friendly search options, advanced filters, and personalized recommendations to make finding the perfect rental quick and hassle-free.",
			thumbnailImage: houseswift,
			category: "FullStack",
			clintLink: "https://github.com/amir811537/house-swift-personal-Client.git",
			serverLink: "https://github.com/amir811537/house-swift-personal-serverside.git",
			LiveLInk: "https://house-swift-web.netlify.app/"

		},
		{
			title: "Transalte app",
			description: "Translate Web App is a web-based application that allows users to quickly and easily translate text from one language to another. It supports multiple languages, offering instant translations and often includes additional features like pronunciation guides, contextual examples, and language detection. This tool is ideal for travelers, language learners, or anyone needing quick language assistance online",
			thumbnailImage: translateapp,
			category: "FrontEnd",
			clintLink: "https://github.com/amir811537/lang-translate-web-app",
			serverLink: "",
			LiveLInk: "http://translation-react-app.surge.sh/"

		},
		
		{
			title: "Task Management",
			description: "Task Management Web App is an online tool designed to help users organize, track, and manage their tasks and projects efficiently. It allows users to create, prioritize, and assign tasks, set deadlines, track progress, and collaborate with team members in real-time. Ideal for individuals and teams, it streamlines workflow, improves productivity, and keeps everyone on track with notifications, reminders, and progress insights",
			thumbnailImage: taskmanagement,
			category: "FrontEnd",
			clintLink: "https://github.com/amir811537/task-management-clientside",
			serverLink: null,
			LiveLInk: "https://taskmanagement-web-app-amir.surge.sh/"

		},
		
		{
			title: "Hotel Haven",
			description: "Hotel Booking Website is an online platform that enables users to search, compare, and book accommodations at various hotels. It provides features like detailed hotel descriptions, photos, pricing, availability, guest reviews, and location maps. Users can filter options based on preferences such as location, amenities, and price range, making it easy to find the perfect stay. Designed for convenient travel planning, it often includes secure payment options and booking confirmations.",
			thumbnailImage: hotelbookig,
			category: "FullStack",
			clintLink: "https://github.com/amir811537/Hotle-booking-clientside",
			serverLink: "https://github.com/amir811537/-Hotle-booking-server",
			LiveLInk: "https://hotel-booking-auth-e8380.web.app/"

		},
	]



	const [activeButton, setActiveButton] = useState("all Product")


	const filteredData = Data.filter(item => {
		if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "Full Stack") return item.category === "FullStack";
		return false;
	});

	

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10 ">
			<div className="sticky -top-5 z-[999] py-5  bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10 ">

					Latest projects
				</h1>


				<div className="flex flex-wrap bg-black justify-center gap-5">
					<button onClick={() => setActiveButton("all Product")} className={` ${(activeButton == "all Product") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> All Projects</button>
					<button onClick={() => setActiveButton("FrontEnd")} className={` ${(activeButton == "FrontEnd") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Frontend Projects</button>
					<button onClick={() => setActiveButton("Full Stack")} className={` ${(activeButton == "Full Stack") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Full Stack Projects</button>


				</div>
			</div>



			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">

				{
					filteredData?.map((item, inx) => (
						<div className={`${inx % 2 == 0 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row justify-center h-full lg:gap-5`} key={inx}>
							<div className="lg:w-[700px]">
								<img src={item?.thumbnailImage} alt={item?.title} />
							</div>

							<div className="lg:w-[450px] h-full">
								<div className="min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-4xl">{item?.title}</h1>
									<p className="text-lg mt-5">{item?.description}</p>
								</div>
								<div className="flex justify-between">
									<Link to={item?.clintLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaGithub /> Clint side
									</Link>

									{/* Conditionally render the Server side button */}
									{item?.serverLink && (
										<Link to={item?.serverLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
											<FaGithub /> Server side
										</Link>
									)}

									<Link to={item?.LiveLInk} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaExternalLinkAlt /> Visit website
									</Link>
								</div>
							</div>
						</div>
					))
				}

			</div>





		</div>
	);
};

export default Projects;