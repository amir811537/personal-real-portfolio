import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Blood Donation",
    description: "Blood Donation activities",
    image: "bloodss.jpg",
    github: "https://github.com/amir811537/blood-donation-clientside",
    live: "https://blood-donation-auth-adf7b.web.app/",
  },
  {
    id: 2,
    title: "House-swift",
    description: "A rental solution",
    image: "house-swiftss.jpg",
    github: "https://github.com/shajjad00/house-swift-web-creations",
    live: "https://house-swift-web.netlify.app/",
  },
  {
    id: 3,
    title: "Electronics-Bazar",
    description: "An E-commerce",
    image: "e-bazar.jpg",
    github: "https://github.com/amir811537/-Electronics-Bazar",
    live: "https://personal-e-commerce-amir.netlify.app/",
  },
  {
    id: 4,
    title: "Task-Management",
    description: "React Drag and Drop",
    image: "taskmanagement.png",
    github: "https://github.com/amir811537/task-management-clientside",
    live: "http://taskmanagement-web-app-amir.surge.sh/",
  },
  {
    id: 5,
    title: "Translation App",
    description: "Google Translation clone",
    image: "translationapp.png",
    github: "https://github.com/amir811537/lang-translate-web-app",
    live: "http://translation-react-app.surge.sh/",
  },
  {
    id: 6,
    title: "Hotel Booking",
    description: "Rent rooms",
    image: "hotelbookin.png",
    github: "https://github.com/amir811537/Hotle-booking-clientside",
    live: "https://hotel-booking-auth-e8380.web.app/",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <section id="project" className="py-12">
        <div className="text-center">
          <p className="text-center font-bold mb-4">Browse My Recent</p>
          <h1 className="text-4xl lg:text-7xl font-bold text-center">Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 mt-32 place-items-center">
          {projects.slice(0, showAll ? projects.length : 3).map((project) => (
            <div key={project.id} className="card lg:w-96 w-80 bg-base-100 shadow-xl">
              <figure><img src={project.image} alt="project!" /></figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions flex justify-center gap-12 items-center">
                  <a href={project.github}><button className="btn px-2">GitHub</button></a>
                  <a href={project.live}><button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={handleToggle} className="btn btn-outline text-black hover:text-white hover:bg-green-500">
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            src="arrow.png"
            alt="Arrow icon"
            className="mx-auto mt-20 w-10 h-10 justify-start cursor-pointer"
            onClick={() => window.location.href = '#contact'}
          />
        </div>
      </section>
    </div>
  );
};

export default Project;
