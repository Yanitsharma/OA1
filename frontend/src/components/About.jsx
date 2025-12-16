import React from "react";
import "./About.css"; // We will create this next
import { FaUsers, FaBullseye, FaCheckCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper">
      
      {/* --- Main Glass Card --- */}
      <div className="about-card">
        
        {/* Header Section */}
        <div className="about-header">
          <h1 className="about-title">About <span className="highlight">Placement Help</span></h1>
          <p className="about-tagline">Bridging the gap between preparation and success.</p>
        </div>

        {/* Mission Section */}
        <div className="about-section">
          <div className="section-icon"><FaBullseye /></div>
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              We understand the challenges faced by students during their placement journey. 
              Our platform is dedicated to helping you excel by providing a comprehensive, 
              curated collection of previous years' company-specific questions.
            </p>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="features-container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            
            <div className="feature-item">
              <FaCheckCircle className="check-icon" />
              <div>
                <h3>Authentic Questions</h3>
                <p>Real questions from actual previous placement assessments.</p>
              </div>
            </div>

            <div className="feature-item">
              <FaUsers className="check-icon" />
              <div>
                <h3>Tailored Learning</h3>
                <p>Focus on specific companies to maximize your chances.</p>
              </div>
            </div>

            <div className="feature-item">
              <FaCheckCircle className="check-icon" />
              <div>
                <h3>Easy Navigation</h3>
                <p>Find what you need in seconds with our intuitive interface.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2>Get in Touch</h2>
          <p>Have questions or feedback? We'd love to hear from you.</p>
          
          <div className="contact-cards">
            <a href="mailto:sharmayanit@gmail.com" className="contact-link">
              <FaEnvelope /> sharmayanit@gmail.com
            </a>
            <a href="mailto:vivekdiwakar6000@gmail.com" className="contact-link">
              <FaEnvelope /> vivekdiwakar6000@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;