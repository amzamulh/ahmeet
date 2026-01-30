export const AhLogo = () => {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-full h-full"}
      aria-hidden="true"
    >
      {/* Background Chat Bubble Shadow/Layer */}
      <path
        d="M14 41L8 46V14C8 10.6863 10.6863 8 14 8H40C43.3137 8 46 10.6863 46 14V35C46 38.3137 43.3137 41 40 41H14Z"
        fill="currentColor"
        className="text-[var(--color-secondary)] opacity-20"
      />

      {/* Main Message Bubble */}
      <path
        d="M4 10C4 7.79086 5.79086 6 8 6H34C36.2091 6 38 7.79086 38 10V30C38 32.2091 36.2091 34 34 34H14L4 42V10Z"
        fill="currentColor"
        className="text-[var(--color-primary)]"
      />

      {/* Video Camera Lens Icon inside bubble */}
      <path
        d="M14 16C14 14.8954 14.8954 14 16 14H24C25.1046 14 26 14.8954 26 16V24C26 25.1046 25.1046 26 24 26H16C14.8954 26 14 25.1046 14 24V16Z"
        fill="white"
      />
      <path d="M28 17.5L32 15V25L28 22.5V17.5Z" fill="white" />

      {/* Dynamic Signal/Voice Bars */}
      <rect
        x="12"
        y="30"
        width="3"
        height="3"
        rx="1.5"
        className="fill-white/50"
      />
      <rect
        x="17"
        y="30"
        width="3"
        height="3"
        rx="1.5"
        className="fill-white/50"
      />
      <rect
        x="22"
        y="30"
        width="3"
        height="3"
        rx="1.5"
        className="fill-white/50"
      />
    </svg>
  );
};
