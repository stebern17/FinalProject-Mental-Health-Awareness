import React from "react";
import TulisBeritaBlock from "../blocks/TulisBeritaBlock";
import AdminLayout from "../layouts/AdminLayout";
import { motion } from "framer-motion";

export default function WriteNews() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <AdminLayout>
      <div className="container overflow-hidden">
        <h3 className="text-3xl font-bold text-center text-[#16423C]">
          Tulis Berita
        </h3>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <div className="mt-8">
            <TulisBeritaBlock />
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
