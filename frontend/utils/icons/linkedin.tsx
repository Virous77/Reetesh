const Linkedin = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      {...props}
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.91 0 53.55A53.55 53.55 0 0 1 53.84 0C83.2 0 107.3 24.09 107.3 53.55c0 29.36-24.1 53.45-53.46 53.45zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V190h1.3c12.4-23.5 42.7-48.3 87.8-48.3 93.9 0 111.2 61.8 111.2 142.3V448z" />
    </svg>
  );
};

export default Linkedin;
