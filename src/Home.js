import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css"; // Import the CSS file for styling
import articles from "./config/articles";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Welcome to AllQuery</h1>
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
};

export default HomePage;
