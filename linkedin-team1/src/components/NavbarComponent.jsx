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
} from "react-bootstrap";
const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownMe, setDropdownMe] = useState(false);
  const [dropdownAz, setDropdownAz] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={2} lg={4} className="pt-md-2">
          {" "}
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#home">
              <i className="bi bi-linkedin icon-linkedin me-2 fs-3 "></i>
            </Navbar.Brand>
            <Button
              variant="link"
              className="d-lg-none p-0 me-2"
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="bi bi-search"></i>
            </Button>

            {showSearch && (
              <div className="position-absolute w-100 top-0 start-0 bg-white p-2 shadow-lg z-3">
                <Form>
                  <div className="d-flex">
                    {" "}
                    <i className="bi bi-search mt-1 me-1"></i>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder=" Cerca..."
                        className="w-100"
                      />
                    </InputGroup>
                  </div>
                </Form>
              </div>
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
          <Nav className=" justify-content-between">
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-house-door-fill fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">Home</p>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-person fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">Rete</p>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-briefcase-fill fs-4"></i>
              <p className="IconText  text-secondary d-none d-md-block ">
                Lavoro
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action4"
              className=" d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-bell-fill fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">
                Notifiche
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className="d-flex flex-column align-items-center "
            >
              <i className="IconeGrigeNav bi bi-chat-dots fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">
                Messaggi
              </p>
            </Nav.Link>
            <div className=" position-relative">
              <Button
                className=" bg-transparent border-0"
                onClick={() => {
                  setDropdownMe(!dropdownMe);
                }}
              >
                <img
                  src="/1719248792649.jpeg"
                  className="ImmagineProfilo"
                  alt="Descrizione immagine"
                />
                <p className="IconText text-secondary  d-none d-md-block">
                  Tu<i className="bi bi-caret-down-fill"></i>
                </p>
              </Button>
              {dropdownMe && (
                <div className="dropdown-menu-start d-flex align-items-center divDropPosition">
                  <Container style={{ width: "250px" }} className=" border-1">
                    <Row className="d-flex flex-column">
                      <Col>
                        <Row className="mt-3">
                          <Col xs={3} className="pe-1">
                            {" "}
                            <img
                              src="/1719248792649.jpeg"
                              className="ImmagineProfilo rounded-circle"
                              alt="Descrizione immagine"
                              style={{ width: "60px", height: "60px" }}
                            />
                          </Col>
                          <Col xs={9} className="ps-4">
                            <p className="fw-bold">Rachele Barberis</p>
                            <p>Neolaureata</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="mt-3">
                          <Col xs={7} className="pe-0">
                            <div className="mb-2">
                              {" "}
                              <Button className=" btn btn-sm bg-transparent border-1 border-primary text-primary p-2 rounded-3">
                                <p className="text-button p-0">
                                  Visualizza Profilo
                                </p>
                              </Button>
                            </div>
                          </Col>
                          <Col xs={5} className="ps-0">
                            <div className="mb-2">
                              {" "}
                              <Button className=" btn btn-sm bg-primary border-1 border-primary text-white p-2 px-3 rounded-3">
                                <p className=" text-button p-0">Verifica</p>
                              </Button>
                            </div>
                          </Col>
                          <hr></hr>
                        </Row>
                      </Col>
                      <Col>
                        <p className="fw-bold">Account</p>
                        <Row>
                          <Col xs={2}>
                            <img
                              src="/imgGiallina.svg"
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Col>
                          <Col xs={10} className="pe-0">
                            <p className="small">
                              {" "}
                              Prova 1 mese di Premium per 0 EUR
                            </p>
                          </Col>
                          <p className="text-secondary">
                            Impostazioni e privacy
                          </p>
                          <p className="text-secondary">Guida</p>
                          <p className="text-secondary mb-1">Lingua</p>
                        </Row>
                        <hr></hr>
                      </Col>
                      <p className="fw-bold">Gestisci</p>
                      <p className="text-secondary">Post e attività</p>
                      <p className="text-secondary mb-1">
                        Account per la pubblicità di off..
                      </p>
                    </Row>
                    <hr></hr>
                    <p className="text-secondary">Esci</p>
                  </Container>
                </div>
              )}
            </div>
          </Nav>
        </Col>
        <Col xs={2} lg={2} className="ps-0">
          {" "}
          <div className=" position-relative">
            <Button
              className=" bg-transparent border-0"
              onClick={() => {
                setDropdownAz(!dropdownAz);
              }}
            >
              <i className="bi bi-grid-3x3-gap fs-5 text-secondary"></i>
              <p className="IconText text-secondary  d-none d-md-block">
                Per le Aziende<i className="bi bi-caret-down-fill"></i>
              </p>
            </Button>
            {dropdownAz && (
              <div className="dropdown-menu-start d-flex align-items-center divDropPositionAz">
                <Container
                  fluid={true}
                  style={{ width: "500px", maxHeight: "75vh" }}
                  className="overflow-y-scroll"
                >
                  <Row>
                    <Col lg={6}>
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
                            Pubblica un&apos;offerta di lavoro
                          </span>
                        </li>
                        <li className="mt-4">
                          <strong>Vendite</strong>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img
                            src="\Vendite.svg"
                            alt="Icona"
                            className="icon"
                          />
                          <span className="ms-2">Marketplace dei servizi</span>
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

                    <Col lg={6}>
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
                          <strong>Impara con LinkedIn</strong>
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
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default NavbarComponent;
