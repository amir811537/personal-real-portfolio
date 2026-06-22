import aboutPhoto from '../assets/profileimage/about me.png';

const AboutMe = () => {
  const skills = [
  "Financial Modeling",
  "Investment Analysis",
  "Corporate Finance",
  "Risk Analysis",
  "Credit Analysis",
  "Financial Reporting",
  "Accounting",
  "Market Research",
  "MS Excel",
  "SPSS",
];
  

  return (
    <div id="About" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col gap-16">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#CD5FF8]">
            Get to know me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
          <div className="w-12 h-0.5 bg-[#CD5FF8] rounded-full" />
        </div>

        {/* Body */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-14 md:gap-20">

          {/* Text */}
          <div className="flex-1 max-w-xl flex flex-col gap-5">

            {/* Meta info */}
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm text-white/55">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#CD5FF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l3.5-2" /></svg>
                BBA — Finance & Banking
              </span>
              <span className="flex items-center gap-2 text-sm text-white/55">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#CD5FF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Bangladesh
              </span>
            </div>

            <div className="w-full h-px bg-purple-500/15" />

            <p className="text-white/72 leading-relaxed text-[0.97rem]">
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">Amir Hossain</span>, a
              dedicated BBA student majoring in Finance and Banking. I have a strong
              passion for financial management, banking services, investment analysis,
              and business strategy.
            </p>
            <p className="text-white/72 leading-relaxed text-[0.97rem]">
              My academic background has equipped me with knowledge in finance,
              accounting, risk management, and business operations. I am committed to
              developing analytical thinking, leadership abilities, and professional
              communication skills essential in today&apos;s corporate environment.
            </p>
            <p className="text-white/72 leading-relaxed text-[0.97rem]">
              As an aspiring finance professional, I am actively seeking opportunities
              in the banking and financial sector where I can contribute meaningfully,
              learn from industry experts, and build a successful career while creating
              value for organizations and clients.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map((s) => (
                <span key={s} className="bg-purple-500/10 border border-purple-500/25 text-[#CD5FF8] text-xs font-medium px-4 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>

            
            <a
              href="https://drive.google.com/uc?export=download&id=1Vm18tH_e6GllASgAzpguJzbgKEA2yhnn"
              target="_blank"
              rel="noreferrer"
              className="mt-1 w-fit"
            >
              <button className="flex items-center gap-2 px-7 py-3 border-2 border-[#CD5FF8] text-white rounded-lg text-sm font-medium hover:bg-[#CD5FF8] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                Download CV
              </button>
            </a>
          </div>

          {/* Image */}
          <div className="relative flex-shrink-0">
            {/* Top-right card */}
            <div className="absolute -top-1 -right-5 z-10 bg-[#0f0c29]/90 border border-purple-500/25 rounded-xl px-4 py-2.5 text-center backdrop-blur-sm">
              <p className="text-[#CD5FF8] font-bold text-base">BBA</p>
              <p className="text-white/50 text-xs mt-0.5">Graduate</p>
            </div>

            <div
              data-aos="zoom-in"
              className="border-[5px] border-[#CD5FF8] rounded-full p-1.5 w-52 h-52 md:w-[270px] md:h-[270px] hover:-translate-y-3 transition-transform duration-300"
            >
    <img
  className="rounded-full h-full w-full object-cover object-top"
  src={aboutPhoto}
  alt="Amir Hossain"
/>
            </div>

            {/* Bottom-left card */}
            <div className="absolute -bottom-1 -left-5 z-10 bg-[#0f0c29]/90 border border-purple-500/25 rounded-xl px-4 py-2.5 text-center backdrop-blur-sm">
              <p className="text-[#CD5FF8] font-bold text-base">Finance</p>
              <p className="text-white/50 text-xs mt-0.5">Major</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;