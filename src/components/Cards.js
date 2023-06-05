import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import articles from "../config/articles";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these articles!</h1>
      <div className="article-tiles">
        {articles.map(article => (
          <Link
            key={article.id}
            to={article.link} // Update the link path with the corresponding route path
            className="article-link"
          >
            <div className="article-tile">
              <img
                src={article.image}
                alt={article.caption}
                className="article-image"
              />
              <div className="article-caption">{article.caption}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Cards;
