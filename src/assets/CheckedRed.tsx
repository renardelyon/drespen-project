export default function Checked({ width, height }: TChecked) {
  return (
    <svg
      width={`${width || "28"}`}
      height={`${height || "27"}`}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58333 14.9167L12.6667 22ZM3.33333 30C2.41667 30 1.63222 29.6739 0.98 29.0217C0.327778 28.3694 0.00111111 27.5844 0 26.6667V3.33333C0 2.41667 0.326667 1.63222 0.98 0.98C1.63333 0.327778 2.41778 0.00111111 3.33333 0H26.6667C27.5833 0 28.3683 0.326667 29.0217 0.98C29.675 1.63333 30.0011 2.41778 30 3.33333V26.6667C30 27.5833 29.6739 28.3683 29.0217 29.0217C28.3694 29.675 27.5844 30.0011 26.6667 30H3.33333Z"
        fill="url(#paint0_linear_2843_660)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2843_660"
          x1="15"
          y1="-1.66667"
          x2="15"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8F8F" />
          <stop offset="1" stopColor="#FF5146" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type TChecked = {
  width?: number;
  height?: number;
};
