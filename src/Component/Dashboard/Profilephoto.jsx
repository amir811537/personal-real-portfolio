import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../../firebase.config";

const ProfilePhoto = () => {
    const [selectedPhotos, setSelectedPhotos] = useState([null, null]); // Store URLs of images
    const [imageFiles, setImageFiles] = useState([null, null]); // Store selected file objects
    const [uploading, setUploading] = useState(false);
    const [profileId, setProfileId] = useState(null); // Store user profile ID

    // Fetch profile photos on component mount
    useEffect(() => {
        fetch("https://personal-real-portfolioserverside.vercel.app/protfolio")
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setSelectedPhotos(data[0].images || [null, null]);
                    setProfileId(data[0]._id); // Store the ID for PATCH request
                }
            })
            .catch((error) => console.error("Error fetching profile photos:", error));
    }, []);

    // Handle file selection
    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (!file) return;

        const newPhotos = [...selectedPhotos];
        newPhotos[index] = URL.createObjectURL(file); // Show preview
        setSelectedPhotos(newPhotos);

        const newFiles = [...imageFiles];
        newFiles[index] = file; // Store file for upload
        setImageFiles(newFiles);
    };

    // Handle profile photo update
    const handleUpdate = async () => {
        if (!imageFiles[0] && !imageFiles[1]) {
            console.warn("No new images selected for upload.");
            return;
        }

        setUploading(true);
        const storage = getStorage(app);
        const updatedUrls = [...selectedPhotos];

        for (let i = 0; i < imageFiles.length; i++) {
            const file = imageFiles[i];
            if (file) {
                try {
                    const storageRef = ref(storage, `profile_photos/${file.name}`);
                    await uploadBytes(storageRef, file);
                    const downloadUrl = await getDownloadURL(storageRef);
                    updatedUrls[i] = downloadUrl;
                    console.log(`Profile ${i + 1} Updated:`, downloadUrl);
                } catch (error) {
                    console.error(`Error updating profile ${i + 1}:`, error);
                }
            }
        }

        // ✅ Update profile photo URLs in the backend using PATCH
        try {
            const response = await fetch(`https://personal-real-portfolioserverside.vercel.app/protfolio/${profileId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ images: updatedUrls }),
            });

            if (response.ok) {
                console.log("Profile photos successfully updated!");
            } else {
                console.error("Failed to update profile photos in the database.");
            }
        } catch (error) {
            console.error("Error sending update request:", error);
        }

        setUploading(false);
    };

    return (
        <div className="p-6 flex flex-col items-center space-y-8">
            {/* Profile Pictures Section */}
            <div className="w-full max-w-lg">
                <h1 className="text-xl font-bold mb-3 text-center">Update Your Profile Photos</h1>
                <div className="flex justify-center gap-5">
                    {[0, 1].map((index) => (
                        <div key={index} className="text-center relative">
                            <label className="cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(event) => handleFileChange(event, index)}
                                />
                                <img
                                    src={selectedPhotos[index] || ""}
                                    alt={`Profile ${index + 1}`}
                                    className="w-32 h-32 rounded-md shadow-lg object-cover border-2 border-gray-300 hover:border-red-500"
                                />
                            </label>
                            <p className="mt-2 text-gray-700">{index === 0 ? "1st" : "2nd"}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Update Button */}
            {imageFiles.some((file) => file !== null) && (
                <button
                    onClick={handleUpdate}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-400"
                    disabled={uploading}
                >
                    {uploading ? "Updating..." : "Update Profile Photos"}
                </button>
            )}
        </div>
        // added new code
    );
};

export default ProfilePhoto;
