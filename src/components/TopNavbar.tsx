import { Navbar, Container } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">News Nest</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
