"use client";

import { Lexend_Exa, Inter, DM_Sans } from "next/font/google";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiFlutter, SiDotnet } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const lexendExa = Lexend_Exa({ weight: ["200", "800"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: false });
  const controls = useAnimation();
  const [counterValues, setCounterValues] = useState({
    Flutter: 0,
    React: 0,
    ".NET": 0,
    "Next.js": 0,
  });

  const skills = [
    { name: "Flutter", value: 95 },
    { name: "React", value: 90 },
    { name: ".NET", value: 88 },
    { name: "Next.js", value: 85 },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      // Reset and re-run number animation
      skills.forEach((skill) => {
        let start = 0;
        const end = skill.value;
        const duration = 1600; // ms (longer = smoother)
        const stepTime = 1000 / 60; // ~60fps
        const increment = end / (duration / stepTime);
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounterValues((prev) => ({
            ...prev,
            [skill.name]: Math.floor(start),
          }));
        }, stepTime);
      });
    } else {
      // Reset counters when out of view
      setCounterValues({
        Flutter: 0,
        React: 0,
        ".NET": 0,
        "Next.js": 0,
      });
      controls.start("hidden");
    }
  }, [isInView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const skillGrow = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { delay: 0.3, duration: 1.6, ease: [0.16, 1, 0.3, 1] }, // smoother ease-out
    }),
  };

  const slideFromEdgeLeftHeader = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const scrollingText =
    "Flutter • React • Next.js • Node.js • .NET • Full-Stack Development • Mobile Apps • Web Apps • E-Commerce Solutions • RESTful APIs • Database Integration • Performance Optimization • Scalable Architecture • UI/UX Design";

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-[#DBE4F8] py-16 flex flex-col justify-between overflow-hidden snap-start"
    >
      {/* --- BACKGROUND SHAPES (animated) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={0}
          className="absolute top-[-60px] left-[-60px] w-[180px] h-[180px] bg-[#a0b6f2] rounded-full opacity-80"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={1}
          className="absolute top-[-40px] right-[-100px] w-[280px] h-[140px] bg-[#9db4f5] rotate-[15deg] opacity-75 rounded-xl"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={2}
          className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-[#b4c6fa] rounded-full opacity-70"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={3}
          className="absolute bottom-[120px] left-[40%] w-0 h-0"
          style={{
            borderLeft: "100px solid transparent",
            borderRight: "100px solid transparent",
            borderTop: "180px solid rgba(159, 181, 246, 0.5)",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] gap-12 px-6 z-10 mt-10">
        {/* LEFT */}
        <div>
          <motion.h2
            className={`${lexendExa.className} text-8xl sm:text-7xl md:text-8xl leading-none mb-16 flex`}
            style={{ color: "#080808" }}
            variants={slideFromEdgeLeftHeader}
            initial="hidden"
            animate={controls}
          >
            <span className="font-light mr-8">ABOUT</span>
            <span className="font-extrabold relative">ME</span>
          </motion.h2>

          <div className={`space-y-6 ${dmSans.className}`}>
            {[
              "I’m Uzair Shakeel, a full-stack web and mobile developer passionate about creating impactful digital experiences. Over the past few years, I’ve designed and developed professional-grade applications and platforms that blend performance, scalability, and clean design.",
              "With hands-on expertise in Flutter, React, Next.js, and .NET, I specialize in building dynamic, user-focused web and mobile solutions — from robust enterprise systems to modern e-commerce platforms. My goal is to craft technology that helps businesses operate smarter and grow faster.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-[1.05rem] text-gray-800 leading-loose"
                variants={slideUp}
                initial="hidden"
                animate={controls}
                custom={i + 1}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Skill Icons */}
          <motion.div
            className="flex space-x-6 mt-8"
            variants={slideUp}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            {[
              { icon: <SiFlutter className="text-3xl text-sky-400" />, title: "Flutter" },
              { icon: <FaReact className="text-3xl text-blue-500" />, title: "React" },
              { icon: <TbBrandNextjs className="text-3xl text-black" />, title: "Next.js" },
              { icon: <SiDotnet className="text-3xl text-purple-700" />, title: ".NET" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-white rounded-xl shadow-md"
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CENTER EMPTY SPACE */}
        <div className="w-16 md:w-24"></div>

        {/* RIGHT */}
        <div className={`flex flex-col justify-center space-y-8 ${dmSans.className}`}>
          <div className="space-y-10">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 font-bold tracking-[0.1em] text-lg">
                    {skill.name}
                  </span>
                  <span className="text-gray-700 font-medium tracking-[0.05em]">
                    {counterValues[skill.name]}%
                  </span>
                </div>
                <div className="w-full h-[4px] bg-gray-300 overflow-hidden">
                  <motion.div
                    className="h-[3px] bg-black rounded-full"
                    variants={skillGrow}
                    initial="hidden"
                    animate={controls}
                    custom={skill.value}
                  />
                </div>
              </div>
            ))}
          </div>
          <motion.div
            className={`mt-8 text-sm text-gray-700 leading-normal max-w-md ${dmSans.className}`}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            custom={5}
          >
            <p>
              <b>3+ Enterprise Apps Contributed</b> — Built and supported production-grade
              mobile and web applications for <b>Artistic Milliners</b> and other textile
              industries, focusing on real-time production and quality management. Several
              of these apps are published on the <b>Google Play Store</b>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SCROLLING FOOTER STRIP */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black h-12">
        <motion.div
          className={`${lexendExa.className} font-extrabold text-white text-xl whitespace-nowrap py-2 tracking-widest flex`}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 550,
            ease: "linear",
          }}
          style={{ display: "inline-flex" }}
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="pr-8">
              {scrollingText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
