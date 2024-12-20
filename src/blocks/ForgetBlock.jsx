import React from "react";
import DarkButton from "../components/DarkButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ForgetBlock() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="container min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-3xl font-bold my-5 text-[#16423C]">
              Forgot Password
            </h1>
            <p className="text-slate-600 text-sm mb-6">
              Enter your email address below, and we'll send you instructions to
              reset your password.
            </p>
            <form className="space-y-6">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="you@example.com"
                />
              </label>
              <DarkButton
                Title="Send Reset Instructions"
                className="rounded-md"
              />
              <div className="text-center text-sm text-slate-600">
                <p>
                  Remember your password?{" "}
                  <Link to="/login" className="text-sky-500 hover:text-sky-700">
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>

        <img
          src="/HeroImage.png"
          alt="HeroImage"
          className="mx-auto w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
}
