export const Note = ({ children, ...props }: any) => {
  return (
    <blockquote {...props} className="post-note post-note-quote">
      <div className="min-w-0">{children}</div>
    </blockquote>
  );
};
