import React from "react";
import { author, formattedDate } from "../../utils/author";

type AuthorType = {
  date: string;
};

const Author: React.FC<AuthorType> = ({ date }) => {
  return (
    <div className="author-main">
      <img src={author.image} alt={author.name} />

      <div>
        <div className="author-details">
          <h3>{author.name}</h3>
          <p>({author.about})</p>
        </div>
        <span className="date">{formattedDate(new Date(date))}</span>
      </div>
    </div>
  );
};

export default Author;
