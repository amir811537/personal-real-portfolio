import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../../firebase.config";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const UpdateProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [uploading, setUploading] = useState(false);

  const storage = getStorage(app);

  useEffect(() => {
    fetch("https://personal-real-portfolioserverside.vercel.app/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Handle image upload
  const handleImageUpload = async (file) => {
    if (!file) return null;
    setUploading(true);
    const storageRef = ref(storage, `projects/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    setUploading(false);
    return imageUrl;
  };

  // Handle project update
  const handleUpdate = async (e) => {
    e.preventDefault();
    let imageUrl = selectedProject.thumbnailImage;

    if (e.target.thumbnailImage.files[0]) {
      imageUrl = await handleImageUpload(e.target.thumbnailImage.files[0]);
    }

    const updatedProject = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      thumbnailImage: imageUrl,
      clintLink: e.target.clintLink.value,
      serverLink: e.target.serverLink.value || null,
      liveLink: e.target.liveLink.value,
    };

    const response = await fetch(`https://personal-real-portfolioserverside.vercel.app/project/${selectedProject._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    });

    if (response.ok) {
      alert("Project updated successfully!");
      setSelectedProject(null);
      window.location.reload();
    } else {
      alert("Failed to update project.");
    }
  };

  // Handle project delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const response = await fetch(`https://personal-real-portfolioserverside.vercel.app/project/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Project deleted successfully!");
        setProjects(projects.filter((project) => project._id !== id));
      } else {
        alert("Failed to delete project.");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Projects</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id} className="text-center">
              <td className="border p-2">{project.title}</td>
              <td className="border p-2">{project.category}</td>
              <td className="border p-2 flex justify-center items-center" >
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => setSelectedProject(project)}
                >
                  <FaEdit />
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(project._id)}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProject && (
     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4">
     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
       <h2 className="text-2xl font-bold mb-4 text-center">Edit Project</h2>
       <form onSubmit={handleUpdate} className="space-y-4">
         <div>
           <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Project Title</label>
           <input name="title" defaultValue={selectedProject.title} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" required />
         </div>

         <div>
           <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
           <textarea name="description" defaultValue={selectedProject.description} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" required />
         </div>

         <div>
           <label htmlFor="category" className="block text-sm font-semibold text-gray-700">Category</label>
           <select name="category" defaultValue={selectedProject.category} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
             <option value="FullStack">FullStack</option>
             <option value="FrontEnd">FrontEnd</option>
           </select>
         </div>

         <div>
           <label htmlFor="clintLink" className="block text-sm font-semibold text-gray-700">Client Repo URL</label>
           <input name="clintLink" defaultValue={selectedProject.clintLink} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" required />
         </div>

         <div>
           <label htmlFor="serverLink" className="block text-sm font-semibold text-gray-700">Server Repo URL (optional)</label>
           <input name="serverLink" defaultValue={selectedProject.serverLink || ""} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
         </div>

         <div>
           <label htmlFor="liveLink" className="block text-sm font-semibold text-gray-700">Live Website URL</label>
           <input name="liveLink" defaultValue={selectedProject.liveLink} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" required />
         </div>

         <div>
           <label htmlFor="thumbnailImage" className="block text-sm font-semibold text-gray-700">Thumbnail Image</label>
           <input type="file" name="thumbnailImage" className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
           <div className="flex justify-center mt-2">
             <img src={selectedProject.thumbnailImage} alt="Preview" className="w-32 h-32 object-cover rounded-md" />
           </div>
         </div>

         <div className="flex justify-between mt-4">
           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mr-2" disabled={uploading}>
             {uploading ? "Updating..." : "Update"}
           </button>
           <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 w-full ml-2" onClick={() => setSelectedProject(null)}>
             Cancel
           </button>
         </div>
       </form>
     </div>
   </div>
      
      )}
    </div>
  );
};

export default UpdateProjects;
