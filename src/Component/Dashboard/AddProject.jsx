import { useState } from "react";
import { useForm } from "react-hook-form";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../../firebase.config";

const AddProject = () => {
    const { register, handleSubmit, reset } = useForm();
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(null);

    const storage = getStorage(app);

    const handleImageUpload = async (file) => {
        if (!file) return null;
        setUploading(true);
        const storageRef = ref(storage, `projects/${file.name}`);
        await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(storageRef);
        setUploading(false);
        return imageUrl;
    };

    const onSubmit = async (data) => {
        if (!data.thumbnailImage[0]) {
            alert("Please upload an image");
            return;
        }

        const imageUrl = await handleImageUpload(data.thumbnailImage[0]);

        const projectData = {
            title: data.title,
            description: data.description,
            category: data.category,
            thumbnailImage: imageUrl,
            clintLink: data.clintLink,
            serverLink: data.serverLink || null,
            liveLink: data.liveLink,
        };

        try {
            const response = await fetch("https://personal-real-portfolioserverside.vercel.app/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(projectData),
            });

            if (response.ok) {
                alert("Project added successfully!");
                reset();
                setPreview(null);
            } else {
                alert("Failed to add project.");
            }
        } catch (error) {
            console.error("Error posting project:", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
            <h1 className="text-xl font-bold text-center mb-4">Add a New Project</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("title")} placeholder="Project Title" className="w-full p-2 border rounded-md" required />
                <textarea {...register("description")} placeholder="Project Description" className="w-full p-2 border rounded-md h-20" required />
                <select {...register("category")} className="w-full p-2 border rounded-md" required>
                    <option value="FullStack">FullStack</option>
                    <option value="FrontEnd">FrontEnd</option>
                </select>
                <input {...register("clintLink")} placeholder="Client Repo URL" className="w-full p-2 border rounded-md" required />
                <input {...register("serverLink")} placeholder="Server Repo URL (optional)" className="w-full p-2 border rounded-md" />
                <input {...register("liveLink")} placeholder="Live Website URL" className="w-full p-2 border rounded-md" required />

                <input
                    type="file"
                    accept="image/*"
                    {...register("thumbnailImage")}
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
                    required
                />

                {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md mx-auto" />}

                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" disabled={uploading}>
                    {uploading ? "Uploading..." : "Add Project"}
                </button>
            </form>
        </div>
    );
};

export default AddProject;
