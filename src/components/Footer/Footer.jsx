import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import dishIcon from "../../assets/icons/dish01.svg";
import leafIcon from "../../assets/icons/dish02.svg";
import chefIcon from "../../assets/icons/chef.svg";
import facebookIcon from "../../assets/icons/logomark.svg";
import youtubeIcon from "../../assets/icons/you-tube-logomark.svg";
import instagramIcon from "../../assets/icons/instagram-logomark.svg";
import { ourMenuLinks, feastOfZaikhaaLinks, slugify } from "../../data/menuData";

const features = [
  {
    icon: dishIcon,
    title: "Authentic Dishes",
    text: "Traditional recipes crafted with rich spices and authentic taste.",
  },
  {
    icon: leafIcon,
    title: "Fresh Ingredients",
    text: "Freshly prepared dishes made with carefully selected ingredients.",
  },
  {
    icon: chefIcon,
    title: "Expert Chefs",
    text: "Prepared with culinary skill, care, and attention to detail.",
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

/**
 * The band that sits above the footer changes per page in the design:
 * the About page supplies its own franchise card, Contact uses a white card,
 * and every other page uses the orange band.
 */
function useFooterBand(pathname) {
  if (pathname.startsWith("/about")) return "none";
  if (pathname.startsWith("/contact")) return "light";
  return "solid";
}

export default function Footer() {
  const { pathname } = useLocation();
  const band = useFooterBand(pathname);

  return (
    <div className={styles.wrap}>
      {band !== "none" && (
        <div className={styles.featuresBand}>
          <div
            className={
              band === "light"
                ? `${styles.featuresInner} ${styles.featuresLight}`
                : styles.featuresInner
            }
          >
            {features.map((f) => (
              <div className={styles.feature} key={f.title}>
                <div className={styles.featureIcon}>
                  <img src={f.icon} alt="" />
                </div>
                <p className={styles.featureTitle}>{f.title}</p>
                <p className={styles.featureText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className={band === "none" ? `${styles.footer} ${styles.footerFlush}` : styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.brandCol}>
              <p className={styles.brandName}>Zaikhaa</p>
              <p className={styles.brandText}>
                Savour authentic flavours and aromatic spices, crafted with passion for an
                unforgettable dining experience at Zaikhaa.
              </p>

              <div className={styles.hoursCol}>
                <p className={styles.colHeading}>Our Working Hours</p>
                <p className={styles.hoursText}>Sun - Mon&nbsp;&nbsp;9:00 AM - 11:00 PM</p>
              </div>

              <div className={styles.socialCol}>
                <p className={styles.colHeading}>Follow us On</p>
                <div className={styles.socialRow}>
                  <a href="#" aria-label="Facebook" className={styles.socialBtn}>
                    <img src={facebookIcon} alt="" />
                  </a>
                  <a href="#" aria-label="YouTube" className={styles.socialBtn}>
                    <img src={youtubeIcon} alt="" />
                  </a>
                  <a href="#" aria-label="Instagram" className={styles.socialBtn}>
                    <img src={instagramIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.linksRow}>
              <div className={styles.linksCol}>
                <p className={styles.colHeading}>Our Menu</p>
                <ul>
                  {ourMenuLinks.map((label) => (
                    <li key={label}>
                      <Link to={`/menu/${slugify(label)}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linksCol}>
                <p className={styles.colHeading}>Feast Of Zaikhaa</p>
                <ul>
                  {feastOfZaikhaaLinks.map((label) => (
                    <li key={label}>
                      <Link to={`/menu/${slugify(label)}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linksCol}>
                <p className={styles.colHeading}>Quick Links</p>
                <ul>
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.watermark} aria-hidden="true">
          Zaikhaa
        </p>
      </footer>
    </div>
  );
}
