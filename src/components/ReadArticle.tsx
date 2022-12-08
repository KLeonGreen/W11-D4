import { useEffect, useState } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { article } from "../types";

const ReadArticle = () => {
  let params = useParams();
  let ArticleId = params.id;
  let navigate = useNavigate();

  const [disArt, setDispArt] = useState<article | null>(null);

  const getSelectedArticle = async () => {
    let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + ArticleId);

    if (response.ok) {
      let data = await response.json();
      setDispArt(data);

      console.log(disArt);
    }
  };

  useEffect(() => {
    getSelectedArticle();
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col sm={12}>
            {disArt && (
              <Card>
                <Card.Title>
                  <h1>{disArt.title}</h1>
                </Card.Title>
                <Card.Img variant="top" src={disArt.imageUrl} className="image2" />

                <Card.Text className="card-text2">{disArt.summary}</Card.Text>
                <Button variant="primary" onClick={() => navigate("/")}>
                  Go Back
                </Button>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReadArticle;
