import ContactLinks from './contact-links';

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <ContactLinks />
      <p className="home-faint font-mono text-xs tabular-nums">
        Reetesh Kumar · {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default SiteFooter;
