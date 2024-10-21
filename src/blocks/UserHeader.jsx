import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from "./../Icons/user.svg";
import { Dropdown, Avatar } from "flowbite-react";
import NotificationIcon from "./../Icons/bell.svg";
import LogoutModal from "./../components/LogoutModal"; // Import LogoutModal component

export default function UserHeader() {
  const [showModal, setShowModal] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = storedUser?.username;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <header className="bg-[#16423C] p-4 shadow-md max-h-[15vh]">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4">
        <Link to="/user" className="flex justify-start">
          <img
            src="/PageLogo.png"
            alt="Logo"
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        <nav className="flex justify-center items-center gap-4 text-white text-sm md:text-base font-medium">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/user"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/konsultasi"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Konsultasi
              </Link>
            </li>
            <li>
              <Link
                to="/pertolongan-terdekat"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Pertolongan Terdekat
              </Link>
            </li>
            <li>
              <Link
                to="/testimoni"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Testimoni
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex justify-end items-center gap-4 text-white text-xs md:text-sm font-medium">
          <li className="transition duration-200 cursor-pointer">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <img
                  src={NotificationIcon}
                  alt="Notification Icon"
                  className="hover:opacity-80 hover:scale-105 transition duration-200 size-6"
                  aria-label="Notifications"
                />
              }
            >
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  Notifications
                </span>
              </Dropdown.Header>
              <Dropdown.Item>You have 3 new messages</Dropdown.Item>
              <Dropdown.Item>Your appointment is confirmed</Dropdown.Item>
              <Dropdown.Item>
                Reminder: You have a consultation tomorrow
              </Dropdown.Item>
            </Dropdown>
          </li>

          <li className="transition duration-200 cursor-pointer">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={UserIcon} rounded />}
            >
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  Hi There, {username}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => setShowModal(true)}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </li>
        </ul>
      </div>

      <LogoutModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleLogout={handleLogout}
      />
    </header>
  );
}
