/* eslint-disable react-hooks/exhaustive-deps */
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

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";

const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownMe, setDropdownMe] = useState(false);
  const [dropdownAz, setDropdownAz] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [search, setSearch] = useState("");

  const dropdownMeRef = useRef(null);
  const dropdownAzRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownMe &&
      dropdownMeRef.current &&
      !dropdownMeRef.current.contains(event.target)
    ) {
      setDropdownMe(false);
    }
    if (
      dropdownAz &&
      dropdownAzRef.current &&
      !dropdownAzRef.current.contains(event.target)
    ) {
      setDropdownAz(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMe, dropdownAz]);

  const profile = useSelector((state) => {
    return state.profile;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";

  const getProfile = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("PROFILO:", data);
        dispatch({
          type: "GET_PROFILE",
          payload: data,
        });
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (profile?._id && firstLoad) {
      // navigate(`/profile/${profile._id}`);
      setFirstLoad(false);
    }
  }, [profile]);

  const searchJobs = () => {
    navigate(`/jobs/${search}`);
    setSearch("");
  };

  return (
    <div className=" bg-white position-fixed top-0 z-1 w-100 bordinoGames">
      <Container className=" ">
        <Row className=" justify-content-center">
          <Col xs={2} lg={3} className=" d-flex pe-md-0 ps-md-0">
            {" "}
            <div className="d-flex align-items-center">
              <Navbar.Brand href="/">
                <i className="bi bi-linkedin icon-linkedin me-2 iconaLinkedin "></i>
              </Navbar.Brand>
              <Button
                variant="link"
                className="d-lg-none p-0 me-2 ps-3 fs-5 text-secondary"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className="bi bi-search"></i>
              </Button>

              {showSearch && (
                <div className="position-absolute w-100 top-0 start-0 bg-white p-2 shadow-lg z-3">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      searchJobs();
                    }}
                  >
                    <div className="d-flex align-items-center">
                      {" "}
                      <i
                        className="bi bi-search me-1"
                        onClick={() => setShowSearch(!showSearch)}
                      ></i>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder=" Search..."
                          className="w-100"
                          value={search}
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                        />
                      </InputGroup>
                    </div>
                  </Form>
                </div>
              )}

              <Form
                className="d-none d-lg-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  searchJobs();
                }}
              >
                <InputGroup>
                  <InputGroup.Text className=" sfondoSearch border-0">
                    <i className="bi bi-search px-2"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" sfondoSearch border-0"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </InputGroup>
              </Form>
            </div>
          </Col>
          <Col
            xs={8}
            md={7}
            lg={6}
            className="px-0 d-flex align-items-center justify-content-evenly"
          >
            <Link
              to={"/"}
              href="#action1"
              className=" nav-link d-flex flex-column align-items-center py-0 px-lg-2 px-xl-0"
            >
              <i className="IconeGrigeNav bi bi-house-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Home
              </p>
            </Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center py-0 px-lg-2 px-xl-0"
            >
              <i className="IconeGrigeNav bi bi-person-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Web
              </p>
            </Nav.Link>
            <Link
              to={"/jobs"}
              className="d-flex flex-column align-items-center py-0 px-lg-2 px-xl-0 nav-link"
            >
              <i className="IconeGrigeNav bi bi-briefcase-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0  text-secondary d-none d-lg-block ">
                Jobs
              </p>
            </Link>{" "}
            <Nav.Link
              href="#action4"
              className="d-flex flex-column align-items-center py-0 "
            >
              <i className="IconeGrigeNav bi bi-chat-dots-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Messages
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className=" d-flex flex-column align-items-center py-0"
            >
              <i className="IconeGrigeNav bi bi-bell-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Notifications
              </p>
            </Nav.Link>
            <div className=" position-relative px-lg-2 px-xl-0">
              <Button
                className=" bg-transparent border-0 px-0 py-0 d-flex flex-column align-items-center"
                onClick={() => {
                  setDropdownMe(!dropdownMe);
                }}
              >
                <img
                  src={profile.image}
                  className="ImmagineProfilo"
                  alt="Descrizione immagine"
                />
                <p className="IconText text-secondary  d-none d-lg-block">
                  Me<i className="bi bi-caret-down-fill caretDown"></i>
                </p>
              </Button>
              {dropdownMe && (
                <div
                  ref={dropdownMeRef}
                  className="dropdown-menu-start d-flex align-items-center divDropPosition bg-white rounded-3 z-3"
                >
                  <Container
                    style={{ width: "270px" }}
                    className="border border-muted rounded-2 pb-3"
                  >
                    <Row className="d-flex flex-column">
                      <Col>
                        <Row className="mt-3">
                          <Col xs={3} className="pe-1">
                            {" "}
                            <img
                              src={profile.image}
                              className="ImmagineProfilo rounded-circle"
                              alt="Descrizione immagine"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </Col>
                          <Col xs={9} className="ps-2">
                            <p className="fw-bold">
                              {profile.name} {profile.surname}
                            </p>
                            <p className=" small">{profile.title}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="mt-2">
                          <Col xs={12} className="pe-0">
                            <div className="mb-2 d-flex justify-content-end pe-2">
                              {" "}
                              <Link
                                to={`/profile/${profile._id}`}
                                className=" btn btn-sm bg-transparent border-1 border-primary text-primary rounded-3 w-100 rounded-5 btnPSection"
                                onClick={() => {
                                  setDropdownMe(!dropdownMe);
                                }}
                              >
                                <p className="text-button p-0">View Profile</p>
                              </Link>
                            </div>
                          </Col>
                          <hr></hr>
                        </Row>
                      </Col>
                      <Col>
                        <p className="fw-bold mb-1">Account</p>
                        <Row className=" align-items-center">
                          <Col xs={1}>
                            <img
                              src="/imgGiallina.svg"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </Col>
                          <Col xs={10} className="pe-0">
                            <p className="small fw-semibold text-secondary">
                              {" "}
                              Try 1 month of Premium for €0
                            </p>
                          </Col>
                        </Row>{" "}
                        <p className="text-secondary small">
                          Settigs & Privacy
                        </p>
                        <p className="text-secondary small">Help</p>
                        <p className="text-secondary small mb-1">Language</p>
                        <hr></hr>
                        <p className="fw-bold mb-1">Manage</p>
                        <p className="text-secondary small">Posts & Activity</p>
                        <p className="text-secondary small pb-1">
                          Job Posting Account
                        </p>
                      </Col>
                    </Row>
                    <hr></hr>
                    <p className="text-secondary small">Sign Out</p>
                  </Container>
                </div>
              )}
            </div>
          </Col>
          <Col
            xs={2}
            md={3}
            lg={2}
            className=" ps-0 ps-lg-4 d-flex align-items-center justify-content-center pe-0 borderNav"
          >
            {" "}
            <div className=" position-relative">
              <Button
                className=" bg-transparent border-0 py-0"
                onClick={() => {
                  setDropdownAz(!dropdownAz);
                }}
              >
                <i className="bi bi-grid-3x3-gap text-secondary"></i>
                <p className="IconText text-secondary  d-none d-md-block">
                  For business
                  <i className="bi bi-caret-down-fill caretDown"></i>
                </p>
              </Button>
              {dropdownAz && (
                <div
                  ref={dropdownAzRef}
                  className="dropdown-menu-start d-flex align-items-center divDropPositionAz bg-white rounded-3 z-3"
                >
                  <Container
                    fluid={true}
                    style={{
                      minWidth: "450px",
                      maxWidth: "700px",
                      maxHeight: "75vh",
                    }}
                    className="overflow-y-scroll border border-muted rounded-2"
                  >
                    <Row>
                      <Col lg={6} className="border">
                        <h5 className="p-4">My Apps</h5>
                        <ul className="list-unstyled">
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\trovaLed.svg"
                              alt="Icona"
                              className="ps-1 fs-2"
                            />
                            <span className="ps-2 fw-bold">Find Leads</span>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\gruppi.svg"
                              alt="Icona"
                              className="ps-1 fs-2"
                            />
                            <span className="ms-2 fw-bold">Groups</span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Talent</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Talent.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">
                              Talent Insights
                            </span>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Lavoro.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">Post a job</span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Sales</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Vendite.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">
                              Services Marketplace
                            </span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Marketing</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Pubblicizza.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">Advertise</span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Learning</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Learning.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">Learning</span>
                          </li>
                        </ul>
                      </Col>

                      <Col lg={6}>
                        <h5 className="p-4">Explore more for business</h5>
                        <ul className="list-unstyled px-4">
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Hire on LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Find, attract and recruit talent
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Sell with LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Unlock sales opportunities
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Post a job for free
                            </strong>
                            <p className="text-muted   pb-3">
                              Get qualified applicants quickly
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Advertise on LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Acquire customers and grow your business
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Get started with Premium
                            </strong>
                            <p className="text-muted   pb-3">
                              Expand and leverage your network
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Learn with LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Courses to develop your employees
                            </p>
                          </li>
                          <li>
                            <strong className="mb-3 small w-100">
                              Admin Center
                            </strong>
                            <p className="text-muted   pb-3">
                              Manage billing and account details
                            </p>
                          </li>
                          <li className="py-4 text-center">
                            <strong className=" small w-100 pb-3 mb-4">
                              Create a Company Page +
                            </strong>
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
    </div>
  );
};
export default NavbarComponent;
