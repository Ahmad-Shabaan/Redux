import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTemplates } from "../redux/services/templatesSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.templates);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  return (
    <Container>
      <h3
        style={{
          margin: "20px",
        }}
      >
        Select the template that best fits your needs
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {templates.map((template) => {
          return (
            <Card style={{ width: "18rem" }} key={template.id}>
              <Card.Img variant="top" src={template.templateImg} />
              <Card.Body>
                <Card.Title>{template.templateName}</Card.Title>
                <Button variant="primary" style={{marginRight:"10px"}}>
                  <Link to={`/template/${template.id}`} className="nav-link">
                    Edit
                  </Link>
                </Button>
                <Button variant="info">
                  <Link to={`/generated/${template.id}`} className="nav-link">
                    Visit
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};
export default Home;
