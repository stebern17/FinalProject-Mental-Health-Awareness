import React, { useState, useEffect } from "react";
import Apple from "./../Icons/apple.svg";
import Google from "./../Icons/google.svg";
import DarkButton from "../components/DarkButton";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./../components/LoginModal";

export default function LoginBlock() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Fetch user data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://6718e1f57fc4c5ff8f4b832e.mockapi.io/api/MentalHealthCare/UserRole"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Find the user based on email and password
    const authenticatedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (authenticatedUser) {
      // Store user data including avatar in localStorage
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      setShowModal(true);

      const redirectPath = authenticatedUser.role ? "/admin" : "/user";
      setTimeout(() => {
        navigate(redirectPath);
      }, 2000);
    } else {
      setErrorMessage("Email atau password salah. Silakan coba lagi.");
    }
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = storedUser?.name; // Use 'name' for the username
  const avatar = storedUser?.avatar; // Get avatar from localStorage

  return (
    <>
      <div className="container min-h-screen flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <div>
              <h1 className="text-3xl font-bold my-5 text-[#16423C]">Login</h1>
              <form className="space-y-6" onSubmit={handleLogin}>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Input Password"
                  />
                  {errorMessage && (
                    <div className="text-red-500 text-sm mt-2">
                      {errorMessage}
                    </div>
                  )}
                </label>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="remember"
                      className="form-checkbox h-4 w-4 text-[#16423C] focus:ring-[#6A9C89]"
                    />
                    <span className="ml-2 text-sm text-slate-700">
                      Remember me
                    </span>
                  </label>
                  <Link to="/login/forget-password">
                    <p className="text-sm text-sky-500 hover:text-sky-700">
                      Forgot Password?
                    </p>
                  </Link>
                </div>
                <DarkButton Title="Login" className="rounded-md" />
                <div className="text-center text-sm text-slate-600">
                  <p>
                    Not have an account yet?{" "}
                    <Link
                      to="/register"
                      className="text-sky-500 hover:text-sky-700"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
              <div className="mt-6">
                <p className="text-center text-sm text-slate-600">
                  Or sign in with
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <img src={Google} alt="Google" className="h-5 w-5 mr-2" />
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <img src={Apple} alt="Apple" className="h-5 w-5 mr-2" />
                    Apple
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <img
              src="/HeroImage.svg"
              alt="HeroImage"
              className="mx-auto w-full max-w-md object-contain"
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <LoginModal
            message={`Hi selamat datang, ${username} anda akan diarahkan ke dashboard`}
          />
        )}
      </AnimatePresence>
    </>
  );
}
