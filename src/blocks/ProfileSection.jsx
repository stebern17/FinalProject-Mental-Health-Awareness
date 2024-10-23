import React from "react";

export default function ProfileSection({ username, UserIcon }) {
  return (
    <div className="flex justify-between items-center px-8 md:px-24 mt-5 bg-[#C4DAD2] shadow-md rounded-lg p-4 text-[#16423C]">
      {/* User Info Section */}
      <div className="flex items-center gap-4">
        <img
          src={UserIcon}
          alt="User Icon"
          className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-2 border-gray-300"
        />
        <h3 className="text-2xl font-medium text-[#16423C]">
          Hi There, {username}
        </h3>
      </div>
    </div>
  );
}
