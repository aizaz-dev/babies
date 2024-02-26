'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import data from '@/app/services/array';
import './Header.scss';
import {
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaAngleDown,
  FaAngleRight,
  FaBars,
} from 'react-icons/fa';
import Link from 'next/link';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component

const Header = () => {
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [otherServicesDropdownVisible, setOtherServicesDropdownVisible] =
    useState(false);
  const [portfolioDropdownVisible, setPortfolioDropdownVisible] =
    useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const mobileMenuRef = useRef(null);

  const handleServicesHover = () => {
    setServicesDropdownVisible(true);
  };

  const handleServicesLeave = () => {
    setServicesDropdownVisible(false);
  };

  const handleOtherServicesHover = () => {
    setOtherServicesDropdownVisible(true);
  };

  const handleOtherServicesLeave = () => {
    setOtherServicesDropdownVisible(false);
  };

  const handlePortfolioHover = () => {
    setPortfolioDropdownVisible(true);
  };

  const handlePortfolioLeave = () => {
    setPortfolioDropdownVisible(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prevState) => !prevState); // Toggle mobile menu visibility
  };
  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false); // Close the mobile menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="headercontainer">
      <div className="headerchild">
        <div className="leftnav">
          <ul>
            <li>
              <Link
                href="#"
                onMouseEnter={handleServicesHover}
                onMouseLeave={handleServicesLeave}
              >
                Services <FaAngleDown />
                {servicesDropdownVisible && (
                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <Link href="/services/newborn-photography">Newborn Photography</Link>
                        <Link href="/services/long-island-maternity-photographer">Maternity</Link>
                        <Link href="/services/long-island-cake-smash-1-year-photos">Cake Smash/ Birthday</Link>
                        <Link href="/services/long-island-family-photography">Family Photography</Link>
                        <Link href="/services/6-month-baby-photos">6 Month Baby Photos </Link>
                        <li>
                          <Link
                            href="#"
                            onMouseEnter={handleOtherServicesHover}
                            onMouseLeave={handleOtherServicesLeave}
                          >
                            Other Services <FaAngleRight />
                            {otherServicesDropdownVisible && (
                              <div className="sub-dropdown-content">
                                <ul>

                               {data.map((item,index)=>{
                                 return(
                                   <li key={index}> 
                                    <Link href={`/services/${item.slug}`}>
                                    
                                    {item.title}
                                    </Link>
                                    </li>
                                   )
                                  })}
                                  </ul>
                              </div>
                            )}
                          </Link>
                        </li>
                      </li>
                    </ul>
                  </div>
                )}
              </Link>
            </li>
            <li
              onMouseEnter={handlePortfolioHover}
              onMouseLeave={handlePortfolioLeave}
            >
              <Link href="#">
                Portfolio <FaAngleDown />
              </Link>
              {portfolioDropdownVisible && (
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link href="/newborns-portraits">Newborns Portraits</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/maternity">Maternity Photography</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/family">Family Portraits</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/cake-smash">Cake Smash Photos</Link>
                    </li>
                    <li>
                      <Link href="/portfolio/engagement">Engagement Photography</Link>
                    </li>
                    {/* Add more portfolio items as needed */}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/investment/">Investment</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
        <div className="centerlogo">
          <Image src="/logo.webp" alt="Logo" width={120} height={100} />
        </div></Link>
        <div className="mobilemenu" onClick={handleMobileMenuToggle}>
          <FaBars /> MENU
        </div>
        {mobileMenuOpen && (
          <div ref={mobileMenuRef}>
            <MobileMenu closeMenu={handleCloseMobileMenu}/>
          </div>
        )}
        <div className="rightsocial">
          <ul>
            <li>
              <Link className="contact" href="#">
                <span>
                  <FaPhoneAlt />
                </span>
                516-453-9331
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
