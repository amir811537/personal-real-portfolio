
const Project = () => {
    return (
        <div>
            <section id="project" className="py-12">
  <div className="text-center">
    <p className="text-center font-bold mb-4">Browse My Recent</p>
    <h1 className="text-4xl lg:text-7xl font-bold text-center">Projects</h1>
  </div>
  <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 mt-32 place-items-center'>
 
 {/* project 1 */}
  <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
      <figure><img src="bloodss.jpg" alt="project!" /></figure>
      <div className="card-body">
        <h2 className="card-title">Blood Donation</h2>
        <p>Blood Donation activities</p>
        <div className="card-actions flex justify-center gap-12 items-center">
       <a href="https://github.com/amir811537/blood-donation-clientside"> <button className="btn px-2">GitHub</button></a>
         <a href="https://blood-donation-auth-adf7b.web.app/"><button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button></a> 
        </div>
      </div>
    </div>


    {/* project 2 */}
    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
      <figure><img src="house-swiftss.jpg" alt="project!" /></figure>
      <div className="card-body">
        <h2 className="card-title">House-swift</h2>
        <p>a rental solution </p>
        <div className="card-actions flex justify-center gap-12 items-center">
     <a href="https://github.com/shajjad00/house-swift-web-creations">
     <button className="btn px-2">GitHub</button>
     </a>
       <a href="https://house-swift-web.netlify.app/"> <button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button></a>
        </div>
      </div>
    </div>
    {/* project 3 */}
    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
      <figure><img src="e-bazar.jpg" alt="project!" /></figure>
      <div className="card-body">
        <h2 className="card-title">Electronics-Bazar</h2>
        <p>an E-commerece</p>
        <div className="card-actions flex justify-center gap-12 items-center">
        <a href="https://github.com/amir811537/-Electronics-Bazar"><button className="btn px-2">GitHub</button></a>
<a href="https://66519120faf7510d3b1b402c--prismatic-mousse-d0882c.netlify.app/"><button className="btn btn-outline text-black hover:text-white hover:bg-green-500">Live</button>
</a></div>
      </div>
    </div>
  </div>

  <div className='hidden lg:block'>
<img src="arrow.png" alt="Arrow icon" className="mx-auto mt-20 w-10 h-10 justify-start cursor-pointer"onClick={() => window.location.href = '#contact'} />

  </div>
</section>
        </div>
    );
};

export default Project;