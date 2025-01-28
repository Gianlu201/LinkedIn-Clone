import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  DropdownButton,
} from "react-bootstrap";
const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={2} lg={4}>
          {" "}
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#home">
              <i className="bi bi-linkedin icon-linkedin me-2 "></i>
            </Navbar.Brand>
            <Button
              variant="link"
              className="d-lg-none p-0 me-2"
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="bi bi-search"></i>
            </Button>

            {showSearch && (
              <Form className="d-lg-none">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Cerca..."
                    style={{ maxWidth: "200px" }}
                  />
                </InputGroup>
              </Form>
            )}
            <Form className="d-none d-lg-flex">
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Cerca..." />
              </InputGroup>
            </Form>
          </div>
        </Col>
        <Col xs={8} lg={6} className="pe-0">
          <Nav className=" justify-content-md-between">
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-house-door-fill"></i>
              <p className="IconText text-secondary d-none d-md-block">Home</p>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-person"></i>
              <p className="IconText text-secondary d-none d-md-block">Rete</p>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-briefcase-fill"></i>
              <p className="IconText  text-secondary d-none d-md-block">
                Lavoro
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action4"
              className=" d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-bell-fill"></i>
              <p className="IconText text-secondary d-none d-md-block">
                Notifiche
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className="d-flex flex-column align-items-center "
            >
              <i className="IconeGrigeNav bi bi-chat-dots"></i>
              <p className="IconText text-secondary d-none d-md-block">
                Messaggi
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action6"
              className="d-flex flex-column align-items-center ps-1 ps-md-2"
            >
              <img
                src="/1719248792649.jpeg"
                className="ImmagineProfilo"
                alt="Descrizione immagine"
              />

              <div className="d-flex align-items-center">
                <p className="IconText text-secondary d-none d-md-block">Tu</p>

                <DropdownButton
                  align="end"
                  title=""
                  className="dropdown-menu-start d-flex align-items-center d-none d-lg-block"
                  variant="link"
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
                    <Button className="d-block mx-auto">
                      Visualizza Profilo
                    </Button>
                  </div>
                  <NavDropdown.Divider />

                  <h4>Account</h4>
                  <NavDropdown.Item href="#action6">
                    <img
                      src="\svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InByZW1pdW0tY2hpcC12Mi1tZWRpdW0iIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjI0eDI0Ij4KICA.svg"
                      className="imgialla"
                      alt="img gialla"
                    />
                    <span>Prova 1 mese di premium per 0</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <p className="softgray">Impostazioni e privacy</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <p className="softgray">Guida</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    <p className="softgray">Lingua</p>
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
                    <p className="softgray">Esci</p>
                  </NavDropdown.Item>
                </DropdownButton>
              </div>
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={2} lg={2} className="ps-0">
          {" "}
          <Nav.Link
            href="#action6"
            className="justify-content-lg-start ps-1 ps-lg-2 mt-2"
          >
            <i className="bi bi-grid-3x3-gap ms-md-4"></i>

            <div className="d-flex align-items-center">
              <p className="IconText text-secondary d-none d-md-block">
                Per le Aziende
              </p>

              <DropdownButton
                align="end"
                variant="link"
                id="business-dropdown"
                className="d-none d-lg-block"
              >
                <Container>
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
                          <img src="\gruppi.svg" alt="Icona" className="icon" />
                          <span className="ms-2">Gruppi</span>
                        </li>
                        <li className="mt-4">
                          <strong>Talent</strong>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img src="\Talent.svg" alt="Icona" className="icon" />
                          <span className="ms-2">Talent Insights</span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img src="\Lavoro.svg" alt="Icona" className="icon" />
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
            </div>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};
export default NavbarComponent;
