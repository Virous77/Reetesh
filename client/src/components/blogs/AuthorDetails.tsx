import React, { useState } from "react";
import { author } from "../../utils/author";
import { BlogType } from "../../interfaces/interface";
import { month } from "../../utils/author";
import Social from "../social/Social";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

type AuthorDetailsType = {
  data: BlogType | undefined;
};

const AuthorDetails: React.FC<AuthorDetailsType> = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const giveDate = () => {
    if (!data) return;
    const Month = new Date(data?.createdAt).getMonth();
    const date = new Date(data?.createdAt).getDate();

    return `${month[Month]} ${date}`;
  };

  return (
    <>
      {copied && <p className="message">Link Copied to Clipboard.</p>}
      <header className="author-details-main">
        <div className="left-author">
          <Link to={"/about"}>
            <img src={author.image} alt={author.name} />
          </Link>

          <div>
            <h3>{author.name}</h3>
            <span>{giveDate()}</span>
          </div>
        </div>

        <div className="right-author">
          <Social />
          <BsLink45Deg
            cursor="pointer"
            className="twitterIcon"
            size={22}
            style={{ marginTop: "5px" }}
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(window.location.href);
              setTimeout(() => {
                setCopied(false);
              }, 2500);
            }}
          />
        </div>
      </header>
    </>
  );
};

export default AuthorDetails;
