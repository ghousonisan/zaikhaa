/**
 * "From Choosen Spices" curving up the left-hand side of the plate, as in the
 * design. Drawn as text on a path for the same reason as the story arc: Figma
 * only exports text-on-a-path as a flattened image with a backdrop.
 */
export default function SpicesArc({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      width="400"
      height="400"
      fill="none"
      role="img"
      aria-label="From Choosen Spices"
    >
      <defs>
        <path id="zaikhaa-spices-arc" d="M 186,359.4 A 160,160 0 0 1 86.9,86.9" />
      </defs>
      <text
        fill="#ff7930"
        fontFamily="'Outfit', sans-serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href="#zaikhaa-spices-arc" startOffset="50%" textAnchor="middle">
          From Choosen Spices
        </textPath>
      </text>
    </svg>
  );
}
