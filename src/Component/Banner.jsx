import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import "./banner.css";

const Banner = () => {


  const [profile, setProfile] = useState([]);


	useEffect(() => {
	  fetch("https://personal-real-portfolioserverside.vercel.app/protfolio")
		.then((res) => res.json())
		.then((data) => setProfile( data));
	}, []);



	<style>
		{`
    @media (max-width: 600px) {
      .text-3xl {
        font-size: 30px;
      }
    }
  `}
	</style>;

	return (
		<div id="home">
			<div className="w-full  bg-transparent p-5 h-screen max-h-[700px]  flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
				<div className="md:w-1/2 space-y-8 ">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-white">
						HI, I'M Amir !
					</h1>

					<TypeAnimation
						sequence={[
							"junior Web Developer", // Types 'One'
							1000, // Waits 1s
							"Front end Developer", // Deletes 'One' and types 'Two'
							2000, // Waits 2s
							"Junior Mern  Developer", // Types 'Three' without deleting 'Two'
							() => {
								console.log("Sequence completed");
							},
						]}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
						// style={{ fontSize: "3rem", lineHeight:"60px", color: "#61CE70", display: "block" , }}
						className="text-3xl md:text-4xl lg:text-5xl text-[#CD5FF8] block  line"
					/>
					<p className="text-justify pb-5">
						Welcome to my corner of the web! I'm a dedicated web
						developer with expertise in HTML, CSS, JavaScript,
						React, and more. I bring creativity and technical skill
						to every project, ensuring a seamless and engaging user
						experience.
					</p>

					<a href="https://drive.google.com/uc?export=download&id=165tJ1I6Q8iZz6EwA93FxFdsIYFG6s6cX">
						<button
							data-aos="zoom-in"
							className="btn mt-5 btn-outline text-white hover:bg-[#CD5FF8] hover:text-white"
						>
							{" "}
							DownLoad Resume
						</button>
					</a>
				</div>
				<div className="mt-24 lg:mt-0">
					<div
						data-aos="zoom-in"
						className="border-8 hover:translate-y-10 duration-150  p-4 border-[#CD5FF8] rounded-full w-80 h-80"
					>
						<img
							className="rounded-full h-full object-cover  w-full"
							src={profile[0]?.images[0]}
							alt=""
						/>
					</div>
				</div>
			</div>







		</div>
	);
};

export default Banner;
