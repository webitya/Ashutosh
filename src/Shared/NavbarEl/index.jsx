import React, { useState, useEffect } from "react";
import IndustriesDropdown from "../NavPcDropdown/IndustriesDropdown";
import CapabilitiesDropdown from "../NavPcDropdown/CapabilitiesDropdown";
import ProjectsDropdown from "../NavPcDropdown/ProjectsDropdown";
import { Button } from "antd";
import { MenuOutlined, PhoneOutlined, SearchOutlined, WidthFull } from "@mui/icons-material";
import DrawerEl from "../DrawerEl";
import { Link } from "react-router-dom";

const Dropdown = ({ label, children, isOpen, onHover, onOutsideClick }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${label.replace(/\s+/g, "-")}`)) {
        onOutsideClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onOutsideClick, label]);

  return (
    <div
      className={`relative ${label.replace(/\s+/g, "-")}`}
      onMouseEnter={onHover}
    >
      <div className="cursor-pointer hover:text-blue-600">{label}</div>
      {isOpen && (
        <div
          className="absolute left-0 bg-zinc-50 z-50 shadow-lg mt-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", zIndex: 1000 }}
        >
          <div className="bg-zinc-50 rounded-md shadow-lg p-6">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const NavbarEl = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const openDropdown = (dropdown) => setActiveDropdown(dropdown);
  const closeDropdown = () => setActiveDropdown(null);
  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Industries", component: <IndustriesDropdown /> },
    { label: "Capabilities", component: <CapabilitiesDropdown /> },
  ];

  return (
    <nav
      className={`${
        isSticky ? "fixed top-0 select-none left-0 w-full z-50 shadow-lg" : "relative"
      } flex justify-between select-none items-center p-6 bg-white transition-all duration-300`}
    >
      {/* Logo */}
      <Link to="/">
        <div className="text-blue-900 text-xl font-bold">A S U T O S</div>
      </Link>

      {/* Navigation Links */}
      <ul className="md:flex space-x-8 text-blue-900 text-sm uppercase hidden tracking-wide">
        {navItems.map(({ label, component }) => (
          <li key={label}>
            <Dropdown
              label={label}
              isOpen={activeDropdown === label}
              onHover={() => openDropdown(label)}
              onOutsideClick={closeDropdown} 
            >
              {component}
            </Dropdown>
          </li>
        ))}
        {/* Static Links */}
        {[
          { label: "About", href: "/about-us" },
          { label: "Projects", href: "/projects" },
          { label: "Products", href: "/products" },
          { label: "Insights", href: "/insights" },
          { label: "Careers", href: "/career" },
        ].map(({ label, href }) => (
          <li key={label} className="hover:text-blue-600 cursor-pointer">
            <Link to={href} onClick={closeDropdown}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search and Menu Icons */}
      <div className="hidden md:flex">
      <Link to="https://wa.link/e9zkud">
      <Button>
          <PhoneOutlined/>+91 7602196232
        </Button>
      </Link>
      </div>
      <div className="flex md:hidden">
        <Button icon={<MenuOutlined />} type="text" onClick={showDrawer} />
      </div>

      {/* Drawer for Mobile View */}
      <DrawerEl isDrawerVisible={isDrawerVisible} closeDrawer={closeDrawer} />
    </nav>
  );
};

export default NavbarEl;
