export const Note = ({ children, ...props }: any) => {
  return (
    <div className="b-set mt-6 not-italic  bg-transparent  [&>*]:text-muted-foreground border rounded block">
      <span {...props} className="text-sm p-2">
        <p style={{ marginBottom: "-20px" }} className="font-[600] text-sm">
          Good to know :
        </p>
        {children}
      </span>
    </div>
  );
};
