import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Camera, Loader, Mail, User } from "lucide-react";

function Profile() {
  const { isCheckingAuth, checkAuth, user, isUpdatinProfile, updateProfile } =
    useAuthStore();
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth && !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-20 animate-spin" />
      </div>
    );
  }

  const handleImageUpdate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      if (typeof reader.result === "string") {
        const base64Image = reader.result;
        setSelectedImage(base64Image);
        await updateProfile({ profileImage: base64Image });
      }
    };
  };

  return (
    <div className="w-full h-full flex justify-center overflow-hidden">
      <div className="md:w-[600px] h-full shadow-2xl rounded-2xl flex flex-col gap-14 md:gap-6 mt-6 md:mt-0">
        {/* {Profile Image} */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold text-2xl">Profile</h1>
          <p className="font-semibold">Your profile information</p>
          {/* TODO:IMAGE UPLOADER */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={
                  isUpdatinProfile
                    ? ""
                    : selectedImage || user?.profileImage || "/avatar.webp"
                }
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

        {/* {User Details} */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 mx-4">
            <div className="flex gap-2">
              <User className="size-5" /> <p className="font-light">Username</p>
            </div>
            <div className="w-full rounded-md border-2  px-4 py-2 bg-gray-500 text-white font-bold border-white">
              <input className="w-full" value={user?.username} readOnly />
            </div>
          </div>

          <div className="flex flex-col gap-1 mx-4">
            <div className="flex gap-2">
              <Mail className="size-5" /> <p className="font-light">Username</p>
            </div>
            <div className="w-full rounded-md border-2  px-4 py-2 bg-gray-500 text-white font-bold border-white">
              <input className="w-full" value={user?.email} readOnly />
            </div>
          </div>
        </div>

        {/* {Account information} */}
        <div className="flex flex-col gap-6 justify-center items-center mt-6 mx-12">
          <h3 className="font-bold text-2xl">Account Information</h3>
          <div className="flex justify-between w-full">
            <p>Member since</p>
            <p>{user?.createdAt.split("T")[0]}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Account status</p>
            <p className="text-green-500 font-extrabold">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
