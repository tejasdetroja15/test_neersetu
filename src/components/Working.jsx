import React from "react";
import "./Working.css";

const Working = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-it-works-container">
        {/* Header */}
        <div className="heading-container">
          <div className="label-badge">
            <p className="label-text">How it works</p>
          </div>
          <div className="main-title">
            <h3>AI-Powered</h3>
            <h3>Image Creation</h3>
          </div>
        </div>

        {/* Body Container with 3 Cards */}
        <div className="body-container">
          {/* Card 1 - Enter Your Idea */}
          <div className="process-card">
            <div className="mobile-wrap">
              <div className="mobile-ui">
                <img src="/Img1.png" alt="Enter your idea interface" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Enter Your Idea</h3>
              <p className="card-description">
                Simply type a brief description of the image you want to create.
                The more detailed your prompt, the more accurate the results!
              </p>
            </div>
          </div>

          {/* Card 2 - AI Generates Your Image */}
          <div className="process-card reverse">
            <div className="mobile-wrap">
              <div className="mobile-ui">
                <img
                  src="https://framerusercontent.com/images/mX5dAHTlaceN4NDguCeAZcFbI.png"
                  alt="AI generation interface"
                />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">AI Generates Your Image</h3>
              <p className="card-description">
                Watch as our powerful AI quickly transforms your description
                into a one-of-a-kind image, crafted with precision and
                creativity.
              </p>
            </div>
          </div>

          {/* Card 3 - Save & Share */}
          <div className="process-card">
            <div className="mobile-wrap">
              <div className="mobile-ui">
                <img
                  src="https://framerusercontent.com/images/7vSjm6K3mAQqqM3HtSKme77zhCs.png"
                  alt="Save and share interface"
                />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Save & Share</h3>
              <p className="card-description">
                Once you're satisfied with your creation, download it in high
                resolution or share it directly from the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
