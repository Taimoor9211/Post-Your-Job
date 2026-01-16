import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import HowItsWork from "../Components/HowItsWork";
import PostYourFirstTask from "../Components/PostYourFirstTask";
import FrequentlyAskQuestions from "../Components/FrequentlyAskQuestions";
import Trustandsafety from "../Components/Trustandsafety";
import ReadytoSimplifyYourLife from "../Components/ReadytoSimplifyYourLife";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItsWork />
      <PostYourFirstTask />
      <FrequentlyAskQuestions />
      <Trustandsafety />
      <ReadytoSimplifyYourLife />
    </div>
  );
};

export default HomePage;
