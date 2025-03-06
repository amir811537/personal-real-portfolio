import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../../firebase.config";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const UpdateSkills = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [uploading, setUploading] = useState(false);
  const storage = getStorage(app);

  useEffect(() => {
    fetch("https://personal-real-portfolioserverside.vercel.app/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  // Handle SVG upload
  const handleImageUpload = async (file) => {
    if (!file) return null;
    setUploading(true);
    const storageRef = ref(storage, `svg/${file.name}`);
    await uploadBytes(storageRef, file);
    const svgUrl = await getDownloadURL(storageRef);
    setUploading(false);
    return svgUrl;
  };

  // Handle skill update
  const handleUpdate = async (e) => {
    e.preventDefault();
    let imageUrl = selectedSkill.skillImage;

    if (e.target.thumbnailImage.files[0]) {
      imageUrl = await handleImageUpload(e.target.thumbnailImage.files[0]);
    }

    const updatedSkill = {
      title: e.target.title.value,
      skillImage: imageUrl,
    };

    const response = await fetch(`https://personal-real-portfolioserverside.vercel.app/skills/${selectedSkill._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSkill),
    });

    if (response.ok) {
      alert("Skill updated successfully!");
      setSelectedSkill(null);
      window.location.reload();
    } else {
      alert("Failed to update skill.");
    }
  };

  // Handle skill delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      const response = await fetch(`https://personal-real-portfolioserverside.vercel.app/skills/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Skill deleted successfully!");
        setSkills(skills.filter((skill) => skill._id !== id));
      } else {
        alert("Failed to delete skill.");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Skill</h1>
      
      {/* Updated Table Design */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Skill Name</th>
              <th className="p-3 text-left">Skill Image</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill._id} className="border-b hover:bg-gray-100">
                <td className="p-3">{skill.title}</td>
                <td className="p-3">
                  <img src={skill.skillImage} alt={skill.title} className="w-10 h-10 object-cover rounded-md" />
                </td>
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition"
                    onClick={() => handleDelete(skill._id)}
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Edit Skill</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                  Skill Name
                </label>
                <input
                  name="title"
                  defaultValue={selectedSkill.title}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="thumbnailImage" className="block text-sm font-semibold text-gray-700">
                  Upload New SVG (Optional)
                </label>
                <input
                  type="file"
                  name="thumbnailImage"
                  accept="image/svg+xml"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <div className="flex justify-center mt-2">
                  <img
                    src={selectedSkill.skillImage}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mr-2"
                  disabled={uploading}
                >
                  {uploading ? "Updating..." : "Update"}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 w-full ml-2"
                  onClick={() => setSelectedSkill(null)}
                >
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

export default UpdateSkills;
