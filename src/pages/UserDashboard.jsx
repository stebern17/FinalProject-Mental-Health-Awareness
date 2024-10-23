import React from "react";
import UserLayout from "../layouts/UserLayout";
import ProfileSection from "../blocks/ProfileSection";
import UserContent from "../blocks/UserContent";
import { motion } from "framer-motion";

export default function UserDashboard() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = storedUser?.name;
  const avatar = storedUser?.avatar;

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <UserLayout>
      <div>
        <div className="container mb-2">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible" // Added animate prop to trigger the fade-in effect
            transition={{ duration: 1 }}
          >
            <ProfileSection username={username} UserIcon={avatar} />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <UserContent />
          </motion.div>
        </div>
      </div>
    </UserLayout>
  );
}
