import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/js.svg"
import tailwind from "../assets/icons/tailwind.svg"
import redux from "../assets/icons/redux.svg"
import firebase from "../assets/icons/firebase.svg"
import mongoDB from "../assets/icons/mongoDB.svg"
import react from "../assets/icons/react.json"
import nodeJs from "../assets/icons/nodeJS.json"
import expressjs from "../assets/icons/expressjs.svg"
import Lottie from "lottie-react";
import {
    FaFileExcel,
    FaFilePowerpoint,
    FaFileWord,
    FaChartLine,
    FaDatabase,
    FaShieldAlt,
    FaFileInvoiceDollar,
    FaUniversity,
} from "react-icons/fa";

const financeSkills = [
    { name: "MS Excel", icon: <FaFileExcel />, type: "react-icon" },
    { name: "PowerPoint", icon: <FaFilePowerpoint />, type: "react-icon" },
    { name: "MS Word", icon: <FaFileWord />, type: "react-icon" },
    { name: "Financial Modeling", icon: <FaChartLine />, type: "react-icon" },
    { name: "Data Analysis (SQL)", icon: <FaDatabase />, type: "react-icon" },
    { name: "Risk Management", icon: <FaShieldAlt />, type: "react-icon" },
    { name: "Financial Reporting", icon: <FaFileInvoiceDollar />, type: "react-icon" },
    { name: "Banking Software", icon: <FaUniversity />, type: "react-icon" },
];

const techSkills = [
    { name: "HTML", icon: html, type: "img" },
    { name: "CSS", icon: css, type: "img" },
    { name: "Tailwind", icon: tailwind, type: "img" },
    { name: "Javascript", icon: js, type: "img" },
    { name: "React", icon: react, type: "lottie" },
    { name: "Node Js", icon: nodeJs, type: "lottie" },
    { name: "expressjs", icon: expressjs, type: "img" },
    { name: "Redux", icon: redux, type: "img" },
    { name: "MongoDB", icon: mongoDB, type: "img" },
    { name: "Firebase", icon: firebase, type: "img" },
];

const SkillCard = ({ skill }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="aspect-square w-full border-2 border-[#CD5FF8] flex items-center justify-center bg-black/20 rounded-t-md overflow-hidden">
                {skill.type === "react-icon" && (
                    <div className="text-[#CD5FF8] text-3xl sm:text-4xl lg:text-5xl animateSkillImage">
                        {skill.icon}
                    </div>
                )}

                {skill.type === "img" && (
                    <img
                        src={skill.icon}
                        className="h-full w-full animateSkillImage p-5 sm:p-6 lg:p-7 object-contain"
                        alt={skill.name}
                        loading="lazy"
                    />
                )}

                {skill.type === "lottie" && (
                    <Lottie
                        animationData={skill.icon}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                    />
                )}
            </div>
            <h1 className="text-[#1a1a1a] font-bold py-2 px-1 text-center text-xs sm:text-sm lg:text-base bg-[#CD5FF8] rounded-b-md truncate">
                {skill.name}
            </h1>
        </div>
    );
};

const Skills = () => {
    return (
        <div id="Skills" className="p-6 sm:p-8 lg:p-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">
                    My skills
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#CD5FF8]">
                    -----what I know ------
                </p>
            </div>

            {/* Finance & Business Skills */}
            <div className="mt-10 sm:mt-12">
                <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-6">
                    Finance & Business Tools
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                    {financeSkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Technical / Coding Skills */}
            <div className="mt-14 sm:mt-16">
                <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-6">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {techSkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;