import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const News = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ff09e141d73a4c32a0920a58492d00b4`;
    fetch(url).then(async (data) => {
      data = await data.json();
      setArticles(data.articles);
    });
  }, [category, country]);

  return (
    <div>
      <h2 className="text-center m-3">
        Latest <span className="badge bg-danger"> News</span>
      </h2>
      <div className="ss">
        {articles?.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
