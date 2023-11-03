import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg"  className="bg-body-tertiary " id="nav">
      <Container fluid>
        <Navbar.Brand href="#" id="color">Today Special dish</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1 "  id="color">Home</Nav.Link>
            <Nav.Link href="#action2" id="color">About</Nav.Link>
            <NavDropdown title="Products"   id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" >Indian food</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Organic Food 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Weston foods
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"  id="color">
              Help
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" id="color">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample