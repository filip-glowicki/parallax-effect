import React from "react";
import ReactDOM from "react-dom/client";
import { Section } from "./components/section";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeroSection } from "./components/hero-section";

import "./styles/css-reset.css";
import "./styles/main.css";
import { SmallScreenAlert } from "./components/small-screen-alert";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <div className="placeholder" />
      </Section>

      <SmallScreenAlert />
    </ParallaxProvider>
  </React.StrictMode>
);
