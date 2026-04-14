const Facebook = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      {...props}
    >
      <path d="M279.14 288l14.22-92.66h-88.91V127.36c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.43 0 225.36 0C141.09 0 89.09 54.42 89.09 153.07v42.27H0V288h89.09v224h107.36V288z" />
    </svg>
  );
};

export default Facebook;
