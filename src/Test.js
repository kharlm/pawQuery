import React from "react";
import "./HomePage.css"; // Import the CSS file for styling

const articles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "How to Improve Your Coding Skills"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "The Benefits of Regular Exercise"
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "Tips for Effective Time Management"
  }
  // Add more articles as needed
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Welcome to AllQuery!</h1>
      <div className="article-tiles">
        {articles.map(article => (
          <div key={article.id} className="article-tile">
            <img
              src={article.image}
              alt={article.caption}
              className="article-image"
            />
            <div className="article-caption">{article.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
