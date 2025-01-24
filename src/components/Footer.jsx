import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gray-900 text-neutral-content items-center p-4">
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
