import React, { useState, useEffect } from "react";
import { MainNews, Grid, Link } from "./styles";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=br&q=covid&apiKey=2c034725d67a4d18a689f163be352bcf"
      );
      const data = await response.json();

      console.log(data);
      setNews(data.articles);
    }
    fecthData();
  }, []);

  return (
    <MainNews>
      <h3>Principais noticias</h3>
      <Grid>
        {news.map((article, index) => (
          <article key={index}>
            <span>{article.source.name}</span>
            <h4>
              <a target="blank" href={article.url}>
                {article.title}
              </a>
            </h4>
            <figure>
              <img alt="" src={article.urlToImage} />
            </figure>
          </article>
        ))}
      </Grid>
      <Link>
        <a href="https://news.google.com/topics/CAAqRggKIkBDQklTS2pvUVkyOTJhV1JmZEdWNGRGOXhkV1Z5ZVlJQkZRb0lMMjB2TURKcU56RVNDUzl0THpBeFkzQjVlU2dBUAE/sections/CAQqSggAKkYICiJAQ0JJU0tqb1FZMjkyYVdSZmRHVjRkRjl4ZFdWeWVZSUJGUW9JTDIwdk1ESnFOekVTQ1M5dEx6QXhZM0I1ZVNnQVAB?hl=pt-BR&gl=BR&ceid=BR%3Apt-419">
          Mais noticias
        </a>
      </Link>
    </MainNews>
  );
}
