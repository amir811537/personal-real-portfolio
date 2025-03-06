import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../../firebase.config";

const AddSkill = () => {
    const { register, handleSubmit, reset } = useForm();
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(null);
    const storage = getStorage(app);

    const handleSVGUpload = async (file) => {
        if (!file) return null;
        setUploading(true);
        try {
            const storageRef = ref(storage, `svg/${file.name}`);
            await uploadBytes(storageRef, file);
            const svgUrl = await getDownloadURL(storageRef);
            return svgUrl;
        } catch (error) {
            console.error("Error uploading SVG:", error);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const onSubmit = async (data) => {
        if (!data.svg[0]) {
            alert("Please upload an SVG file.");
            return;
        }

        const svgUrl = await handleSVGUpload(data.svg[0]);
        if (!svgUrl) {
            alert("Failed to upload SVG.");
            return;
        }

        const skillData = {
            title: data.title,
            skillImage: svgUrl,
         
        };

        try {
            const response = await fetch("https://personal-real-portfolioserverside.vercel.app/skills", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(skillData),
            });

            if (response.ok) {
                alert("Skill added successfully!");
                reset();
                setPreview(null);
            } else {
                alert("Failed to add skill.");
            }
        } catch (error) {
            console.error("Error posting skill:", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
            <h1 className="text-xl font-bold text-center mb-4">Add a New Skill</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    {...register("title")}
                    placeholder="Skill Name"
                    className="w-full p-2 border rounded-md"
                    required
                />

                <p>Upload a skill SVG file</p>
                <input
                    type="file"
                    accept="image/svg+xml"
                    {...register("svg")}
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
                    required
                />

                {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md mx-auto" />}

                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" disabled={uploading}>
                    {uploading ? "Uploading..." : "Add Skill"}
                </button>
            </form>
        </div>
    );
};

export default AddSkill;
