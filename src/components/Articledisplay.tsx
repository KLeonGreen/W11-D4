import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { article } from "../types";
import BlogCard from "./BlogCard";

const Articledisplay = () => {
  const [articles, setArticles] = useState<article[]>([]);
  const getArticles = async () => {
    let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");

    if (response.ok) {
      let data = await response.json();
      setArticles(data);
      console.log(articles);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Row className="text-center mt-5 mb-5">
        <Col sm={12}>
          <h1>The News Blog!</h1>
        </Col>
        <Col>
          <h6>A blog about food, experiences, and recipes.</h6>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((article) => (
          <BlogCard article={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Articledisplay;
