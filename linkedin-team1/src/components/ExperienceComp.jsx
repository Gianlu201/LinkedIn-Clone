import { Container, Row, Col } from "react-bootstrap";

const ExperienceComp = () => {
  return (
    <Container
      fluid
      className=" bg-white mt-4 rounded-3 position-relative pb-3"
    >
      <Row className="ms-2 align-items-md-start">
        <Col xs={12} md={6} className="mt-3 mb-3">
          <h3>Experience</h3>
        </Col>{" "}
        <i className="bi bi-plus-lg fs-4 plus"></i>
        <i className="bi bi-pencil fs-5 matitina"></i>
      </Row>{" "}
      <Row>
        <Col xs={12}>
          <Row className="ms-2">
            <Col xs={2} className=" pe-0">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                alt=""
                style={{ width: "48px" }}
              />
            </Col>
            <Col xs={10} className="ps-0">
              <h4 className="fw-bold fs-6">Consulente commerciale</h4>
              <p className="descriptions">Selectra · Part-time</p>
              <p className="descriptions text-secondary">
                Aug 2022 - Mar 2024 · 1yr 8 mos
              </p>
              <p className="descriptions text-secondary">Rome, Latium, Italy</p>
            </Col>
          </Row>
          <hr />
          <Row className="ms-2">
            <Col xs={2} className=" pe-0">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                alt=""
                style={{ width: "48px" }}
              />
            </Col>
            <Col xs={10} className="ps-0">
              <h4 className="fw-bold fs-6">Consulente commerciale</h4>
              <p className="descriptions">Selectra · Part-time</p>
              <p className="descriptions text-secondary">
                Aug 2022 - Mar 2024 · 1yr 8 mos
              </p>
              <p className="descriptions text-secondary">Rome, Latium, Italy</p>
            </Col>
          </Row>
          <hr />
          <Row className="ms-2">
            <Col xs={2} className=" pe-0">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                alt=""
                style={{ width: "48px" }}
              />
            </Col>
            <Col xs={10} className="ps-0">
              <h4 className="fw-bold fs-6">Consulente commerciale</h4>
              <p className="descriptions">Selectra · Part-time</p>
              <p className="descriptions text-secondary">
                Aug 2022 - Mar 2024 · 1yr 8 mos
              </p>
              <p className="descriptions text-secondary">Rome, Latium, Italy</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceComp;
