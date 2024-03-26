export const A = ({ children, ...props }: any) => {
  return (
    <a
      {...props}
      className="font-medium underline underline-offset-4"
      target="_blank"
      referrerPolicy="no-referrer"
      title="Opens in a new tab"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};
