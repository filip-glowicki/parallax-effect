import comingSoon from "../assets/coming-soon.svg";

export const SmallScreenAlert = () => (
  <div className="mobile-container">
    <img src={comingSoon} alt="We are working on mobile version" />
    <p>Version for smaller screens is coming soon</p>
  </div>
);
