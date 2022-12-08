import { Col, Card, Button } from "react-bootstrap";
import { article } from "../types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface articleObject {
  article: article;
}

const BlogCard = ({ article }: articleObject) => {
  const navigate = useNavigate();
  return (
    <>
      <Col sm={5}>
        <Link to={"/article/" + article.id}>
          <Card>
            <Card.Img variant="top" src={article.imageUrl} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.summary}</Card.Text>
              {/* <Card.Text>{article.publishedAt} Date FNS</Card.Text> */}
              <div className="btn btn-warning">Read</div>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default BlogCard;
