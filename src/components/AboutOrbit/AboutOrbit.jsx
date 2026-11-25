import styles from "./AboutOrbit.module.css";
import CropFrame from "../CropFrame/CropFrame";
import StoryArc from "./StoryArc";

import ring from "../../assets/about/orbit-ring.svg";
import center from "../../assets/about/orbit-center.png";
import orbit2 from "../../assets/about/orbit-2.png";
import orbit9 from "../../assets/about/orbit-9.png";
import orbit6 from "../../assets/about/orbit-6.png";
import orbit3 from "../../assets/about/orbit-3.png";
import orbit7 from "../../assets/about/orbit-7.png";
import orbit5 from "../../assets/about/orbit-5.png";
import orbit4 from "../../assets/about/orbit-4.png";
import orbit8 from "../../assets/about/orbit-8.png";

const shadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

/**
 * Dishes arranged around a ring, at Figma's exact offsets. The ring group is
 * rotated a quarter turn — that is what gives each plate its tilt — while the
 * arc label and the centre dish stay upright on top of it.
 */
const plates = [
  { src: orbit2, left: 189.597, top: 452.279, width: 193.794, height: 189.353 },
  {
    src: orbit9,
    left: 394.477,
    top: 381.691,
    width: 159.971,
    height: 161.059,
    crop: { top: -5.11, left: -48.71, width: 196.79, height: 110.58 },
    noShadow: true,
  },
  {
    src: orbit6,
    left: 21.486,
    top: 406.387,
    width: 153.083,
    height: 149.575,
    crop: { top: -7.44, left: -54.46, width: 211.9, height: 115.56 },
  },
  {
    src: orbit3,
    left: -78.207,
    top: 198.721,
    width: 152.994,
    height: 158.122,
    crop: { top: -7.5, left: -51.51, width: 200.45, height: 115.63 },
  },
  {
    src: orbit7,
    left: 14.324,
    top: -8.916,
    width: 152.994,
    height: 158.122,
    crop: { top: -7.5, left: -51.51, width: 200.45, height: 115.63 },
  },
  {
    src: orbit5,
    left: 455.418,
    top: 189.073,
    width: 169.765,
    height: 171.941,
    crop: { top: -1.08, left: -41.57, width: 184.34, height: 104.2 },
    noShadow: true,
  },
  {
    src: orbit4,
    left: 209.477,
    top: -75.368,
    width: 154.529,
    height: 154.529,
    crop: { top: -7.3, left: -51.55, width: 205.11, height: 114.48 },
  },
  {
    src: orbit8,
    left: 397.486,
    top: 10.69,
    width: 153.083,
    height: 149.575,
    crop: { top: -7.44, left: -54.46, width: 211.9, height: 115.56 },
    noShadow: true,
  },
];

export default function AboutOrbit() {
  return (
    <div className={styles.viewport}>
      <div className={styles.frame}>
        <div className={styles.rotated}>
          <div className={styles.inner}>
            <div className={styles.orbit}>
              <img src={ring} alt="" className={styles.ring} />

              {plates.map((p, i) =>
                p.crop ? (
                  <CropFrame
                    key={i}
                    src={p.src}
                    width={p.width}
                    height={p.height}
                    imgTop={p.crop.top}
                    imgLeft={p.crop.left}
                    imgWidth={p.crop.width}
                    imgHeight={p.crop.height}
                    shadow={p.noShadow ? undefined : shadow}
                    className={styles.plate}
                    style={{ left: `${p.left}px`, top: `${p.top}px` }}
                  />
                ) : (
                  <img
                    key={i}
                    src={p.src}
                    alt=""
                    className={styles.plate}
                    style={{
                      left: `${p.left}px`,
                      top: `${p.top}px`,
                      width: `${p.width}px`,
                      height: `${p.height}px`,
                      objectFit: "cover",
                      filter: `drop-shadow(${shadow})`,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <StoryArc className={styles.storyArc} />

        <div className={styles.centerSlot}>
          <CropFrame
            src={center}
            alt="Zaikhaa signature dish"
            width={292.735}
            height={291.647}
            imgTop={-5.15}
            imgLeft={-56.65}
            imgWidth={206.33}
            imgHeight={115.59}
            shadow="6.911px -2.764px 8.984px rgba(0, 0, 0, 0.25)"
            className={styles.centerPlate}
          />
        </div>
      </div>
    </div>
  );
}
