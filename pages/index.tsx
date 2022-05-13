import type { NextPage } from "next";
import { useState, useEffect } from "react";
import About from "../components/about/about";
import Timeline from "../components/timeline/timeline";
import Loader from "../components/loader";
import Hero from "../components/hero";
import Founders from "../components/founders/founders";

const Home: NextPage = () => {
  // Home state
  const [isLoading, setIsLoading] = useState(false);

  // Loading screen timeout
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  return isLoading ? (
    // LOADING SCREEN
    <Loader />
  ) : (
    <>
      {/* NAVBAR AND HERO */}
      <section className="main-container">
        {/* HERO */}
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="about-container">
        <About />
      </section>

      {/* TIMELINE */}
      <section className="timeline-container">
        <Timeline />
      </section>

      {/* PORTRAITS/FOUNDERS */}
      <section className="founders-container">
        <Founders />
      </section>
    </>
  );
};

export default Home;
