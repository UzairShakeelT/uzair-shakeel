"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Lexend_Exa } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const lexendExa = Lexend_Exa({
  weight: ["200", "800"],
  subsets: ["latin"],
});

export default function Hero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // track screen size
  const [screenSize, setScreenSize] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1000,
    h: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  // motion values start at center
  const mouseX = useMotionValue(screenSize.w / 2);
  const mouseY = useMotionValue(screenSize.h / 2);

  // recalc on resize/zoom
  useEffect(() => {
    const onResize = () => {
      setScreenSize({ w: window.innerWidth, h: window.innerHeight });
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mouseX, mouseY]);

  // transforms (use vw/vh units so it’s zoom responsive)
  const moveX1 = useTransform(mouseX, [0, screenSize.w], ["-3vw", "3vw"]);
  const moveY1 = useTransform(mouseY, [0, screenSize.h], ["-3vh", "3vh"]);
  const moveX2 = useTransform(mouseX, [0, screenSize.w], ["-2vw", "2vw"]);
  const moveY2 = useTransform(mouseY, [0, screenSize.h], ["-2vh", "2vh"]);
  const moveXOpp = useTransform(mouseX, [0, screenSize.w], ["3vw", "-3vw"]);
  const moveYOpp = useTransform(mouseY, [0, screenSize.h], ["3vh", "-3vh"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      // smoothly animate back to center when mouse leaves window/page
      animate(mouseX, screenSize.w / 2, { type: "spring", stiffness: 150, damping: 15 });
      animate(mouseY, screenSize.h / 2, { type: "spring", stiffness: 150, damping: 15 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY, screenSize]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const floatVariant = {
    hidden: { opacity: 0, rotate: 0 },
    visible: (rotateEnd = 120) => ({ opacity: 1, rotate: rotateEnd }),
  };

  const textVariant = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ backgroundColor: "rgb(228, 246, 227)" }}
    >
      {/* Floating images */}
      <motion.img
        src="/images/creative-portfolio-03.png"
        alt="Top-left"
        className="absolute top-[12%] left-[3%] w-[14vw] h-auto z-0"
        style={{ x: moveX1, y: moveY1 }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={120}
        variants={floatVariant}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      />
      <motion.img
        src="/images/creative-portfolio-05.png"
        alt="Top-right"
        className="absolute top-[8%] right-[6%] w-[7vw] h-auto z-0"
        style={{ x: moveX2, y: moveY2 }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={120}
        variants={floatVariant}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      />
      <motion.img
        src="/images/creative-portfolio-04.png"
        alt="Bottom-left"
        className="absolute bottom-[12%] left-[5%] w-[5vw] h-auto z-0"
        style={{ x: moveXOpp, y: moveYOpp }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={0}
        variants={floatVariant}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      />
      <motion.img
        src="/images/creative-portfolio-02.png"
        alt="Bottom-right"
        className="absolute bottom-[12%] right-[5%] w-[15vw] h-auto z-0"
        style={{ x: moveXOpp, y: moveYOpp }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={120}
        variants={floatVariant}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      />

      {/* Background text */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center uppercase leading-none select-none pointer-events-none ${lexendExa.className} gap-[2vh]`}
        style={{ zIndex: 1 }}
      >
        <div className="overflow-hidden w-[80vw] flex justify-center">
          <motion.span
            className="text-[11vw] sm:text-[10vw] md:text-[9vw]"
            style={{ color: "#080808", display: "inline-block" }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariant}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Full Stack
          </motion.span>
        </div>
        <div className="overflow-hidden w-[95vw] whitespace-nowrap flex justify-center">
          <motion.span
            className="text-[12vw] sm:text-[11vw] md:text-[10vw] font-semibold tracking-tighter inline-block mr-[0.3em]"
            style={{ color: "#080808" }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={
              isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }
            }
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Web
          </motion.span>
          <motion.span
            className="text-[12vw] sm:text-[11vw] md:text-[10vw] font-semibold tracking-tighter inline-block"
            style={{ color: "#080808" }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariant}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            & Mobile
          </motion.span>
        </div>
        <div className="overflow-hidden w-[80vw] flex justify-center">
          <motion.span
            className="text-[11vw] sm:text-[10vw] md:text-[9vw]"
            style={{ color: "#080808", display: "inline-block" }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariant}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Developer
          </motion.span>
        </div>
      </div>

      {/* Portrait */}
      <div className="absolute inset-0 flex justify-center items-start z-30 pointer-events-none overflow-hidden">
        <img
          src="/images/portrait.png"
          alt="Portrait"
          className="h-full w-auto object-cover scale-105 max-w-none"
          style={{
            objectPosition: "top center",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}
