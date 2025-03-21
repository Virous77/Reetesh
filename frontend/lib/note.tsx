export const Note = ({ children, ...props }: any) => {
  return (
    <div
      className="bg-accent rounded border not-italic"
      style={{ borderLeftColor: '#e21d49', borderLeftWidth: '4px' }}
    >
      <span {...props} className="b-set flex items-start gap-2 p-2">
        {children}
      </span>
    </div>
  );
};
