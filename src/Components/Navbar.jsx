import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  // ScrollSpy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "px-4 py-2 rounded-full font-medium hover:bg-blue-400 hover:text-white transition-all";
  const activeStyle = "bg-[#F96E01] text-white";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#81BFF1] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <img
            src="https://i.ibb.co/KxXD9mh0/logo-8-1.png"
            className="w-32"
            alt="Logo"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 justify-end flex-1">
          <li>
            <a
              href="#home"
              className={`${linkStyle} ${activeSection === "home" ? activeStyle : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${linkStyle} ${activeSection === "about" ? activeStyle : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${linkStyle} ${activeSection === "skills" ? activeStyle : ""}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`${linkStyle} ${activeSection === "education" ? activeStyle : ""}`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#service"
              className={`${linkStyle} ${activeSection === "service" ? activeStyle : ""}`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${linkStyle} ${activeSection === "contact" ? activeStyle : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end flex-1">
          <button
            className="text-2xl font-bold"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute bg-[#81BFF1] w-full left-0 top-16 p-4 flex flex-col gap-2 transition-all duration-300 ${
            open ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className={`${linkStyle} ${activeSection === "home" ? activeStyle : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className={`${linkStyle} ${activeSection === "about" ? activeStyle : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className={`${linkStyle} ${activeSection === "skills" ? activeStyle : ""}`}
            >
              Skills
            </a>
          </li>
            <li>
            <a
              href="#education"
              onClick={() => setOpen(false)}
              className={`${linkStyle} ${activeSection === "education" ? activeStyle : ""}`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#service"
              onClick={() => setOpen(false)}
              className={`${linkStyle} ${activeSection === "service" ? activeStyle : ""}`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`${linkStyle} ${activeSection === "contact" ? activeStyle : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
