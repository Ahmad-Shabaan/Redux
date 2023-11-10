import React from "react";
import { useEffect } from "react";
import { fetchTemplate } from "../redux/services/templateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Nav, Row, Navbar } from "react-bootstrap";
import { Loading, DynamicComponent } from "../sections";
import { changeGenerated } from "../redux/services/templateSlice";
const GeneratedTemplate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const template = useSelector((state) => state.template);

  useEffect(() => {
    dispatch(fetchTemplate(id));
    dispatch(changeGenerated(true));
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
      </Container>
    </>
  );
};
export default GeneratedTemplate;
