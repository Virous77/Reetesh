const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

type CommentEmailProps = {
  comment: string;
  blogId: string;
};

export const commentEmailHtml = ({ comment, blogId }: CommentEmailProps) => {
  const blogUrl = `https://reetesh.in/blog/${encodeURIComponent(blogId)}`;

  return `<!doctype html>
<html>
  <body style="margin:0;background:#ffffff;font-family:system-ui,sans-serif;">
    <div style="margin:40px auto;width:465px;max-width:100%;padding:20px;text-align:center;">
      <h1 style="margin:24px 0;font-size:24px;font-weight:400;">New comment received on Blog!</h1>
      <p style="font-size:16px;font-weight:700;">${escapeHtml(blogId)}</p>
      <p style="font-size:14px;margin-bottom:32px;">${escapeHtml(comment)}</p>
      <a href="${escapeHtml(blogUrl)}" style="color:#3b82f6;font-size:17px;font-weight:700;">View Blog</a>
    </div>
  </body>
</html>`;
};
