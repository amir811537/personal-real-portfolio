import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [activeButton, setActiveButton] = useState("all Product");

	useEffect(() => {
		AOS.init();

		// Fetch project data from API
		const fetchProjects = async () => {
			try {
				const response = await fetch("https://personal-real-portfolioserverside.vercel.app/project");
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};

		fetchProjects();
	}, []);

	// Filter projects based on category
	const filteredData = projects.filter((item) => {
		if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "Full Stack") return item.category === "FullStack";
		return false;
	});

	return (
		<div id="Projects" className="bg-transparent py-10">
			<div className="sticky -top-5 z-[999] py-5 bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10">Latest Projects</h1>

				<div className="flex flex-wrap bg-black justify-center gap-5">
					<button
						onClick={() => setActiveButton("all Product")}
						className={`${
							activeButton === "all Product" ? "bg-[#CD5FF8] text-white" : ""
						} btn lg:px-8 rounded-md hover:bg-[#CD5FF8] hover:text-white btn-outline hover:border-none text-white`}
					>
						All Projects
					</button>
					<button
						onClick={() => setActiveButton("FrontEnd")}
						className={`${
							activeButton === "FrontEnd" ? "bg-[#CD5FF8] text-white" : ""
						} btn lg:px-8 rounded-md hover:bg-[#CD5FF8] hover:text-white btn-outline hover:border-none text-white`}
					>
						Frontend Projects
					</button>
					<button
						onClick={() => setActiveButton("Full Stack")}
						className={`${
							activeButton === "Full Stack" ? "bg-[#CD5FF8] text-white" : ""
						} btn lg:px-8 rounded-md hover:bg-[#CD5FF8] hover:text-white btn-outline hover:border-none text-white`}
					>
						Full Stack Projects
					</button>
				</div>
			</div>

			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">
				{filteredData.map((item, inx) => (
					<div
						className={`${
							inx % 2 === 0 ? "lg:flex-row-reverse" : ""
						} flex flex-col lg:flex-row justify-center h-full lg:gap-5`}
						key={inx}
					>
						<div className="lg:w-[700px]">
							<img src={item.thumbnailImage} alt={item.title} />
						</div>

						<div className="lg:w-[450px] h-full">
							<div className="min-h-[340px] bg-[#CD5FF8]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg rounded-b-none">
								<h1 className="text-4xl">{item.title}</h1>
								<p className="text-lg mt-5">{item.description}</p>
							</div>
							<div className="flex justify-between">
								<Link
									to={item.clientLink}
									className="btn hover:bg-[#c443f7] flex-1 rounded-none rounded-b text-white bg-[#CD5FF8]"
								>
									<FaGithub /> Client side
								</Link>

								{item.serverLink && (
									<Link
										to={item.serverLink}
										className="btn hover:bg-[#c443f7] flex-1 rounded-none rounded-b text-white bg-[#CD5FF8]"
									>
										<FaGithub /> Server side
									</Link>
								)}

								<Link
									to={item.liveLink}
									className="btn hover:bg-[#c443f7] flex-1 rounded-none rounded-b text-white bg-[#CD5FF8]"
								>
									<FaExternalLinkAlt /> Visit website
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
