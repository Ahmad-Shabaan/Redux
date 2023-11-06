import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavSection() {
  const numCarts = useSelector((state) => state.carts);
  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/cart">
              Cart : <span style={{ color: "red" }}> {numCarts.length}</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavSection;
