import styles from "./HeroWheel.module.css";

import ring from "../../assets/hero/ring.svg";
import arcTop from "../../assets/hero/arc-top.svg";
import arcTopRight from "../../assets/hero/arc-top-right.svg";
import arcTopLeft from "../../assets/hero/arc-top-left.svg";
import arcRight from "../../assets/hero/arc-right.svg";
import arcLeft from "../../assets/hero/arc-left.svg";
import arcBottom from "../../assets/hero/arc-bottom.svg";

import plate7 from "../../assets/hero/plate-7.png";
import plate1 from "../../assets/hero/plate-1.png";
import plate3 from "../../assets/hero/plate-3.png";
import plate10 from "../../assets/hero/plate-10.png";
import plate8 from "../../assets/hero/plate-8.png";
import plate11 from "../../assets/hero/plate-11.png";

/**
 * A plated dish, reproducing the exact crop Figma applies to the source photo.
 * The wrapper is the visible window; the <img> is oversized and offset inside it.
 * The photos carry the orange backdrop that, tiled together, forms the wheel.
 */
function Plate({ src, alt, width, height, imgTop, imgLeft, imgWidth, imgHeight, flipped }) {
  return (
    <div
      className={styles.plate}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: flipped ? "rotate(180deg)" : undefined,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          top: `${imgTop}%`,
          left: `${imgLeft}%`,
          width: `${imgWidth}%`,
          height: `${imgHeight}%`,
        }}
      />
    </div>
  );
}

export default function HeroWheel() {
  return (
    <div className={styles.viewport}>
      <div className={styles.stage}>
        <div className={styles.arcRight}>
          <img src={arcRight} alt="" />
        </div>
        <div className={styles.arcTopRight}>
          <img src={arcTopRight} alt="" />
        </div>
        <div className={styles.arcTopLeft}>
          <img src={arcTopLeft} alt="" />
        </div>
        <div className={styles.arcBottom}>
          <img src={arcBottom} alt="" />
        </div>
        <div className={styles.arcLeft}>
          <img src={arcLeft} alt="" />
        </div>
        <div className={styles.arcTop}>
          <img src={arcTop} alt="" />
        </div>

        <img src={ring} alt="" className={styles.ring} />

        <div className={styles.plates}>
          <div className={styles.plateRowTop}>
            <Plate
              src={plate7}
              alt="Pepper Chicken Fry"
              width={154.584}
              height={146.993}
              imgTop={-5.92}
              imgLeft={-49.84}
              imgWidth={193.93}
              imgHeight={113.83}
            />
            <Plate
              src={plate1}
              alt="Madurai Kozhi Mzhagu Curry"
              width={239.438}
              height={245.054}
              imgTop={-7.44}
              imgLeft={-54.46}
              imgWidth={211.9}
              imgHeight={115.56}
            />
            <Plate
              src={plate3}
              alt="Mutton Biriyani"
              width={154.584}
              height={155.338}
              imgTop={-3.34}
              imgLeft={-51.51}
              imgWidth={200.45}
              imgHeight={111.33}
            />
          </div>

          <div className={styles.plateRowBottom}>
            <Plate
              src={plate10}
              alt=""
              width={154.584}
              height={155.338}
              imgTop={-3.34}
              imgLeft={-51.51}
              imgWidth={200.45}
              imgHeight={111.33}
              flipped
            />
            <Plate
              src={plate8}
              alt=""
              width={239.438}
              height={245.054}
              imgTop={-13.46}
              imgLeft={-52.4}
              imgWidth={211.9}
              imgHeight={115.56}
            />
            <Plate
              src={plate11}
              alt=""
              width={154.584}
              height={147.95}
              imgTop={-3.03}
              imgLeft={-38.03}
              imgWidth={176.36}
              imgHeight={102.85}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
