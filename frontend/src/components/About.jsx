import React from "react";
import "./About.css"; // Optional: Add custom styling if needed

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Placement Help</strong>, your ultimate resource for
        placement preparation!
      </p>
      <p>
        We understand the challenges faced by students and job seekers during
        their placement journey. That’s why we’ve created a platform dedicated
        to helping you excel in your assessments by providing a comprehensive
        collection of previous years' company-specific questions.
      </p>
      <p>
        Our goal is to bridge the gap between preparation and success. With
        curated questions from top companies, we aim to give you a clear insight
        into the types of problems and scenarios you might face in real
        assessments. Whether you’re preparing for coding rounds, aptitude tests,
        or interview questions, <strong>Placement Help</strong> is designed to
        guide you every step of the way.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          <strong>Authentic Questions:</strong> Our database features real
          questions asked in previous placement assessments.
        </li>
        <li>
          <strong>Easy Navigation:</strong> Find company-specific questions with
          just a few clicks.
        </li>
        <li>
          <strong>Tailored Learning:</strong> Focus on the companies you’re
          targeting to maximize your chances of success.
        </li>
      </ul>
      <p>
        Start your journey toward your dream job with confidence. At{" "}
        <strong>Placement Help</strong>, your success is our priority.
      </p>

      <p>
        For More Info may contact us on <a href="">sharmayanit@gmail.com</a> or{" "}
        <a href="">vivekdiwakar6000@gmail.com</a>
      </p>
    </div>
  );
};

export default About;
