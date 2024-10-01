import React, { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import "./Navbar.css"; // Make sure to create your own Navbar.css for styling
import { Link } from "react-router-dom";
import logo from "./e4dd.jpeg";
import floating from "./floating.png";
// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faChevronLeft,
  faClose,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenu, setSubMenu] = useState(null);
  const [navsubmenu, setNavSubmenu] = useState(null);
  const [navsubhide, setNavsubhide] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // const handleScroll = () => {
  //   // setNavSubmenu(null);
  //   const scrollPosition = window.scrollY;
  //   console.log("Current scroll position:", scrollPosition);
  //   setNavsubhide(false);
  // };

  const handleScroll = throttle(() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      // Page is scrolling up
      console.log("Scrolling up");
      setNavsubhide(true); // Perform your action here
    } else {
      // Page is scrolling down
      console.log("Scrolling down");
      setNavsubhide(false); // Optional: perform another action
    }

    setPrevScrollPos(currentScrollPos);
  }, 200);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    // handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleMouseEnter = () => {
    setNavsubhide(true);
  };

  const handleMouseLeave = () => {
    setNavsubhide(false);
    setNavSubmenu(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const opensubmenu = (index) => {
    setSubMenu(submenu === index ? null : index);
  };

  const opennavmenu = (index) => {
    setNavSubmenu(navsubmenu === index ? null : index);
    handleMouseEnter();
  };

  const closemenu = () => {
    setNavSubmenu(null);
  };

  const closesidemenu = () => {
    setSidebarOpen(false);
    setSubMenu(null);
  };

  return (
    <div className="z-1">
      {/* Sidebar for mobile view */}
      <nav className={`overflow-y-auto sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          {/* <h3>E4dd</h3> */}
          <Link to="/" onClick={closesidemenu}>
            <img src={logo} className="w-[50px] h-[50px] rounded-[50%]" />
          </Link>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <ul className="sidebar-menu">
          {/* <li className="sidebar-item">
            <Link to="/" onClick={closesidemenu}>
              Home
            </Link>
          </li> */}
          <li className="sidebar-item">
            <div className="sidebar-submenu" onClick={() => opensubmenu(1)}>
              Who we are
              <FontAwesomeIcon
                icon={submenu === 1 ? faChevronDown : faChevronRight}
              />
            </div>
            <ul
              className={`
                ${
                  submenu === 1
                    ? "submenu submenu-active"
                    : "submenu submenu-inactive"
                }`}
            >
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/aboutus">
                  About us
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/academy">
                  e4dd academy
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/foundation">
                  e4dd foundation
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/services">
                  our Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <div className="sidebar-submenu " onClick={() => opensubmenu(2)}>
              What we do
              <FontAwesomeIcon
                icon={submenu === 2 ? faChevronDown : faChevronRight}
              />
            </div>
            <ul
              className={`
                ${
                  submenu === 2
                    ? "submenu submenu-active"
                    : "submenu submenu-inactive"
                }`}
            >
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/drone">
                  Drone
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/BigData">
                  Big Data
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/cybersecurity">
                  Cyber Security
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/ai">
                  AI Business Solutions
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/ml">
                  Machine Learning
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/db">
                  DataBase Management Services
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/software">
                  Software Development
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/">
                  WebDevelopment & Digital Marketing
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/managedit">
                  Managed IT Services
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/cloud">
                  Cloud Services
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/voip">
                  VOIP Support
                </Link>
              </li>
              <li className="submenu-item">
                <Link onClick={closesidemenu} to="/itstaff">
                  IT Consulting & Staffing
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link onClick={closesidemenu} to="/career">
              Career
            </Link>
          </li>
          <li className="sidebar-item">
            <Link onClick={closesidemenu} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="cardn">
          <img className="image" alt="" src={floating || ""} />
          <div className="heading">We're on Social Media</div>
          <div className="icons1">
            <a href="https://www.instagram.com/elite4dd/" className="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/elite4dd" className="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/e4dd" className="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://facebook.com/elite4dd" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://wa.me/+96899369668" className="social-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://t.me/+96899369668" className="social-icon">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </nav>

      {/* Navbar for desktop view */}
      <nav className="navbar ">
        {/* <h3>E4dd</h3> */}
        <Link to="/" onClick={closemenu}>
          <img src={logo} className="w-[50px] h-[50px] rounded-[50%]" />
        </Link>

        <ul className="closenav  navbarmenu  gap-10 ">
          {/* <li className=" px-2">
            <Link className="btn" to="/" onClick={closemenu}>
              Home
            </Link>
          </li> */}
          <li className="navsubparent px-2">
            <Link className="btn" onClick={() => opennavmenu(1)}>
              Who we are
              <FontAwesomeIcon
                icon={navsubmenu === 1 ? faChevronDown : faChevronRight}
              />
            </Link>
            <ul
              className={`navsubmenu overflow-y-auto ${
                navsubmenu === 1 && navsubhide
                  ? " navsubmenu-active"
                  : "navsubmenu-inactive"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li className="my-5">
                <Link to="/aboutus" onClick={closemenu}>
                  About us
                </Link>
              </li>
              <li className="my-5">
                <Link to="/academy" onClick={closemenu}>
                  e4dd academy
                </Link>
              </li>
              <li className="my-5">
                <Link to="/foundation" onClick={closemenu}>
                  {" "}
                  e4dd Foundation
                </Link>
              </li>
              <li className="my-5">
                <Link to="/services" onClick={closemenu}>
                  {" "}
                  Our Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="navsubparent px-2">
            <Link className="btn" onClick={() => opennavmenu(2)}>
              What we do
              <FontAwesomeIcon
                icon={navsubmenu === 2 ? faChevronDown : faChevronRight}
              />
            </Link>
            <ul
              className={`navsubmenu overflow-y-auto ${
                navsubmenu === 2 && navsubhide
                  ? " navsubmenu-active"
                  : "navsubmenu-inactive"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li className="my-5">
                <Link to="/drone" onClick={closemenu}>
                  Drones
                </Link>
              </li>
              <li className="my-5">
                <Link to="/BigData" onClick={closemenu}>
                  Big Data
                </Link>
              </li>
              <li className="my-5">
                <Link to="/cybersecurity" onClick={closemenu}>
                  Cyber Security
                </Link>
              </li>
              <li className="my-5">
                <Link to="/ai" onClick={closemenu}>
                  AI Business Solutions
                </Link>
              </li>
              <li className="my-5">
                <Link to="/ml" onClick={closemenu}>
                  Machine Learning
                </Link>
              </li>
              <li className="my-5">
                <Link to="/db" onClick={closemenu}>
                  Database Management Services
                </Link>
              </li>
              <li className="my-5">
                <Link to="/software" onClick={closemenu}>
                  Software Development
                </Link>
              </li>
              <li className="my-5">
                <Link to="/" onClick={closemenu}>
                  Web Development & Digital Marketing
                </Link>
              </li>
              <li className="my-5">
                <Link to="/managedit" onClick={closemenu}>
                  Managed IT Services
                </Link>
              </li>
              <li className="my-5">
                <Link to="/cloud" onClick={closemenu}>
                  Cloud Services
                </Link>
              </li>
              <li className="my-5">
                <Link to="/voip" onClick={closemenu}>
                  VOIP Support
                </Link>
              </li>
              <li className="my-5">
                <Link to="/itstaff" onClick={closemenu}>
                  IT Consulting & Staffing
                </Link>
              </li>
            </ul>
          </li>
          <li className=" px-2">
            <Link className="btn" to="/Career" onClick={closemenu}>
              Career
            </Link>
          </li>
          <li className=" px-2">
            <Link className="btn" to="/contact" onClick={closemenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="navbar-toggle hide" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
