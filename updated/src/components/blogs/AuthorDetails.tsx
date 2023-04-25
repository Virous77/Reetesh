import React from "react";
import Author from "./Author";
import { author } from "../../utils/author";
import { BlogType } from "../../interfaces/interface";
import { month } from "../../utils/author";

type AuthorDetailsType = {
  data: BlogType;
};

const AuthorDetails: React.FC<AuthorDetailsType> = ({ data }) => {
  const Month = new Date(data?.createdAt).getMonth();
  const date = new Date(data?.createdAt).getDate();
  return (
    <header>
      <div className="left-author">
        <img src={author.image} alt={author.name} />
        <div>
          <h3>{author.name}</h3>
          <span>
            {month[Month]} {date}
          </span>
        </div>
      </div>

      <div className="right-author"></div>
    </header>
  );
};

export default AuthorDetails;
