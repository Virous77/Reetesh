export const A = ({ children, ...props }: any) => {
  return (
    <a
      {...props}
      className="font-medium underline underline-offset-4"
      title="content link"
    >
      {children}
    </a>
  );
};
