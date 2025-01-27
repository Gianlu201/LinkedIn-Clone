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
    <Navbar  className="bg-body-tertiary custom-navbar">
    <Container fluid >
      <Navbar.Brand href="#home">
        <i className="bi bi-linkedin icon-linkedin "></i>
      </Navbar.Brand>

        {showSearch ? (
        <InputGroup className="d-sm-none">
        <InputGroup.Text className="border-0">
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





<Nav.Link href="#action1" className="d-flex flex-column align-items-center">
  <i className="IconeGrigeNav bi bi-house-door-fill"></i>
  <p className="IconText d-none d-md-block">Home</p>
</Nav.Link>
<Nav.Link href="#action2" className="d-flex flex-column align-items-center">
  <i className="IconeGrigeNav bi bi-person"></i>
  <p className="IconText d-none d-md-block">Rete</p>
</Nav.Link>
<Nav.Link href="#action3" className="d-flex flex-column align-items-center">
  <i className="IconeGrigeNav bi bi-briefcase-fill"></i>
  <p className="IconText d-none d-md-block">Lavoro</p>
</Nav.Link>
<Nav.Link href="#action4" className=" d-flex flex-column align-items-center">
  <i className="IconeGrigeNav bi bi-bell-fill"></i>
  <p className="IconText d-none d-md-block">Notifiche</p>
</Nav.Link>
<Nav.Link href="#action5" className="d-flex flex-column align-items-center ">
  <i className="IconeGrigeNav bi bi-chat-dots"></i>
  <p className="IconText d-none d-md-block">Messaggi</p>
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
