import { Link } from "react-router-dom";
import Instagram from "./../Icons/Instagram.svg";
import Whatsapp from "./../Icons/whatsapp.svg";

export default function Footer({ nav, behave }) {
  const scrollToTop = (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <footer className="bg-[#16423C] mt-auto p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <div className="flex justify-center md:justify-start">
          <Link
            to={nav}
            onClick={behave === "scrollToTop" ? scrollToTop : undefined} // Conditionally call scrollToTop
          >
            <img
              src="/PageLogo.png"
              alt="Page Logo"
              className="h-12 md:h-14 object-contain"
            />
          </Link>
        </div>
        <p className="text-center text-gray-300 text-xs md:text-sm">
          MentalHealthCare © 2024. All rights reserved.
        </p>
        <div className="hidden md:flex justify-end gap-4">
          <img src={Instagram} alt="Instagram" />
          <img src={Whatsapp} alt="WhatsApp" />
        </div>
      </div>
    </footer>
  );
}
