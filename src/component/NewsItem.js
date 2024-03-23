import React from "react";
import image from "../images/news.jpg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="custom-card">
      <div className="title">
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
      <div className="img-section">
        <img src={src ? src : image} alt="img" className="w-100" />
      </div>
      <div className="text-section">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
