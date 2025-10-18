import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import HowWeWork from "./components/HowWeWork";
import CTASections from "./components/CTASections";

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <HowWeWork />
        <CTASections />
      </main>
    </Layout>
  );
};

export default Home;
