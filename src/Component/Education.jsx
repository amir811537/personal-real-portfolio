import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<div className="bg-base-100 mt-20"><div
		id="Education"
		className="flex  md::bg-base-100 bg-[#61CE61] text-black md:text-inherit md:bg-inherit gap-5 flex-col md:flex-row h-screen max-h-[500px]   "
	>
		<div className="md:w-1/2 pb-5  flex  justify-center items-center  bg-[#61CE61]">
			<div >
				<FaGraduationCap size={200} className=" text-black " />
				<h1 className="text-5xl -mt-10 text-black ">Education</h1>
			</div>
		</div>
		<div className="md:w-1/2 bg-[#61CE61] md:bg-base-100  overflow-hidden text-center md:text-left text-xl flex flex-col justify-center items-center">
			<div  className="space-y-4 md:space-y-10">
				<div>
					<h1 className="text-3xl mb-2">Currently Studying </h1>
					<p>Bachelor of Business Administration at affiliated 7 College university of Dhaka</p>
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
