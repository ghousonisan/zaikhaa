import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/zaikhaa-restaurant-logo11-photoroom1.png";
import arrowUp from "../../assets/icons/arrow-up01.svg";
import { ourMenuLinks, feastOfZaikhaaLinks, slugify } from "../../data/menuData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <p>&ldquo;Authentic Flavours, Unforgettable Moments — Only at Zaikhaa.&rdquo;</p>
      </div>

      <div className={styles.bar}>
        <Link to="/" className={styles.logoLink} aria-label="Zaikhaa Restaurant - home">
          <span className={styles.logoFrame}>
            <img src={logo} alt="Zaikhaa Restaurant" />
          </span>
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
          >
            About Us
          </NavLink>

          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button className={styles.dropdownTrigger} onClick={() => setMenuOpen((v) => !v)}>
              Our Menu
              <img
                src={arrowUp}
                alt=""
                className={menuOpen ? styles.arrowOpen : styles.arrow}
              />
            </button>

            {menuOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <p className={styles.dropdownHeading}>Our Menu</p>
                  <ul>
                    {ourMenuLinks.map((label) => (
                      <li key={label}>
                        <Link to={`/menu/${slugify(label)}`} onClick={() => setMenuOpen(false)}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dropdownColumn}>
                  <p className={styles.dropdownHeading}>Feast Of Zaikhaa</p>
                  <ul>
                    {feastOfZaikhaaLinks.map((label) => (
                      <li key={label}>
                        <Link to={`/menu/${slugify(label)}`} onClick={() => setMenuOpen(false)}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.ctaWrap}>
          <Link to="/contact" className={styles.cta}>
            Franchise Enquirey
          </Link>
        </div>
      </div>
    </header>
  );
}
