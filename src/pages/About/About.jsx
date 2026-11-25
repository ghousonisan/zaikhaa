import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./About.module.css";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";
import SpicesArc from "../../components/AboutOrbit/SpicesArc";
import CropFrame from "../../components/CropFrame/CropFrame";

import dishIcon from "../../assets/icons/dish2.svg";
import chefIcon from "../../assets/icons/chef.svg";
import checkmarkIcon from "../../assets/icons/checkmark-badge01.svg";
import userStarIcon from "../../assets/icons/user-star01.svg";
import usersRound from "../../assets/about/users-round.svg";

import brandStory from "../../assets/about/brand-story.png";
import journey1 from "../../assets/about/journey-1.png";
import journey2 from "../../assets/about/journey-2.png";
import journey3 from "../../assets/about/journey-3.png";
import journey4 from "../../assets/about/journey-4.png";

import philosophyPlate from "../../assets/about/philosophy-plate.png";
import philosophyRing from "../../assets/about/philosophy-ring.svg";
import spiceChillie from "../../assets/about/spice-chillie.png";
import spiceTurmeric from "../../assets/about/spice-turmeric.png";
import spicePepper from "../../assets/about/spice-pepper.png";

import product1 from "../../assets/images/frame85.png";
import product2 from "../../assets/images/frame86.png";
import product3 from "../../assets/images/frame87.png";

const whyChooseUs = [
  { icon: dishIcon, title: "Authentic Dishes", text: "Traditional recipes crafted with rich spices and authentic taste." },
  { icon: chefIcon, title: "Expert Chefs", text: "Prepared with culinary skill, care, and attention to detail." },
  { icon: checkmarkIcon, title: "Quality You Can Trust", text: "A commitment to food quality and consistent preparation." },
  { icon: userStarIcon, title: "Customer Satisfaction", text: "Focused on friendly service and making every guest feel welcome." },
];

const journey = [
  { step: "1", title: "The Beginning", img: journey1 },
  { step: "2", title: "Building Our Identity", img: journey2 },
  { step: "3", title: "Growing with Our Guests", img: journey3 },
  { step: "4", title: "Looking Ahead", img: journey4 },
];

const spices = [
  { src: spiceChillie, left: -141.45, top: 130.39, width: 67.218, height: 66.334,
    crop: { top: -10.67, left: -55.29, width: 214.53, height: 121.33 } },
  { src: spiceTurmeric, left: -88.56, top: 35.62, width: 68.987, height: 68.102,
    crop: { top: -9.09, left: -55.15, width: 209.03, height: 118.18 } },
  { src: spicePepper, left: 17.76, top: -0.14, width: 70.756, height: 70.756,
    crop: { top: -7.5, left: -52.53, width: 203.8, height: 113.75 } },
];

const specialsFilters = ["From the North", "From the South", "From the East", "From the West", "Charu Vagai"];

const specialsProducts = [
  { img: product1, category: "Arabian", name: "Chicken Mandi Biriyani", price: "₹350", isNew: false },
  { img: product2, category: "Arabian", name: "Chicken Mandi Biriyani", price: "₹350", isNew: true },
  { img: product3, category: "Arabian", name: "Chicken Mandi Biriyani", price: "₹350", isNew: true },
];

export default function About() {
  const [activeFilter, setActiveFilter] = useState(specialsFilters[0]);

  return (
    <div className={styles.about}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>About Zaikhaa</span>
          <h1 className={styles.heroTitle}>Where Every Flavour Tells a Story</h1>
          <p className={styles.heroText}>
            we bring tradition, authentic flavours, and a passion for great food together to create
            memorable dining experiences.
          </p>
        </div>

        <div className={styles.heroOrbit}>
          <AboutOrbit />
        </div>
      </section>

      {/* ---------- What makes Zaikhaas special ---------- */}
      <section className={styles.whyWrap}>
        <div className={styles.whyCard}>
          <h2 className={styles.sectionTitle}>
            What Makes <span className={styles.highlight}>Zaikhaas</span> Special
          </h2>
          <p className={styles.sectionText}>
            Experience rich, traditional flavours crafted to delight your taste buds.
          </p>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((w) => (
              <div className={styles.whyItem} key={w.title}>
                <span className={styles.whyIcon}>
                  <img src={w.icon} alt="" />
                </span>
                <p className={styles.whyTitle}>{w.title}</p>
                <p className={styles.whyText}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Brand story ---------- */}
      <section className={styles.brandStory}>
        <div className={styles.brandStoryInner}>
          <CropFrame
            src={brandStory}
            alt="Zaikhaa signature dish"
            width={357.246}
            height={365.625}
            imgTop={-7.44}
            imgLeft={-54.46}
            imgWidth={211.9}
            imgHeight={115.56}
            shadow="-13.428px -3.465px 11.26px rgba(0, 0, 0, 0.25)"
          />

          <div className={styles.brandStoryCopy}>
            <div className={styles.brandStoryHead}>
              <h2 className={styles.sectionTitleLeft}>
                <span className={styles.highlight}>Brand Story </span>
                — The Heart Behind Zaikhaa
              </h2>
              <p className={styles.brandStoryLead}>
                Savour authentic flavours and aromatic spices, crafted with passion for an
                unforgettable dining experience at Zaikhaa.
              </p>
            </div>

            <div className={styles.brandStoryBody}>
              <h3 className={styles.brandStorySubhead}>A Passion for Food, A Love for Tradition</h3>
              <p>
                Zaikhaa was built around a simple belief: great food creates great memories. Inspired
                by rich culinary traditions and the joy of sharing a meal, we aim to bring flavour,
                comfort, and togetherness to every table.
              </p>
              <p>
                From aromatic biryanis to flavourful curries and freshly prepared breads, every dish
                reflects our passion for good food and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Journey ---------- */}
      <section className={styles.journey}>
        <div className={styles.journeyHead}>
          <div className={styles.journeyHeadText}>
            <h2 className={styles.sectionTitleLeft}>Growing Through Every Experience</h2>
            <p className={styles.sectionText}>
              Every step of our journey is shaped by our love for food and the people who make it
              meaningful.
            </p>
          </div>
          <div className={styles.journeyStat}>
            <p className={styles.statNum}>500+</p>
            <p className={styles.statLabel}>Happy Customers</p>
          </div>
        </div>

        <div className={styles.journeyGrid}>
          {journey.map((j) => (
            <article className={styles.journeyCard} key={j.title}>
              <div className={styles.journeyInner}>
                <img src={j.img} alt="" className={styles.journeyImg} />
                <span className={styles.journeyFade} />
                <div className={styles.journeyCaption}>
                  <span className={styles.journeyStep}>{j.step}</span>
                  <p className={styles.journeyTitle}>{j.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Food philosophy ---------- */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyHead}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}>Our Food Philosophy — </span>
            From Kitchen to Table
          </h2>
          <p className={styles.sectionText}>Every Dish Has a Little More to It</p>
        </div>

        <div className={styles.philosophyBody}>
          <div className={styles.philosophyOrbit}>
            <img src={philosophyRing} alt="" className={styles.philosophyRing} />
            <SpicesArc className={styles.philosophyArc} />

            <div className={styles.philosophyRotator}>
              {spices.map((s, i) => (
                <div
                  className={styles.spiceSlot}
                  key={i}
                  style={{
                    left: `calc(50% + ${s.left}px)`,
                    top: `${s.top}px`,
                    width: `${s.width}px`,
                    height: `${s.height}px`,
                  }}
                >
                  <CropFrame
                    src={s.src}
                    width={s.width}
                    height={s.height}
                    imgTop={s.crop.top}
                    imgLeft={s.crop.left}
                    imgWidth={s.crop.width}
                    imgHeight={s.crop.height}
                    className={styles.spice}
                  />
                </div>
              ))}

              <div className={styles.philosophyPlateSlot}>
                <CropFrame
                  src={philosophyPlate}
                  alt="A plate of Zaikhaa spices"
                  width={242}
                  height={240}
                  imgTop={-4.74}
                  imgLeft={-46.5}
                  imgWidth={193.47}
                  imgHeight={109}
                  shadow="0px 4px 5.3px rgba(0, 0, 0, 0.28)"
                  className={styles.philosophyPlate}
                />
              </div>
            </div>
          </div>

          <div className={styles.philosophyCard}>
            <h3 className={styles.philosophyCardTitle}>Select with Care</h3>
            <p className={styles.philosophyCardText}>
              Every great dish starts with quality ingredients. We carefully bring together fresh
              produce, aromatic spices, and rich flavours to create food worth savouring.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Special dishes ---------- */}
      <section className={styles.specials}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>
            Explore <span className={styles.highlight}>Zaikhaas</span> Special Dishes
          </h2>
          <p className={styles.sectionText}>Signature recipes from every corner of India and beyond.</p>
        </div>

        <div className={styles.filters}>
          {specialsFilters.map((f) => (
            <button
              key={f}
              className={activeFilter === f ? `${styles.filterBtn} ${styles.filterActive}` : styles.filterBtn}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {specialsProducts.map((p, i) => (
            <article className={styles.productCard} key={i}>
              <div className={styles.productImg}>
                <img src={p.img} alt={p.name} />
                {p.isNew && <span className={styles.newBadge}>New</span>}
              </div>
              <p className={styles.productCategory}>{p.category}</p>
              <p className={styles.productName}>{p.name}</p>
              <p className={styles.productPrice}>{p.price}</p>
            </article>
          ))}
        </div>

        <Link to="/menu/starters" className={styles.secondaryBtn}>
          Explore All Menus
        </Link>
      </section>

      {/* ---------- Franchise CTA ---------- */}
      <section className={styles.ctaWrap}>
        <div className={styles.ctaCard}>
          <h2 className={styles.sectionTitle}>
            Bring the <span className={styles.highlight}>Zaikhaa Experience</span> to Your City
          </h2>
          <p className={styles.ctaText}>
            Partner with Zaikhaa and turn your passion for authentic flavours into a thriving
            restaurant business.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            <img src={usersRound} alt="" />
            Franchise Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
