import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import "../../styles/Footer.css";

const FooterSub = () => {
  const date = new Date().getFullYear();

  return (
    <section>
      <div className="socialSub">
        <a href="https://github.com/Virous77" target="_blank">
          <BsGithub className="githubIcon" />
        </a>

        <a
          href="
          https://twitter.com/imbitcoinb
          "
          target="_blank"
        >
          <BsTwitter className="twitterIcon" />
        </a>

        <a
          href="
          https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BlLFnKZvySiCcK4N0OkM3%2FQ%3D%3D
          "
          target="_blank"
        >
          <BsLinkedin className="linkdIcon" />
        </a>
      </div>

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

export default FooterSub;
