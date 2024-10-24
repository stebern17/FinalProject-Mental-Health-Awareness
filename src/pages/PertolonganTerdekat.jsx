import React from "react";
import UserLayout from "../layouts/UserLayout";
import MapSection from "../blocks/MapSection";
import DarkButton from "../components/DarkButton";
import { motion } from "framer-motion";

export default function PertolonganTerdekat() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <UserLayout>
      <div className="container mb-1">
        <h1 className="text-3xl font-bold mt-1 text-center text-[#16423C]">
          Pertolongan Terdekat
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Hotline</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-[#16423C]">
                  Kementerian Kesehatan
                </h4>
                <p className="text-sm">Telp: 111</p>
                <p className="text-sm">SMS: 0811-123-119</p>
              </div>
              <DarkButton
                Title="hubungi"
                className={"px-4 py-2 rounded-lg mt-5"}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="md:col-span-2 md:w-[100%] mx-auto"
          >
            <MapSection />
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold mb-2">Hotline Daerah</h3>
            <div className="bg-white p-4 rounded-lg shadow-md flex gap-3">
              <div>
                <h4 className="text-lg font-semibold text-[#16423C]">
                  Kementerian Kesehatan Bandung
                </h4>
                <p className="text-sm">Telp: 119</p>
                <p className="text-sm">SMS: 0811-123-119</p>
              </div>

              <DarkButton Title="hubungi" className={"rounded-lg mt-5"} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex gap-3">
              <div>
                <h4 className="text-lg font-semibold text-[#16423C]">
                  Kementerian Kesehatan Yogyakarta
                </h4>
                <p className="text-sm">Telp: 120</p>
                <p className="text-sm">SMS: 0811-123-119</p>
              </div>

              <DarkButton Title="hubungi" className={"rounded-lg mt-5"} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex gap-3">
              <div>
                <h4 className="text-lg font-semibold text-[#16423C]">
                  Kementerian Kesehatan Jakarta
                </h4>
                <p className="text-sm">Telp: 121</p>
                <p className="text-sm">SMS: 0811-123-119</p>
              </div>

              <DarkButton Title="hubungi" className={"rounded-lg mt-5"} />
            </div>
          </motion.div>
        </div>
      </div>
    </UserLayout>
  );
}
