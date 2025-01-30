import { useSelector } from "react-redux";
import { Container, Nav, Row, Col, Tab, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExploreJobs = () => {
  const jobs = useSelector((state) => {
    return state.jobs;
  });
  const [activeTab, setActiveTab] = useState("retail");

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const categories = [
    {
      name: "Hybrid",
      img: "https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALxe-13i08oISNC0LL0E8rOjbQ.png",
    },
    {
      name: "Small biz",
      img: "https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAEcyDKtNKGaJRNKSnegRaDfD7w.png",
    },
    {
      name: "HR",
      img: "https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAACmG4H52GI2ESsex3aFZtqIX4g.png",
    },
    {
      name: "Hospitality",
      img: "https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAHXcii7CMsZHRx2iKLSkZfEc2g.png",
    },
    {
      name: "Remote",
      img: "https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAGoRROB0HsmJS3WJTxL2Gg6sZA.png",
    },
    {
      name: "Construction",
      img: "https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAM__hYl5_pcQSBeXmeCuD1mjTQ.png",
    },
    {
      name: "Manufacturing",
      img: "https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALXOZ_PEtcJLSEqdUt9ZET7yeA.png",
    },
    {
      name: "Pharma",
      img: "https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAIs9D8utBTLqQZCdCN6m4tbQUg.png",
    },
    {
      name: "Healthcare",
      img: "https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAHf1zzQvjnhUT2iWPR8DpLQGug.png",
    },
  ];

  const searchJobs = () => {
    navigate(`/jobs/${search}`);
  };

  const handleClick = (name) => {
    setSearch(name);
    searchJobs();
  };

  return (
    <Container
      fluid
      className=" bg-white mt-2 rounded-3 position-relative bordinoGames"
    >
      {" "}
      <Row className="align-items-md-start">
        <Col xs={12} className="mt-3 ps-4 ps-md-2 ps-lg-3 ps-xl-4">
          <h5 className=" fw-bold mt-2">Explore with job collections</h5>
        </Col>{" "}
      </Row>{" "}
      <Tab.Container
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
        className=" mb-1 ps-4 ps-md-2 ps-lg-3 ps-xl-4"
      >
        <Nav
          variant="underline"
          className="mt-2 mb-1 ps-4 ps-md-2 ps-lg-3 ps-xl-4 border-bottom"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="retail"
              className=" text-black d-flex align-items-center me-2 "
            >
              <img
                src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAI8FibGTSwgpRxCSMjxJ6gotbQ.png"
                alt=""
                style={{ width: "34px", height: "34px" }}
                className=" me-1"
              />
              Retail
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="easyApply"
              className=" text-black d-flex align-items-center mx-2"
            >
              <img
                src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAGP4rUyqs0gcQHyq-AxUoT9SVg.png"
                alt=""
                style={{ width: "34px", height: "34px" }}
                className=" me-1"
              />
              Easy Apply
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="more"
              className=" text-black d-flex align-items-center mx-2"
            >
              <img
                src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAI5SAN5C18a0RQqGDuQefxjN0Q.png"
                alt=""
                style={{ width: "34px", height: "34px" }}
                className=" me-1"
              />
              More
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="">
          <Tab.Pane eventKey="retail">
            {jobs.slice(41, 43).map((job) => {
              return (
                <Row className=" align-items-start" key={job._id}>
                  <Col xs={11}>
                    <Row className="py-3">
                      <Col
                        xs={2}
                        lg={1}
                        className="pe-0 pe-md-2 pe-lg-0 ms-lg-3 d-flex justify-content-center justify-content-lg-end"
                      >
                        {" "}
                        <img
                          src={
                            "https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                          }
                          alt=""
                          style={{ width: "48px", height: "48px" }}
                          className=" pt-1"
                        />
                      </Col>
                      <Col xs={10} className="ps-0 ps-lg-2">
                        <h4 className="fw-bold fs-6 w-100 mainLink text-primary">
                          {job.title}
                        </h4>
                        <p className="descriptions">
                          {job.company_name} • {job.category}
                        </p>
                        <p className="descriptions text-secondary">
                          {job.candidate_required_location} •{" "}
                          {job.publication_date.slice(0, 10)}
                        </p>
                        <p className="promoted text-secondary d-flex align-items-center">
                          {" "}
                          Promoted •{" "}
                          <i className="bi bi-linkedin icon-linkedin mx-1 fs-6">
                            {" "}
                          </i>{" "}
                          Easy Apply
                        </p>{" "}
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1} className="px-md-0 px-lg-3 px-xxl-4 py-3">
                    <i className="bi bi-x-lg fs-6 me-3 me-lg-0"></i>
                  </Col>
                  <hr className=" mb-0" />
                </Row>
              );
            })}
            <Row className=" btnAnalytics">
              <Col>
                <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center">
                  Show all <i className="bi bi-arrow-right-short fs-5"></i>
                </Button>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="easyApply">
            {jobs.slice(44, 46).map((job) => {
              return (
                <Row className=" align-items-start" key={job._id}>
                  <Col xs={11}>
                    <Row className="py-3">
                      <Col
                        xs={2}
                        lg={1}
                        className="pe-0 pe-md-2 pe-lg-0 ms-lg-3 d-flex justify-content-center justify-content-lg-end"
                      >
                        {" "}
                        <img
                          src={
                            "https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                          }
                          alt=""
                          style={{ width: "48px", height: "48px" }}
                          className=" pt-1"
                        />
                      </Col>
                      <Col xs={10} className="ps-0 ps-lg-2">
                        <h4 className="fw-bold fs-6 w-100 mainLink text-primary">
                          {job.title}
                        </h4>
                        <p className="descriptions">
                          {job.company_name} • {job.category}
                        </p>
                        <p className="descriptions text-secondary">
                          {job.candidate_required_location} •{" "}
                          {job.publication_date.slice(0, 10)}
                        </p>
                        <p className="promoted text-secondary d-flex align-items-center">
                          Promoted •
                          <span className=" text-success fw-semibold px-1">
                            Be an early applicant
                          </span>
                          •
                          <i className="bi bi-linkedin icon-linkedin mx-1 fs-6"></i>
                          Easy Apply
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1} className="px-md-0 px-lg-3 px-xxl-4 py-3">
                    <i className="bi bi-x-lg fs-6 me-3 me-lg-0"></i>
                  </Col>
                  <hr className=" mb-0" />
                </Row>
              );
            })}
            <Row className=" btnAnalytics">
              <Col>
                <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center">
                  Show all <i className="bi bi-arrow-right-short fs-5"></i>
                </Button>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="more">
            <Row className=" mt-3">
              {categories.map((category, i) => (
                <Col xs={6} lg={4} key={i}>
                  <button
                    className="btn border w-100 text-start mb-3 d-flex align-items-center py-3 btnAnalytics"
                    onClick={() => handleClick(category.name)}
                  >
                    <img
                      src={category.img}
                      alt={category.name}
                      style={{ width: "34px", height: "34px" }}
                      className="me-2"
                    />
                    {category.name}
                  </button>
                </Col>
              ))}
            </Row>
            <Row className="border-top">
              <Col className=" btnAnalytics">
                <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center">
                  Show all <i className="bi bi-arrow-right-short fs-5"></i>
                </Button>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default ExploreJobs;
