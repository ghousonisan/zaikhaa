import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Home.module.css";
import HeroWheel from "../../components/HeroWheel/HeroWheel";
import CropFrame from "../../components/CropFrame/CropFrame";

import dishIcon from "../../assets/icons/dish01.svg";
import dishIcon2 from "../../assets/icons/dish2.svg";
import chefIcon from "../../assets/icons/chef.svg";
import checkmarkIcon from "../../assets/icons/checkmark-badge01.svg";
import userStarIcon from "../../assets/icons/user-star01.svg";
import starIcon from "../../assets/icons/star.svg";
import glowCircle from "../../assets/categories/glow.svg";

import catArabian from "../../assets/categories/arabian.png";
import catAppetizers from "../../assets/categories/appetizers.png";
import catInternational from "../../assets/categories/international.png";
import catIndian from "../../assets/categories/indian.png";
import catKids from "../../assets/categories/kids.png";
import catSeafood from "../../assets/categories/seafood.png";
import catDesserts from "../../assets/categories/desserts.png";

import product1 from "../../assets/images/frame85.png";
import product2 from "../../assets/images/frame86.png";
import product3 from "../../assets/images/frame87.png";

import decorTopRight from "../../assets/images/gemini-generated-image-ukei9-tukei9-tukei-photoroom12.png";
import decorBottomLeft from "../../assets/images/gemini-generated-image-ukei9-tukei9-tukei-photoroom13.png";

import biriyaniMutton from "../../assets/biriyani/mutton.png";
import biriyaniChicken from "../../assets/biriyani/chicken.png";
import biriyaniEgg from "../../assets/biriyani/egg.png";

import { slugify } from "../../data/menuData";

const tickerWords = ["Flavours Together", "Celebrates Taste", "Serves Happiness", "Elevates Dining"];

const stats = [
  { value: "100+", label: "Authentic Dishes" },
  { value: "50+", label: "International Dishes" },
  { value: "4.8%", label: "Customer Ratings" },
  { value: "50+", label: "Authentic Dishes" },
];

// each dish photo gets its own crop window, exactly as framed in the design
const topCategoriesRow1 = [
  { label: "Arabian", img: catArabian, crop: { top: -14.71, left: -50.16, width: 207.64, height: 118.59 } },
  { label: "Appetizers", img: catAppetizers, crop: { top: 0.34, left: -37.58, width: 175.61, height: 100.29 } },
  { label: "International", img: catInternational, crop: { top: -10.3, left: -26.71, width: 153.45, height: 116.02 } },
  { label: "Indian", img: catIndian, crop: { top: -13.4, left: -34.25, width: 168.5, height: 127.4 } },
];

const topCategoriesRow2 = [
  {
    label: "Kids Specials",
    img: catKids,
    slug: "kids-special",
    crop: { top: -8.65, left: -55.25, width: 210.02, height: 119.94 },
  },
  {
    label: "Sea Foods",
    img: catSeafood,
    slug: "seafood-platters",
    crop: { top: -17.22, left: -67.21, width: 234.93, height: 134.18 },
  },
  {
    label: "Desserts&Beverages",
    img: catDesserts,
    slug: "desserts-beverages",
    crop: { top: -18.39, left: -70.74, width: 240.87, height: 137.56 },
  },
];

const whyChooseUs = [
  { icon: dishIcon2, title: "Authentic Dishes", text: "Traditional recipes crafted with rich spices and authentic taste." },
  { icon: chefIcon, title: "Expert Chefs", text: "Prepared with culinary skill, care, and attention to detail." },
  { icon: checkmarkIcon, title: "Quality You Can Trust", text: "A commitment to food quality and consistent preparation." },
  { icon: userStarIcon, title: "Customer Satisfaction", text: "Focused on friendly service and making every guest feel welcome." },
];

const specialsFilters = ["From the North", "From the South", "From the East", "From the West", "Charu Vagai"];

const specialsProducts = [
  { img: product1, category: "Arabian", name: "Chicken Mandi Biriyani", price: "₹350", isNew: false },
  { img: product2, category: "Arabian", name: "Chicken Mandi Biriyani", price: "₹350", isNew: true },
  { img: product3, category: "Arabian", name: "Chicken Mandi Biriyani", price: "₹350", isNew: true },
];

const biriyaniDesc =
  "Savour the rich aroma of basmati rice, tender chicken, and authentic spices, for Zaikhaa's signature biryani experience.";

const testimonials = [
  {
    text: "Person who served the food (Prasanna) is really kind and patience with the customers. Nice ambience and experience",
    name: "Vidhya",
  },
  {
    text: "It is one of the good restaurants in Trichy that I ever eat. There is also all type of Indian foods here in its best tastes. And the service is good. Mr. Presanna gives the best service in this restaurant.",
    name: "Garthiga Ravichandran",
  },
  {
    text: "Had a great experience at Zaikhaa Restaurant! The food was delicious, freshly prepared, and full of flavor. The staff was attentive and courteous.",
    name: "Ranjan Jana",
  },
  {
    text: "Food was very good. Ambience is nice and peaceful. Good place to bring for team dinner and or couple's date. King prawns and chicken kohlapuri was nice. Service as very good.",
    name: "Ashutosh Sahoo",
  },
  {
    text: "I had a wonderful experience here! The ambience was pleasant and welcoming, and the food was delicious. Special thanks to Mahadevan for his friendly and attentive service.",
    name: "Izabella G",
  },
  {
    text: "Person who served the food (Prasanna) is really kind and patience with the customers. Nice ambience and experience",
    name: "Vidhya",
  },
];

function Stars() {
  return (
    <span className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <img src={starIcon} alt="" key={i} />
      ))}
    </span>
  );
}

function CategoryItem({ label, img, slug, crop }) {
  return (
    <Link to={`/menu/${slug || slugify(label)}`} className={styles.categoryItem}>
      <span className={styles.categoryImgWrap}>
        <img src={glowCircle} alt="" className={styles.categoryGlow} />
        <CropFrame
          src={img}
          alt={label}
          width={151}
          height={147.568}
          imgTop={crop.top}
          imgLeft={crop.left}
          imgWidth={crop.width}
          imgHeight={crop.height}
          shadow="0px 3px 8.6px rgba(0, 0, 0, 0.28)"
          className={styles.categoryPhoto}
        />
      </span>
      <span className={styles.categoryLabel}>{label}</span>
    </Link>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState(specialsFilters[0]);

  return (
    <div className={styles.home}>
      {/* ---------- Hero ---------- */}
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badgeWrap}>
              <span className={styles.badgeIcon}>
                <img src={dishIcon} alt="" />
              </span>
              <span className={styles.badge}>Authentic Indian Cuisine</span>
            </div>

            <h1 className={styles.heroTitle}>
              Where Every Recipe Brings
              <span className={styles.ticker}>
                <span className={styles.tickerTrack}>
                  {[...tickerWords, tickerWords[0]].map((w, i) => (
                    <span className={styles.tickerWord} key={i}>
                      {w}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className={styles.heroText}>
              Savour authentic flavours and aromatic spices, crafted with passion for an
              unforgettable dining experience at Zaikhaa.
            </p>

            <div className={styles.heroActions}>
              <Link to="/menu/starters" className={styles.primaryBtn}>
                Explore Menu
              </Link>
              <Link to="/contact" className={styles.secondaryBtn}>
                Reserve a Table
              </Link>
            </div>
          </div>

          <div className={styles.heroWheelSlot}>
            <HeroWheel />
          </div>
        </div>

        <div className={styles.statsBar}>
          {stats.map((s, i) => (
            <div className={styles.stat} key={i}>
              <p className={styles.statNum}>{s.value}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Top categories ---------- */}
      <section className={styles.categories}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Explore Our Top Categories</h2>
          <p className={styles.sectionText}>
            Savour authentic flavours and aromatic spices, crafted with passion for an
            unforgettable dining experience at Zaikhaa.
          </p>
        </div>

        <div className={styles.categoryRows}>
          <div className={styles.categoryRow}>
            {topCategoriesRow1.map((c) => (
              <CategoryItem key={c.label} {...c} />
            ))}
          </div>
          <div className={styles.categoryRow}>
            {topCategoriesRow2.map((c) => (
              <CategoryItem key={c.label} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What makes Zaikhaas special ---------- */}
      <section className={styles.whyWrap}>
        <div className={styles.whyCard}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              What Makes <span className={styles.highlight}>Zaikhaas</span> Special
            </h2>
            <p className={styles.sectionText}>
              Experience rich, traditional flavours crafted to delight your taste buds.
            </p>
          </div>

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

      {/* ---------- Special dishes ---------- */}
      <section className={styles.specials} id="specials">
        <img src={decorTopRight} alt="" className={styles.specialsDecorTop} />
        <img src={decorBottomLeft} alt="" className={styles.specialsDecorBottom} />

        <div className={styles.specialsInner}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Explore <span className={styles.highlight}>Zaikhaas</span> Special Dishes
            </h2>
            <p className={styles.sectionText}>
              Signature recipes from every corner of India and beyond.
            </p>
          </div>

          <div className={styles.filters}>
            {specialsFilters.map((f) => (
              <button
                key={f}
                className={
                  activeFilter === f ? `${styles.filterBtn} ${styles.filterActive}` : styles.filterBtn
                }
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
        </div>
      </section>

      {/* ---------- Special biriyani ---------- */}
      <section className={styles.biriyani} id="biriyani">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>
            Explore <span className={styles.highlight}>Zaikhaas</span> Special Biriyani
          </h2>
          <p className={styles.sectionTextNarrow}>
            Discover the authentic taste that makes every biryani moment special.
          </p>
        </div>

        <div className={styles.biriyaniLayout}>
          <article className={styles.biriyaniTall}>
            <div className={styles.biriyaniCopy}>
              <h3 className={styles.biriyaniName}>Mutton Biriyani</h3>
              <p className={styles.biriyaniDesc}>{biriyaniDesc}</p>
              <span className={styles.biriyaniPrice}>₹370</span>
            </div>
            <CropFrame
              src={biriyaniMutton}
              alt="Mutton Biriyani"
              width={416}
              height={420.019}
              imgTop={-5.01}
              imgLeft={-53.06}
              imgWidth={202.49}
              imgHeight={111.94}
              shadow="11.785px -7.071px 15.674px rgba(0, 0, 0, 0.3)"
              className={styles.biriyaniTallImg}
            />
          </article>

          <div className={styles.biriyaniStack}>
            <article className={styles.biriyaniWide}>
              <div className={styles.biriyaniCopy}>
                <h3 className={styles.biriyaniNameAmber}>Chicken Biriyani</h3>
                <p className={styles.biriyaniDescAmber}>{biriyaniDesc}</p>
                <span className={styles.biriyaniPriceAmber}>₹299</span>
              </div>
              <CropFrame
                src={biriyaniChicken}
                alt="Chicken Biriyani"
                width={270}
                height={272.609}
                imgTop={-5.01}
                imgLeft={-53.06}
                imgWidth={202.49}
                imgHeight={111.94}
                shadow="7.649px -4.589px 10.173px rgba(0, 0, 0, 0.3)"
              />
            </article>

            <article className={`${styles.biriyaniWide} ${styles.biriyaniWideReverse}`}>
              <CropFrame
                src={biriyaniEgg}
                alt="Egg Biriyani"
                width={263}
                height={265.541}
                imgTop={-5.01}
                imgLeft={-53.06}
                imgWidth={202.49}
                imgHeight={111.94}
                shadow="7.45px -4.47px 9.909px rgba(0, 0, 0, 0.3)"
              />
              <div className={styles.biriyaniCopy}>
                <h3 className={styles.biriyaniNameAmber}>Egg Biriyani</h3>
                <p className={styles.biriyaniDescAmber}>{biriyaniDesc}</p>
                <span className={styles.biriyaniPriceAmber}>₹265</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className={styles.testimonials} id="reviews">
        <div className={styles.testiHead}>
          <div className={styles.testiHeadText}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.highlight}>Love Served</span> on Every Plate
            </h2>
            <p className={styles.sectionText}>
              Every review tells a story of good food, great service, and moments worth remembering.
            </p>
          </div>
          <div className={styles.testiStat}>
            <p className={styles.statNum}>500+</p>
            <p className={styles.testiStatLabel}>Google Reviews</p>
          </div>
        </div>

        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <article className={styles.testiCard} key={i}>
              <p className={styles.testiText}>{t.text}</p>
              <div className={styles.testiFooter}>
                <p className={styles.testiName}>- {t.name}</p>
                <p className={styles.testiMeta}>
                  <Stars />
                  <span>Posted on Google Review</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
