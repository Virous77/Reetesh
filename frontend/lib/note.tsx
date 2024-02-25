export const Note = ({ children, ...props }: any) => {
  return (
    <div className="b-set mt-6 block  rounded  border bg-transparent not-italic [&>*]:text-muted-foreground">
      <span {...props} className="p-2 text-sm">
        <p style={{ marginBottom: '-20px' }} className="text-sm font-[600]">
          Good to know :
        </p>
        {children}
      </span>
    </div>
  );
};
