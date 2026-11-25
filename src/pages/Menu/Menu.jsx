import { useParams, Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { menuCategories } from "../../data/menuData";
import NotFound from "../NotFound/NotFound";

import hero1 from "../../assets/images/gemini-generated-image-ukei9-tukei9-tukei-photoroom5.png";
import hero2 from "../../assets/images/gemini-generated-image-ukei9-tukei9-tukei-photoroom4.png";
import hero3 from "../../assets/images/gemini-generated-image-ukei9-tukei9-tukei-photoroom10.png";

const groupColors = ["#ffa754", "#ff8a4a", "#da8a22", "#c25e00"];

export default function Menu() {
  const { slug } = useParams();
  const category = menuCategories.find((c) => c.slug === slug);

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className={styles.menu}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.breadcrumb}>
            <Link to="/">Menu</Link> <span>/</span> <span className={styles.current}>{category.label}</span>
          </p>
          <h1 className={styles.title}>{category.title}</h1>
          <p className={styles.subtitle}>{category.subtitle}</p>
        </div>
        <div className={styles.heroImages}>
          <img src={hero1} alt="" className={styles.heroImg1} />
          <img src={hero2} alt="" className={styles.heroImg2} />
          <img src={hero3} alt="" className={styles.heroImg3} />
        </div>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.tableCard}>
          {category.groups.map((group, gi) => (
            <div className={styles.group} key={group.name}>
              <div className={styles.groupHeader} style={{ background: groupColors[gi % groupColors.length] }}>
                {group.name}
              </div>
              <ul className={styles.dishList}>
                {group.items.map((item) => (
                  <li key={item.dish} className={styles.dishRow}>
                    <span>{item.dish}</span>
                    <span className={styles.price}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
