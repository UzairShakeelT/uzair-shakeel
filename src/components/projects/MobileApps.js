"use client";
import { motion } from "framer-motion";
import { Lexend_Exa } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const lexendExa800 = Lexend_Exa({ weight: "800", subsets: ["latin"] });
const lexendExa200 = Lexend_Exa({ weight: "400", subsets: ["latin"] });

export default function MobileApps() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

    const smoothSpring = {
    type: "spring",
    stiffness: 80,
    damping: 15,
  };

  // Observe both sections
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

  // Track cursor movement
  useEffect(() => {
const handleMove = (e) => {

      setCursor({
        x: (e.clientX / window.innerWidth - 0.5) * 2, // -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 2, // -1 to 1
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
        className="relative h-1/2 flex justify-end items-end px-20 overflow-hidden"
        style={{ backgroundColor: "rgb(235, 233, 231)" }}
      >
        {/* Decorative Object */}
        <motion.img
          src="/images/creative-portfolio-16.png"
          alt="Decorative Top"
          className="absolute z-0"
          style={{
            width: "150px",
            top: "60px",
            left: "400px",
            objectFit: "contain",
          }}
          initial={{ x: -150, y: -80, rotate: -120, opacity: 0 }}
          animate={
            topVisible
              ? {
                  x: cursor.x * 30,
                  y: cursor.y * 30,
                  rotate: 0,
                  opacity: 1,
                }
              : { x: -180, y: -80, rotate: -180, opacity: 0 }
          }
          transition={{ type: "spring", duration: 1.6, bounce: 0.3 }}
        />

        {/* Process Image (Static) */}
        <img
          src="/images/sqms_process.png"
          alt="SQMS Process"
          className="h-full object-contain relative z-10"
          style={{ width: "45%" }}
        />

        {/* Tablet (Animated Slightly Inverse) */}
        <motion.img
          src="/images/sqms_tablet.png"
          alt="SQMS Tablet"
          className="absolute z-10"
          style={{
            width: "180px",
            bottom: "-50px",
            right: "38%",
            transform: "translateX(80%) scale(1.2)",
            objectFit: "contain",
          }}
          initial={{ x: 300, opacity: 0 }}
          animate={
            topVisible
              ? {
                  x: cursor.x * -40,
                  y: cursor.y * -40,
                  opacity: 1,
                }
              : { x: 300, opacity: 0 }
          }
          transition={{ type: "spring", duration: 2.0 }}

        />

        {/* Text */}
        <div className="absolute left-20 bottom-20 flex flex-col space-y-2 z-20">
          <motion.h1
            className={`${lexendExa800.className} text-6xl`}
            style={{ color: "#080808" }}
            initial={{ x: -200, opacity: 0 }}
            animate={topVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            SQMS
          </motion.h1>
          <motion.p
            className={`${lexendExa200.className} text-lg`}
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
        className="relative h-1/2 flex items-end overflow-hidden"
        style={{ backgroundColor: "rgb(229, 248, 242)" }}
      >
        {/* Decorative Object (Opposite Direction) */}
        <motion.img
          src="/images/creative-portfolio-17.png"
          alt="Decorative Bottom"
          className="absolute z-0"
          style={{
            width: "130px",
            top: "50px",
            right: "400px",
            objectFit: "contain",
          }}
          initial={{ x: 150, y: -80, rotate: 120, opacity: 0 }}
          animate={
            bottomVisible
              ? {
                  x: cursor.x * -25,
                  y: cursor.y * 25,
                  rotate: 0,
                  opacity: 1,
                }
              : { x: 150, y: -80, rotate: 120, opacity: 0 }
          }
          transition={{ type: "spring", duration: 1.6, bounce: 0.3 }}
        />

        {/* Process Image (Static) */}
        <img
          src="/images/time_process.png"
          alt="TIME Process"
          className="absolute bottom-0 object-contain z-10"
          style={{ width: "45%", left: "1rem", height: "100%" }}
        />

        {/* Mobile (Animated Slightly Different) */}
        <motion.img
          src="/images/time_mobile.png"
          alt="TIME Mobile"
          className="absolute z-10"
          style={{
            width: "150px",
            bottom: "-70px",
            left: "37%",
            transform: "translateX(-30%)",
            objectFit: "contain",
          }}
          initial={{ x: -300, opacity: 0 }}
          animate={
            bottomVisible
              ? {
                  x: cursor.x * 35,
                  y: cursor.y * -35,
                  opacity: 1,
                }
              : { x: -300, opacity: 0 }
          }
          transition={{ type: "spring", duration: 2.0 }}
        />

        {/* Text */}
        <div className="absolute right-20 bottom-20 flex flex-col space-y-2 text-right z-20">
          <motion.h1
            className={`${lexendExa800.className} text-6xl`}
            style={{ color: "#080808" }}
            initial={{ x: 200, opacity: 0 }}
            animate={bottomVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            TIME PUNCH
          </motion.h1>
          <motion.p
            className={`${lexendExa200.className} text-lg`}
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
