import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Camera } from "lucide-react";
import { string } from "zod/v4";

function Profile() {
  const { user, isUpdatinProfile, updateProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpdate = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profileImage: base64Image });
    };

    useEffect(() => {
      user();
    }, [user, selectedImage, setSelectedImage]);
  };

  return (
    <div className="w-full h-full flex justify-center ">
      <div className="w-[600px] h-full shadow-2xl rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold text-2xl">Profile</h1>
          <p className="font-semibold">Your profile information</p>
          {/* TODO:IMAGE UPLOADER */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImage || user?.profileImage || "/avatar.webp"}
                alt=""
                className="rounded-full size-32 object-cover border-4"
              />
              <label
                htmlFor="image-upload"
                className={`absolute bottom-0 right-0 bg-gray-800 text-white hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 S${
                  isUpdatinProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="size-5" />
                <input
                  type="file"
                  disabled={isUpdatinProfile}
                  id="image-upload"
                  className="hidden"
                  onChange={handleImageUpdate}
                />
              </label>
            </div>
          </div>
          <p className="font-light text-sm">
            {isUpdatinProfile
              ? "Updating"
              : "Click on camera icon to update image"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
