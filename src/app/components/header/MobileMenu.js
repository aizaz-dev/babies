'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import './MobileMenu.scss';

const MobileMenu = ({ onClose }) => {
  // Adjusting the state to handle both main and submenu indices
  const [openMenu, setOpenMenu] = useState({ main: null, sub: null });

  const handleMenuClick = (index) => {
    if (openMenu.main === index) {
      setOpenMenu({ ...openMenu, main: null }); // Close the menu if it's already open
    } else {
      setOpenMenu({ main: index, sub: null }); // Open the new menu and reset any open submenu
    }
  };

  const handleSubmenuClick = (mainIndex, subIndex) => {
    // Check if the clicked submenu is already open
    if (openMenu.main === mainIndex && openMenu.sub === subIndex) {
      setOpenMenu({ ...openMenu, sub: null }); // Close the submenu
    } else {
      setOpenMenu({ main: mainIndex, sub: subIndex }); // Open the new submenu
    }
  };

  const handleMenuItemClick = () => {
    setOpenMenu({ main: null, sub: null }); // Close all menus
    onClose(); // Call the onClose function passed as a prop
  };

  const menuItems = [
    // Your menuItems array
    {
        title: "SERVICES",
        link: "/",
        subItems: [
          { title: "Newborn Photography", link: "/services/newborn-photography" },
          { title: "Maternity", link: "/services/long-island-maternity-photographer" },
          { title: "Cake Smash/ Birthday", link: "/services/long-island-cake-smash-1-year-photos" },
          { title: "Family Photography", link: "/services/long-island-family-photography" },
          { title: "6 Month Baby Photos", link: "/services/6-month-baby-photos" },
          {
            title: "Other Services",
            link: "/",
            subItems: [
              { title: "Chrismis Photography", link: "/services/christmas-photography" },
              { title: "Engagement", link: "/services/engagement" },
              { title: "Milestone Session", link: "/services/milestone-session" },
              { title: "Sweet 16 Portraits", link: "/services/sweet-16-portraits" },
              { title: "Valentines Day Photography", link: "/services/valentines-day-photography" },
              { title: "Easter Photography", link: "/services/easter-photography" },
              { title: "Fall Family Photography", link: "/services/fall-family-photography" },
              { title: "Spring Family Photography", link: "/services/spring-family-photography" },
              { title: "Summer Family Photography", link: "/services/summer-family-photography" },
              { title: "Beach Famuly Photography", link: "/services/beach-family-photography" },
              { title: "Bussiness and Corporate Shorts", link: "/services/bussiness-corporate-shots" },
              { title: "Mini/Holiday Session", link: "/services/mini-holiday-session" },
              { title: "Birthday Photography", link: "/services/birthday-party-photography" },
              { title: "Event Photography Long Island", link: "/services/mini-holiday-session" },
              { title: "Children's Birthday Party", link: "/services/children-birthday-photography" },






            ],
          },
        ],
      },
      {
        title: "PORTFOLIO",
        link: "#",
        subItems: [
          { title: "New Born Portraits", link: "/newborns-portraits" },
          { title: "Maternity Photography", link: "/portfolio/maternity" },
          { title: "Family Photography", link: "/portfolio/family" },
          { title: "Cake Smash Photos", link: "/portfolio/cake-smash" },
          { title: "Engagement Photography", link: "/portfolio/engagement" },

        ],
      },
      { title: "INVESTMENT", link: "/investment" },
      { title: "ABOUT", link: "/about" },
      { title: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="mobile-menu">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            {item.subItems ? (
              <div className="menu-title-container" onClick={() => handleMenuClick(index)}>
                <h1 className="menu-title">{item.title}</h1>
                {openMenu.main === index ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}
              </div>
            ) : (
              <Link href={item.link} passHref>
                <h1 className="menu-title clickable" onClick={handleMenuItemClick}>
                  {item.title}
                </h1>
              </Link>
            )}
            {openMenu.main === index && item.subItems && (
              <ul className="submenu-list">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    {subItem.subItems ? (
                      <div className='other' onClick={() => handleSubmenuClick(index, subIndex)}>
                        <h1 >{subItem.title}</h1>
                        {openMenu.sub === subIndex ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}
                      </div>
                    ) : (
                      <Link href={subItem.link} passHref>
                        <h1 onClick={handleMenuItemClick}>{subItem.title}</h1>
                      </Link>
                    )}
                    {openMenu.sub === subIndex && subItem.subItems && (
                      <ul className="sub-submenu-list">
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex} className="sub-submenu-item">
                            <Link   href={subSubItem.link} passHref>
                              <h1 onClick={handleMenuItemClick}>{subSubItem.title}</h1>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;