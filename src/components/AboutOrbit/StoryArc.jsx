/**
 * "Zaikhaa Story" curved along the top of a circle, as in the design.
 * Figma exports text-on-a-path as a flattened image with a backdrop, so this is
 * drawn as real text on an SVG path instead — it stays crisp and selectable.
 */
export default function StoryArc({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 401 401"
      width="401"
      height="401"
      fill="none"
      role="img"
      aria-label="Zaikhaa Story"
    >
      <defs>
        <path id="zaikhaa-story-arc" d="M 18,200 A 182,182 0 0 1 382,200" />
        <linearGradient id="zaikhaa-story-fill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff7930" />
          <stop offset="100%" stopColor="#f09142" />
        </linearGradient>
      </defs>
      <text
        fill="url(#zaikhaa-story-fill)"
        fontFamily="'Playfair Display', serif"
        fontSize="60"
        fontWeight="600"
        letterSpacing="1"
      >
        <textPath href="#zaikhaa-story-arc" startOffset="50%" textAnchor="middle">
          Zaikhaa Story
        </textPath>
      </text>
    </svg>
  );
}
