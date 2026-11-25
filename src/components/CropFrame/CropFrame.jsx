import styles from "./CropFrame.module.css";

/**
 * A fixed-size window onto an oversized, offset image — the same crop Figma
 * applies to a photo placed inside a frame. The source photos have generous
 * margins, so without this the dish renders far too small inside its slot.
 *
 * All image values are percentages of the frame, straight from the design.
 */
export default function CropFrame({
  src,
  alt = "",
  width,
  height,
  imgTop,
  imgLeft,
  imgWidth,
  imgHeight,
  shadow,
  flipped,
  className,
  style,
}) {
  return (
    <div
      className={className ? `${styles.frame} ${className}` : styles.frame}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        filter: shadow ? `drop-shadow(${shadow})` : undefined,
        transform: flipped ? "rotate(180deg)" : undefined,
        ...style,
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
