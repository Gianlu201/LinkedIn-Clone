import { useState } from "react";
import {
  NavDropdown,
  DropdownButton,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function NavbarLink() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <Navbar className="bg-body-tertiary custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <i className="bi bi-linkedin icon-linkedin "></i>
        </Navbar.Brand>

        {showSearch ? (
          <InputGroup className="ricerca d-sm-none ">
            <InputGroup.Text className="border-0 ricerca">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              className="ricerca"
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
            className=" d-sm-none "
            onClick={handleSearchToggle}
          >
            <i className="bi bi-search"></i>
          </Button>
        )}

        <InputGroup className="ricerca d-none d-sm-flex">
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control type="search" placeholder="Cerca" aria-label="Search" />
        </InputGroup>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" Navicons me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-house-door-fill"></i>
              <p className="IconText d-none d-md-block">Home</p>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-person"></i>
              <p className="IconText d-none d-md-block">Rete</p>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-briefcase-fill"></i>
              <p className="IconText d-none d-md-block">Lavoro</p>
            </Nav.Link>
            <Nav.Link
              href="#action4"
              className=" d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-bell-fill"></i>
              <p className="IconText d-none d-md-block">Notifiche</p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className="d-flex flex-column align-items-center "
            >
              <i className="IconeGrigeNav bi bi-chat-dots"></i>
              <p className="IconText d-none d-md-block">Messaggi</p>
            </Nav.Link>

            <div>
              <img
                src="/1719248792649.jpeg"
                className="ImmagineProfilo d-flex flex-column align-items-center "
                alt="Descrizione immagine"
              />
              <p>Tu</p>
            </div>
            <DropdownButton
              align="end"
              className="dropdown-menu-start d-flex align-items-center"
              id="navbarScrollingDropdown"
            >
              <div className="d-flex align-items-center">
                <img
                  src="/1719248792649.jpeg"
                  className="imgProfiloDrop w-25"
                  alt="Descrizione immagine"
                />
                <div className="m-1">
                  <h5 className="mt-2 ms-1">Nome Cognome</h5>

                  <p className="ms-1">
                    descrizione lavoro e informazioni dell utente
                  </p>
                </div>
              </div>
              <div className="mt-2 mb-3">
                <Button className="d-block mx-auto">Visualizza Profilo</Button>
              </div>
              <NavDropdown.Divider />

              <h4>Account</h4>

              <NavDropdown.Item href="#action6">
                <img
                  src="\svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InByZW1pdW0tY2hpcC12Mi1tZWRpdW0iIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjI0eDI0Ij4KICA.svg"
                  className=" imgialla"
                  alt="img gialla"
                />
                <span>Prova 1 mese di premium per 0</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                <p className="softgray">impostazioni e privacy</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                <p className="softgray">Guida</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                <p className="softgray">ingua</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <h4>Gestisci</h4>

              <NavDropdown.Item href="#action6">
                <p className="softgray">Post e attività</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                <p className="softgray">
                  Account per la pubblicazione di off...
                </p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                <p className="softgray ">Esci</p>
              </NavDropdown.Item>
            </DropdownButton>

            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-grid-3x3-gap me-2 fs-4"></i>
              <span className="fs-6">Per le aziende</span>
            </div>
            <DropdownButton align="end" id="navbarScrollingDropdown">
              <Container className="dimensionigrid display-flex">
                <Row>
                  <Col className="col-ms-12 col-md-1">
                    <h5>Le mie app</h5>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\trovaLed.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">Trova lead</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\gruppi.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">Gruppi</span>
                      </li>
                      <li className="mt-4">
                        <strong>Talent</strong>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\Talent.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">Talent Insights</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\Lavoro.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">
                          Pubblica un offerta di lavoro
                        </span>
                      </li>
                      <li className="mt-4">
                        <strong>Vendite</strong>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\Vendiye.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">Marketpalce dei servizi</span>
                      </li>
                      <li className="mt-4">
                        <strong>Marketing</strong>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\Pubblicizza.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">Pubblicizza</span>
                      </li>
                      <li className="mt-4">
                        <strong>Learning</strong>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <img
                          src="\Learning.svg"
                          alt="Icona"
                          className="icon"
                        />
                        <span className="ms-2">Learning</span>
                      </li>
                    </ul>
                  </Col>
                  <hr></hr>
                  <Col className="col-lg-12 col-md-6">
                    <h5>Scopri altro per il business</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <strong>Assumi su LinkedIn</strong>
                        <p className="text-muted">Trova, attrai e assumi</p>
                      </li>
                      <li className="mb-3">
                        <strong>Vendi con LinkedIn</strong>
                        <p className="text-muted">
                          Sblocca nuove opportunità di vendita
                        </p>
                      </li>
                      <li className="mb-3">
                        <strong>Offerta di lavoro gratuita</strong>
                        <p className="text-muted">
                          Ottieni rapidamente candidati qualificati
                        </p>
                      </li>
                      <li className="mb-3">
                        <strong>Fai pubblicità su LinkedIn</strong>
                        <p className="text-muted">
                          Acquisisci clienti e fai crescere la tua azienda
                        </p>
                      </li>
                      <li className="mb-3">
                        <strong>Inizia con Premium</strong>
                        <p className="text-muted">
                          Amplia e sfrutta la tua rete
                        </p>
                      </li>

                      <li className="mb-3">
                        <strong>Impara con Linkedln</strong>
                        <p className="text-muted">
                          Corsi per formare i tuoi dipendenti
                        </p>
                      </li>
                      <li className="mb-5">
                        <strong>Admin Center</strong>
                        <p className="text-muted">
                          Gestisci i dettagli di fatturazione e account
                        </p>
                      </li>
                      <li className="mb-3">
                        <strong>Crea una pagina aziendale +</strong>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLink;
