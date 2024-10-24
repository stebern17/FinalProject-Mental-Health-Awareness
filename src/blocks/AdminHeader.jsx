import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationIcon from "./../Icons/bell.svg";
import { Dropdown, Avatar } from "flowbite-react";
import LogoutModal from "../components/LogoutModal";

export default function AdminHeader() {
  const [showModal, setShowModal] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = storedUser?.name;
  const avatar = storedUser?.avatar;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <header className="bg-[#16423C] p-4 shadow-md max-h-[15vh] mb-2">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center gap-4">
        <Link to="/admin" className="flex justify-start">
          <img
            src="/PageLogo.png"
            alt="Logo"
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Navbar for larger screens */}
        <nav className="hidden md:flex justify-center items-center gap-6 text-white text-sm md:text-base font-medium">
          <ul className="flex space-x-10">
            <li>
              <Link
                to="/admin"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/manage-konsultasi"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Manage Konsultasi
              </Link>
            </li>
            <li>
              <Link
                to="/write-news"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Write News
              </Link>
            </li>
            <li>
              <Link
                to="/testimoni-admin"
                className="hover:text-gray-300 transition duration-200 whitespace-nowrap"
              >
                Testimoni
              </Link>
            </li>
          </ul>
        </nav>

        {/* User and notifications section with navigation in the avatar dropdown for small screens */}
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
              <Dropdown.Item>
                You have 2 new consultation requests
              </Dropdown.Item>
              <Dropdown.Item>Your article has been published</Dropdown.Item>
              <Dropdown.Item>New testimonial submitted</Dropdown.Item>
            </Dropdown>
          </li>

          {/* Avatar Dropdown */}
          <li className="transition duration-200 cursor-pointer">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={avatar} rounded />}
            >
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  Hi There, {username}
                </span>
              </Dropdown.Header>

              {/* Navigation links in the Avatar Dropdown for small screens */}
              <div className="block md:hidden">
                <Dropdown.Item>
                  <Link to="/admin" className="block text-sm text-gray-700">
                    Dashboard
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/manage-konsultasi"
                    className="block text-sm text-gray-700"
                  >
                    Manage Konsultasi
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/write-news"
                    className="block text-sm text-gray-700"
                  >
                    Write News
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/testimoni-admin"
                    className="block text-sm text-gray-700"
                  >
                    Testimoni
                  </Link>
                </Dropdown.Item>
              </div>

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
