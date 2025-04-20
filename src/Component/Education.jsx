import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<div className="bg-base-100 mt-20"><div
		id="Education"
		className="flex  md::bg-base-100 bg-[#CD5FF8] text-black md:text-inherit md:bg-inherit gap-5 flex-col md:flex-row h-screen max-h-[500px]   "
	>
		<div className="md:w-1/2 pb-5  flex  justify-center items-center  bg-[#CD5FF8]">
			<div >
				<FaGraduationCap size={200} className=" text-white " />
				<h1 className="text-5xl -mt-10 text-white ">Education</h1>
			</div>
		</div>
		<div className="md:w-1/2 bg-[#CD5FF8] md:bg-base-100  overflow-hidden text-center md:text-left text-xl flex flex-col justify-center items-center">
			<div  className="space-y-4 md:space-y-10">
				<div>
					<h1 className="text-3xl mb-2">Currently Studying </h1>
					<p>Bachelor of Business Administration at Dhaka Central University</p>
				</div>
				<div>
					<h1 className="text-3xl mb-2"> Completed HSC from</h1>
					<p> Govt. Bangla College , Dhaka</p>
				</div>
			</div>
		</div>
	</div></div>
	);
};

export default Education;
