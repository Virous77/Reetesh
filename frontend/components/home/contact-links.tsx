import portfolio from '@/data/portfolio.json';

const ContactLinks = () => (
  <nav aria-label="Contact" className="flex flex-wrap gap-x-5 gap-y-1">
    {portfolio.contact.map((link) => (
      <a
        key={link.label}
        href={link.url}
        target={link.url.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="home-link"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default ContactLinks;
