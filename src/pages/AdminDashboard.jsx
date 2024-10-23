import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import AdminContent from "../blocks/AdminContent";
import ProfileSection from "../blocks/ProfileSection";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 }, // Corrected the typo here
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = storedUser?.name;
  const avatar = storedUser?.avatar;

  return (
    <AdminLayout>
      <div>
        <div className="container">
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
            <AdminContent />
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
