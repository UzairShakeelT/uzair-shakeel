"use client";

import { motion } from "framer-motion";
import { Lexend_Exa } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const lexendExa800 = Lexend_Exa({ weight: "800", subsets: ["latin"] });
const lexendExa200 = Lexend_Exa({ weight: "400", subsets: ["latin"] });

export default function WebProjects() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topRef.current) setTopVisible(entry.isIntersecting);
          if (entry.target === bottomRef.current) setBottomVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (topRef.current) observer.observe(topRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      setCursor({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="w-full h-screen overflow-y-scroll scroll-smooth">
      {/* --- TOP SECTION --- */}
      <div
        ref={topRef}
        className="relative h-[50vh] flex justify-end items-end px-5 md:px-20 overflow-hidden bg-[#DBE4F8]"
      >
        {/* Decorative Object */}
        <motion.img
        src="/images/creative-portfolio-14.png"
        alt="Decorative Top"
        className="absolute z-0"
        style={{
          width: "10vw",
          top: "15%",
          left: "25%",
          objectFit: "contain",
        }}
        initial={{ x: -150, y: -80, rotate: -120, opacity: 0 }}
        animate={
          topVisible
            ? {
                x: cursor.x * 40,
                y: cursor.y * 50,
                rotate: 0,
                opacity: 1,
              }
            : { x: -300, y: 0, rotate: -180, opacity: 0 }
        }
        transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
      />

        {/* Process Image (Static) */}
        <img
          src="/images/sqms_process.png"
          alt="SQMS Process"
          className="h-full object-contain relative z-10"
          style={{ width: "45%" }}
        />

        {/* Tablet */}
        <motion.img
          src="/images/sqms_tablet.png"
          alt="SQMS Tablet"
          className="absolute z-10"
          style={{
            width: "15vw",
            bottom: "-15%",
            right: "38%",
            transform: "translateX(80%) scale(1.2)",
            objectFit: "contain",
          }}
          initial={{ x: 300, opacity: 1 }}
          animate={
            topVisible
              ? {
                  x: cursor.x * -35,
                  y: cursor.y * -40,
                  opacity: 1,
                }
              : { x: 300, opacity: 1 }
          }
          transition={{ type: "spring", duration: 2.0 }}
        />

        {/* Text */}
        <div className="absolute left-5 md:left-20 bottom-5 md:bottom-20 flex flex-col space-y-2 z-20">
          <motion.h1
            className={`${lexendExa800.className} text-3xl md:text-6xl`}
            style={{ color: "#080808", letterSpacing: "-3px" }}
            initial={{ x: -200, opacity: 0 }}
            animate={topVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            ORACLE APEX
          </motion.h1>
          <motion.p
            className={`${lexendExa200.className} text-sm md:text-lg`}
            style={{ color: "#080808" }}
            initial={{ x: -200, opacity: 0 }}
            animate={topVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Garments Quality Management App
          </motion.p>
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div
        ref={bottomRef}
        className="relative h-[50vh] flex items-end overflow-hidden bg-[#FCEDFC]"
      >
        {/* Decorative Object */}
          <motion.img
          src="/images/creative-portfolio-15.png"
          alt="Decorative Bottom"
          className="absolute z-0"
          style={{
            width: "10vw",
            top: "10%",
            right: "20%",
            objectFit: "contain",
          }}
          initial={{ x: 150, y: -80, rotate: 120, opacity: 0 }}
          animate={
            bottomVisible
              ? {
                  x: cursor.x * -50,
                  y: cursor.y * 40,
                  rotate: 0,
                  opacity: 1,
                }
              : { x: 300, y: 0, rotate: 120, opacity: 0 }
          }
          transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
        />

        {/* Process Image */}
        <img
          src="/images/time_process.png"
          alt="TIME Process"
          className="absolute bottom-0 object-contain z-10"
          style={{ width: "45%", left: "1rem", height: "100%" }}
        />

        {/* Mobile */}
        <motion.img
        src="/images/time_mobile.png"
        alt="TIME Mobile"
        className="absolute z-10"
        style={{
          width: "12vw",
          bottom: "-20%",
          left: "37%",
          transform: "translateX(-30%)",
          objectFit: "contain",
        }}
        initial={{ x: -300, opacity: 1 }}
        animate={
          bottomVisible
            ? {
                x: cursor.x * 35, // <- increased
                y: cursor.y * -40,
                opacity: 1,
              }
            : { x: -300, opacity: 1 }
        }
        transition={{ type: "spring", duration: 2.0 }}
      />

        {/* Text */}
        <div className="absolute right-5 md:right-20 bottom-5 md:bottom-20 flex flex-col space-y-2 text-right z-20">
          <motion.h1
            className={`${lexendExa800.className} text-3xl md:text-6xl`}
            style={{ color: "#080808", letterSpacing: "-3px" }}
            initial={{ x: 200, opacity: 0 }}
            animate={bottomVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            SALE SPHERE
          </motion.h1>
          <motion.p
            className={`${lexendExa200.className} text-sm md:text-lg`}
            style={{ color: "#080808" }}
            initial={{ x: 200, opacity: 0 }}
            animate={bottomVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Face Recognition Attendance App
          </motion.p>
        </div>
      </div>
    </div>
  );
}
