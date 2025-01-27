import  { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function NavbarLink() {
  const [showSearch, setShowSearch] = useState(false); 

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev); 
  };

  return (
    <Navbar  className="bg-body-tertiary">
    <Container fluid >
      <Navbar.Brand href="#home">
        <i className="bi bi-linkedin icon-linkedin "></i>
      </Navbar.Brand>

        {showSearch ? (
          <InputGroup className="d-sm-none">
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Cerca"
              aria-label="Search"
              onBlur={() => setShowSearch(false)} 
              autoFocus 
            />
          </InputGroup>
        ) : (
          <Button
            variant="outline-success"
            className="d-sm-none"
            onClick={handleSearchToggle} 
          >
            <i className="bi bi-search"></i> 
          </Button>
        )}

        
        <InputGroup className="d-none d-sm-flex">
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Cerca"
            aria-label="Search"
          />
        </InputGroup>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" Navicons me-auto my-2 my-lg-0"
            navbarScroll 
          >






<Nav.Link href="#action1">
  <i className="IconeGrigeNav bi bi-house-door-fill d-flex flex-column align-items-center justify-content-center">
    <p className="IconText d-none d-md-block">home</p>
  </i>
</Nav.Link>
<Nav.Link href="#action2">
  <i className="IconeGrigeNav bi bi-person d-flex flex-column align-items-center justify-content-center">
    <p className="IconText d-none d-md-block">Rete</p>
  </i>
</Nav.Link>
<Nav.Link href="#action3">
  <i className="IconeGrigeNav bi bi-briefcase-fill d-flex flex-column align-items-center justify-content-center">
    <p className="IconText d-none d-md-block">Lavoro</p>
  </i>
</Nav.Link>
<Nav.Link href="#action4">
  <i className="IconeGrigeNav bi bi-bell-fill d-flex flex-column align-items-center justify-content-center">
    <p className="IconText d-none d-md-block">Notifiche</p>
  </i>
</Nav.Link>
<Nav.Link href="#action5">
  <i className="IconeGrigeNav bi bi-chat-dots d-flex flex-column align-items-center justify-content-center">
    <p className="IconText d-none d-md-block">Messaggi</p>
  </i>
</Nav.Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLink;
