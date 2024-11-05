import React from 'react';
import image from "../assets/profile2.jpg"

const AboutMe = () => {



    return (
        <div id="About" className='py-20 lg:py-10 lg:p-10'>
            <div className='text-center my-10 lg:my-0'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4'>About Me</h1>
                <p className='text-2xl md:text-4xl pb-10 lg:pb-0 lg:text-5xl text-[#61CE70]'>-----who I am ------</p>
            </div>

            <div className='flex md:p-5  max-h-[700px]  justify-center items-center gap-10 lg:gap-28 flex-col-reverse md:flex-row-reverse  mx-auto mt-20 '>
                <div data-aos="fade-up" className='text-justify md:text-left md:Jw-1/2 space-y-5 lg:w-[700px] text-xl p-4'>
                    <p className="leading-relaxed text-justify">
                        Hey there! I'm Amir Hossain, a passionate web developer with a mission to transform ideas into engaging digital experiences. I specialize in creating captivating user interfaces using HTML, CSS, and JavaScript, with a focus on dynamic applications using React.
                    </p>


                    <p className='leading-relaxed text-justify'>
                        In the backend, I wield the power of Node.js and Express, crafting server-side logic, and use MongoDB for efficient data management.
                    </p>
                </div>
                <div className="">
					<div
						data-aos="zoom-in"
						className="border-8 hover:translate-y-10 duration-150  p-4 border-[#61CE70] rounded-full w-80 h-80"
					>
						<img
							className="rounded-full h-full object-cover  w-full"
							src={image}
							alt=""
						/>
					</div>
				</div>
            </div>


            
        </div>
    );
};

export default AboutMe;