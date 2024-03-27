import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const News = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    fetch(url)
      .then(async (data) => {
        data = await data.json();
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log(err);
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
