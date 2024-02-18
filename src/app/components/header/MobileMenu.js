import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './MobileMenu.scss';

const MobileMenu = ({ closeMenu }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="mobile-menu-container">
      <div className="mobile-menu">
        <ul>
          <li onClick={() => handleMenuClick('services')}>
            <span>Services</span>
            {activeMenu === 'services' && (
              <div className="sub-menu">
                <ul>
                  <li onClick={closeMenu}><Link href="#">Newborn Photography</Link></li>
                  <li onClick={closeMenu}><Link href="#">Maternity</Link></li>
                  <li onClick={closeMenu}><Link href="#">Cake Smash/ Birthday</Link></li>
                  <li onClick={closeMenu}><Link href="#">Family Photography</Link></li>
                  <li onClick={closeMenu}><Link href="#">6 Month Baby Photos</Link></li>
                  {/* Add more service links */}
                </ul>
              </div>
            )}
          </li>
          <li onClick={() => handleMenuClick('portfolio')}>
            <span>Portfolio</span>
            {activeMenu === 'portfolio' && (
              <div className="sub-menu">
                <ul>
                  <li onClick={closeMenu}><Link href="#">Newborns Portraits</Link></li>
                  <li onClick={closeMenu}><Link href="#">Maternity Photography</Link></li>
                  <li onClick={closeMenu}><Link href="#">Family Portraits</Link></li>
                  <li onClick={closeMenu}><Link href="#">Cake Smash Photos</Link></li>
                  <li onClick={closeMenu}><Link href="#">Engagement Photography</Link></li>
                  {/* Add more portfolio links */}
                </ul>
              </div>
            )}
          </li>
          <li onClick={closeMenu}><Link href="#">Investment</Link></li>
          <li onClick={closeMenu}><Link href="#">About</Link></li>
          <li onClick={closeMenu}><Link href="#">Contact</Link></li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
