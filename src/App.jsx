import { useState } from 'react';
import resumePdf from "./assets/Amir-resume .pdf"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePdf;
    anchor.download = 'Amir-resume .pdf';
    anchor.click();
  };

  return (
    <>
      <div className='m-0 p-0 font-abc'>
        <nav className='lg:flex hidden justify-around h-[17vh] items-center' id='desktop-nav'>
         <a href="/">
         <div className='logo text-3xl'>
            &lt;/ dev-amir &gt;
          </div>
         </a>
          <ul className='nav-links gap-8 text-xl flex'>
            <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#about">About</a></li>
            <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#experience">Experience</a></li>
            <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#project">Project</a></li>
            <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#contact">Contact</a></li>
          </ul>
        </nav>
        <nav id='hamburger-nav' className='lg:hidden  mt-5'>
          <div className='flex justify-evenly'>
            <div className='logo  text-xl'>
              &lt;/dev-amir &gt;
            </div>
            <div className='flex flex-col justify-between h-6 w-8 cursor-pointer' onClick={toggleMenu}>
              <span className={`w-full h-1 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-1 bg-black transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-1 bg-black transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </div>
          <div className=''>

            <div className=''>
              <ul className={` ${isMenuOpen ? 'absolute bg-gray-100 transition-all overflow-hidden top-16 w-full max-h-screen left-0 p-4 text-center' : 'absolute left-0 p-4 text-center bg-green-300 w-full max-h-0 transition-all overflow-hidden -top-40'}`}>
                <li><a onClick={toggleMenu} className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#about">About</a></li>
                <li><a onClick={toggleMenu} className='transition-all no-underline w-full hover:text-gray-300 hover:underline hover:underline-offset-8' href="#experience">Experience</a></li>
                <li><a onClick={toggleMenu} className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#project">Project</a></li>
                <li><a onClick={toggleMenu} className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
{/* hero section  */}
        <section className='flex mt-32 flex-col lg:flex-row justify-center items-center gap-16'>
  <div>
    <img className='h-64 lg:h-96 w-64 lg:w-96 rounded-full' src="profile-update.jpg" alt="amir-profile" />
  </div>
  <div className='text-center lg:text-center'>
    <p className='font-bold'>Hello, I’m </p>
    <h1 className='text-4xl lg:text-7xl pt-1'>Amir Hossain</h1>
    <p className='font-bold text-lg lg:text-2xl pt-2 lg:pt-4 text-gray-500'>Web Developer</p>
    <div className='pt-5 flex  lg:flex-row lg:items-center gap-4 ml-0 lg:ml-32 mt-3'>
      <button className='btn btn-outline' onClick={handleDownload}>Download Cv</button>
      <button className='btn' onClick={() => window.location.href = '#contact'}>Contact Info</button>
    </div>
    <div className='flex gap-7 ml-12 justify-center lg:justify-center mt-9' id='social_container'>
      <img className='h-8 w-8 cursor-pointer' src="linkedin.png" alt="my LinkedIn profile" onClick={() => window.location.href = 'https://www.linkedin.com/in/aamir-hossain-a37911274'} />
      <img className='h-8 w-8 cursor-pointer' src="github.png" alt="my GitHub profile" onClick={() => window.location.href = 'https://www.github.com'} />
    </div>
  </div>
</section>
{/* about me section  */}

<section id="about" className="py-8 lg:py-12 px-4 lg:mt-60 ">
  <div className="max-w-full  mx-auto">
    <div className='py-24'>
    <p className="text-center font-bold mb-4">Get To Know More</p>
    <h1 className="text-4xl lg:text-7xl font-bold text-center">About Me</h1>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
      <div className="w-full lg:w-1/3 flex justify-center">
        <img src="profile2nd.jpg" alt="Profile picture" className="rounded-3xl max-h-96" />
      </div>
      <div className="w-full lg:w-2/3 flex flex-col justify-center gap-8">
        <div className="flex gap-8">
          <div className="flex-1 bg-white rounded-3xl border border-gray-700 border-solid p-6 text-center">
            <img src="experience.png" alt="Experience icon" className="cursor-pointer h-8 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Experience</h3>
            <p className="mt-2">Fresher <br />Frontend Development</p>
          </div>
          <div className="flex-1 bg-white rounded-3xl border border-gray-700 border-solid p-6 text-center">
            <img src="education.png" alt="Education icon" className="cursor-pointer h-8 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Education</h3>
            <p className="mt-2">BBA in Finance <br />DU 7College</p>
          </div>
        </div>
        <div className="text-container">
          <p className="text-sm lg:text-base">
          I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems.          </p>
        </div>
      </div>
    </div>
<div className='hidden lg:block'>
<img src="arrow.png" alt="Arrow icon" className="mx-auto mt-20 w-10 h-10 justify-start cursor-pointer"onClick={() => window.location.href = '#experience'} />

  </div>
  
   </div>
</section>
<section id="experience" className="py-8 px-4 lg:mt-32">
  <p className="text-center font-bold mb-4">Explore My</p>
  <h1 className="text-4xl lg:text-7xl font-bold text-center">Experience</h1>
  <div className="flex justify-center flex-wrap gap-8 lg:gap-0 lg:flex-col lg:items-center lg:pl-12 lg:pr-12">
    <div className="flex flex-1 flex-col mb-8 mt-8 lg:flex-row">
      <div className="p-6 bg-white rounded-3xl border-gray-700 border-solid text-center">
        <h2 className="text-gray-500 font-bold text-xl mb-8">Frontend Development</h2>
        <div className="flex flex-wrap gap-4 justify-center">
        <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img 
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>Tailwind CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>        </div>
      </div>
      <div className="p-6 bg-white rounded-3xl border-gray-700 border-solid text-center mt-4 lg:mt-0 lg:ml-8">
        <h2 className="text-gray-500 font-bold text-xl mb-8">Backend Development</h2>
        <div className="flex flex-wrap gap-4 justify-center">
        <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>MonngoDB</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  className="cursor-pointer h-8 mx-auto"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>        </div>
      </div>
    </div>
  </div>
  <div className='hidden lg:block'>
<img src="arrow.png" alt="Arrow icon" className="mx-auto mt-20 w-10 h-10 justify-start cursor-pointer"onClick={() => window.location.href = '#project'} />

  </div>
</section>


<section id="project" className="py-12">
  <div className="text-center">
    <p className="text-center font-bold mb-4">Browse My Recent</p>
    <h1 className="text-4xl lg:text-7xl font-bold text-center">Projects</h1>
  </div>
  <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 mt-32 place-items-center'>
  <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
      <figure><img src="bloodss.jpg" alt="project!" /></figure>
      <div className="card-body">
        <h2 className="card-title">Blood Donation</h2>
        <p>Blood Donation activities</p>
        <div className="card-actions flex justify-center gap-12 items-center">
       <a href="https://github.com/amir811537/Hotle-booking-clientside"> <button className="btn px-2">GitHub</button></a>
         <a href="https://blood-donation-auth-adf7b.web.app/"><button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button></a> 
        </div>
      </div>
    </div>
    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
      <figure><img src="house-swiftss.jpg" alt="project!" /></figure>
      <div className="card-body">
        <h2 className="card-title">House-swift</h2>
        <p>a rental solution </p>
        <div className="card-actions flex justify-center gap-12 items-center">
        <button className="btn px-2">GitHub</button>
        <button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button>
        </div>
      </div>
    </div>
    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
      <figure><img src="e-bazar.jpg" alt="project!" /></figure>
      <div className="card-body">
        <h2 className="card-title">Electronics-Bazar</h2>
        <p>a E-commerece</p>
        <div className="card-actions flex justify-center gap-12 items-center">
        <a href="https://github.com/amir811537/-Electronics-Bazar"><button className="btn px-2">GitHub</button></a>
<a href="https://electronics-bazaar-auth.web.app/"><button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button>
</a></div>
      </div>
    </div>
  </div>

  <div className='hidden lg:block'>
<img src="arrow.png" alt="Arrow icon" className="mx-auto mt-20 w-10 h-10 justify-start cursor-pointer"onClick={() => window.location.href = '#contact'} />

  </div>
</section>
<section id="contact" className='py-12'>
  <p className="text-center font-bold mb-4">Get in Touch</p>
  <h1 className="text-4xl lg:text-7xl font-bold text-center">Contact Me</h1>
  <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:w-1/2 rounded-3xl border-gray-500 border bg-white mt-8 mb-8 lg:mx-auto p-2 ml-4 mr-4">
    <div className="flex items-center justify-center gap-2 m-4">
      <img
        src="email.png"
        alt="Email icon"
        className="cursor-pointer h-8"
      />
      <p><a href="mailto:amirhossain.bc75@gmail.com">amirhossain.bc75@gmail.com</a></p>
    </div>
    <div className="flex items-center justify-center gap-2 m-4">
      <img
        src="linkedin.png"
        alt="LinkedIn icon"
        className="cursor-pointer h-8"
      />
      <p><a href="https://www.linkedin.com/in/aamir-hossain-a37911274/">LinkedIn</a></p>
    </div>
  </div>
</section>


<div className="flex justify-center">
  <footer className='mt-28 mb-28 flex'>

    <ul className='gap-8 text-xl flex flex-col text-center lg:flex-row'>
      <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#about">About</a></li>
      <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#experience">Experience</a></li>
      <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#project">Project</a></li>
      <li><a className='transition-all no-underline hover:text-gray-300 hover:underline hover:underline-offset-8' href="#contact">Contact</a></li>
    </ul>

  </footer>
</div>
 <div className='text-center'>
  <p>Copyright © 2024 Amir Hossain.</p>
  <p> All Rights Reserved.</p>
 </div>






      </div>
    </>
  );
}

export default App;
