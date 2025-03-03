import { useState } from "react";
import profile1 from "../../assets/profile.jpg";
import profile2 from "../../assets/profile2.jpg";

const ProfilePhoto = () => {
    const [selectedPhotos, setSelectedPhotos] = useState([profile1, profile2]);

    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (!file) return;

        const newPhotos = [...selectedPhotos];
        newPhotos[index] = URL.createObjectURL(file);
        setSelectedPhotos(newPhotos);
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
                                    src={selectedPhotos[index]}
                                    alt={`Profile ${index + 1}`}
                                    className="w-32 h-32 rounded-md shadow-lg object-cover border-2 border-gray-300 hover:border-red-500"
                                />
                            </label>
                            <p className="mt-2 text-gray-700">{index === 0 ? "1st" : "2nd"}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePhoto;
