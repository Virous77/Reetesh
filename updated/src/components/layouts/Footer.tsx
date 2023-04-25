import "./Footer.scss";
import Social from "../social/Social";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section className="footer">
      <Social />

      <div className="down">
        <p>
          &copy; {date}
          <a
            href="
          https://github.com/Virous77
          "
          >
            Reetesh Kumar
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
