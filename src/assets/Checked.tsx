export default function CheckedRed({ width, height }: TChecked) {
  return (
    <svg
      width={`${width || "28"}`}
      height={`${height || "27"}`}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.53125"
        y="2.0293"
        width="22.0588"
        height="22.0588"
        fill="black"
      />
      <path
        d="M11.9421 19.6764L22.3097 9.30877L20.2509 7.24994L11.9421 15.5588L7.75092 11.3676L5.6921 13.4264L11.9421 19.6764ZM3.7068 26.7352C2.89798 26.7352 2.20582 26.4475 1.63033 25.872C1.05484 25.2965 0.766605 24.6039 0.765625 23.7941V3.20582C0.765625 2.397 1.05386 1.70484 1.63033 1.12935C2.2068 0.553864 2.89896 0.265629 3.7068 0.264648H24.295C25.1039 0.264648 25.7965 0.552884 26.373 1.12935C26.9494 1.70582 27.2372 2.39798 27.2362 3.20582V23.7941C27.2362 24.6029 26.9485 25.2955 26.373 25.872C25.7975 26.4485 25.1048 26.7362 24.295 26.7352H3.7068Z"
        fill="url(#paint0_linear_2888_373)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2888_373"
          x1="14.0009"
          y1="-1.20594"
          x2="14.0009"
          y2="26.7352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE054" />
          <stop offset="1" stopColor="#C8A049" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type TChecked = {
  width?: number;
  height?: number;
};
