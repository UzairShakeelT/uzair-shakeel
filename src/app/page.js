"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MobileApps from "@/components/projects/MobileApps";
import WebProjects from "@/components/projects/WebProjects";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey={"gplv3-license"}
      scrollingSpeed={1000}
      navigation
      render={() => (
        <div>
          <div className="section">
            <Hero />
          </div>

          <div className="section">
            <About />
          </div>

          <div className="section">
            <MobileApps />
          </div>

          <div className="section">
            <WebProjects />
          </div>

          <div className="section">
            <Contact />
          </div>
        </div>
      )}
    />
  );
}
