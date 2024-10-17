import React, { useRef, useState, useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import HeroSection from "../blocks/HeroSection";
import DokterSection from "../blocks/DokterSection";
import NewsSection from "../blocks/NewsSection";
import TestimoniSection from "../blocks/TestimoniSection";
import { motion, useInView } from "framer-motion";

export default function MainPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // States for tracking visibility
  const [dokterVisible, setDokterVisible] = useState(false);
  const [newsVisible, setNewsVisible] = useState(false);
  const [testimoniVisible, setTestimoniVisible] = useState(false);

  // Refs for sections
  const dokterRef = useRef(null);
  const newsRef = useRef(null);
  const testimoniRef = useRef(null);

  // In-view detections
  const dokterInView = useInView(dokterRef);
  const newsInView = useInView(newsRef);
  const testimoniInView = useInView(testimoniRef);

  // Reset and trigger animations based on viewport status
  useEffect(() => {
    setDokterVisible(dokterInView);
  }, [dokterInView]);

  useEffect(() => {
    setNewsVisible(newsInView);
  }, [newsInView]);

  useEffect(() => {
    setTestimoniVisible(testimoniInView);
  }, [testimoniInView]);

  return (
    <DefaultLayout>
      <div className="min-h-screen mb-3 overflow-hidden">
        <HeroSection />

        <motion.div
          ref={dokterRef}
          variants={fadeInUp}
          initial="hidden"
          animate={dokterVisible ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <DokterSection />
        </motion.div>

        <motion.div
          ref={newsRef}
          variants={fadeInUp}
          initial="hidden"
          animate={newsVisible ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <NewsSection />
        </motion.div>

        <motion.div
          ref={testimoniRef}
          variants={fadeInUp}
          initial="hidden"
          animate={testimoniVisible ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <TestimoniSection />
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
