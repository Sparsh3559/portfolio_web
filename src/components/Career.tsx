import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Infosys (Virtual)</h5>
              </div>
              <h3>Nov 2025 - Feb 2026</h3>
            </div>
            <p>
              Applied LLMs to generate professional content and integrated an
              LLM API with a Streamlit interface by iteratively refining prompt
              structure and system flow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Development Intern</h4>
                <h5>Alphawizz Technologies Pvt. Ltd., Indore</h5>
              </div>
              <h3>Jun 2025 - Aug 2025</h3>
            </div>
            <p>
              Built responsive React interfaces with reusable components,
              integrated REST APIs, managed application state, and maintained
              version control with Git.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Information Technology</h4>
                <h5>Medi-Caps University, Indore</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Pursuing graduation with a CGPA of 7.20 while focusing on
              full-stack development, backend systems, and AI-powered product
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
