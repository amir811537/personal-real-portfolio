import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profileimage/job profile .jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center  bg-transparent">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">

          {/* Available badge */}
          <span className="inline-flex items-center gap-2 w-fit mx-auto md:mx-0 bg-purple-500/10 border border-purple-500/30 text-[#CD5FF8] text-sm px-4 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#CD5FF8] animate-pulse" />
           Open to Opportunities
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I&apos;m Amir Hossain!
          </h1>

          <TypeAnimation
       sequence={[
  "Finance & Banking Graduate", 2000,
  "MERN Stack Developer", 2000,
  "FinTech Enthusiast", 2000,
  "React & Node.js Developer", 2000,
]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-bold text-[#CD5FF8] block min-h-[2.5rem]"
          />

       <p className="text-white/70 leading-relaxed text-base max-w-lg mx-auto md:mx-0">
  I&apos;m a Finance & Banking graduate and MERN Stack Developer passionate about
  building modern web applications and exploring innovative FinTech solutions.
  I combine analytical financial knowledge with software development skills to
  create user-friendly digital products that solve real-world business and
  financial challenges.
</p>

          <div className="mt-2">
            <a
              href="https://drive.google.com/uc?export=download&id=165tJ1I6Q8iZz6EwA93FxFdsIYFG6s6cX"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-3 border-2 border-[#CD5FF8] text-white rounded-lg font-medium hover:bg-[#CD5FF8] transition-colors duration-200">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="border-[6px] border-[#CD5FF8] rounded-full p-1.5 w-52 h-52 md:w-72 md:h-72 hover:-translate-y-3 transition-transform duration-300">
            <img
              className="rounded-full h-full w-full object-cover"
              src={profile}
              alt="Amir Hossain profile"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;