import React from "react";
import { useEffect } from "react";
import { fetchTemplate } from "../redux/services/templateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Nav, Row, Navbar, Button } from "react-bootstrap";
import { Loading, DynamicComponent } from "../sections";
import { changeGenerated } from "../redux/services/templateSlice";
import { Link } from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi"
const Template = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const template = useSelector((state) => state.template);

  useEffect(() => {
    dispatch(fetchTemplate(id));
    dispatch(changeGenerated(false));
  }, []);

  return template.status !== "succeeded" ? (
    <Loading />
  ) : (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{ backgroundColor: "transparent" }}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <h1>{template.template.templateName}</h1>
        <h3>Sections</h3>
      </div>
      <Container>
        {/* map on all sections */}
        {template.template.sections.map((section, index) => {
          return (
            <Row key={section.sectionName}>
              <DynamicComponent
                sectionType={section.sectionName.toLowerCase()}
                secIndex={index}
              />
              <div style={{ width: "100%", margin: "50px 0" }}></div>
            </Row>
          );
        })}

        <Row>
          <div
            style={{ margin: "50px auto", textAlign: "center", width: "100%" }}
          >
            <Link
              to={`/generated/${id}`}
              onClick={() => {
                dispatch(changeGenerated(true));
              }}
            >
              <Button variant="info" style={{fontSize:"20px"}}>
                Generate
                <BiHomeSmile />
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Template;
