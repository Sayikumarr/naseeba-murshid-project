import React from "react";
import "./App.css"; // Import your CSS file
import Header from "./components/Header";
import Slider from "./components/Slider";
import CustomNav from "./components/CustomNav.js";
import About from "./components/About.js";
import DoSection from "./components/DoSection";
import SkillSection from "./components/SkillSection.js";
import GallerySection from "./components/GallerySection.js";
import BlogSection from "./components/BlogSection.js";
import ContactSection from "./components/ContactSection.js";
import InfoSection from "./components/InfoSection.js";
import Footer from "./components/Footer.js";
import { useEffect } from "react";
import $ from "jquery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtRequirementsForm from "./components/ArtRequirementsForm.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/about"
            exact
            element={
              <>
                <div className="hero_area">
                  <Header />
                  <Slider />
                </div>
                <CustomNav />
                <About />
              </>
            }
          />
          <Route
            path="/get-yours"
            exact
            element={
              <>
                <CustomNav />
                <ArtRequirementsForm />
                {/* <ContactSection /> */}
              </>
            }
          />
          <Route
            path="/gallery"
            exact
            element={
              <>
                <div className="hero_area">
                  <Header />
                  <Slider />
                </div>
                <CustomNav />
                <GallerySection />
              </>
            }
          />
          <Route
            path="/blogs"
            exact
            element={
              <>
                <div className="hero_area">
                  <Header />
                  <Slider />
                </div>
                <CustomNav />
                <br />
                <BlogSection />
              </>
            }
          />
          <Route
            path="/contact"
            exact
            element={
              <>
                <div className="hero_area">
                  <Header />
                  <Slider />
                </div>
                <CustomNav />
                <ContactSection />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = $(".hero_area");
      const menu = $(".custom_menu-container");
      const scrollTop = $(window).scrollTop();
      if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
      } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
      }
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <CustomNav />
      <About />
      <DoSection />
      <SkillSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
      <InfoSection />
      {/* <ArtRequirementsForm /> */}
    </>
  );
}

export default App;
