export const Note = ({ children, ...props }: any) => {
  return (
    <div className="rounded  border bg-accent not-italic">
      <span {...props} className="b-set flex items-start gap-2 p-2">
        {children}
      </span>
    </div>
  );
};
