/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Button } from "react-bootstrap";

const SkillsComp = () => {
  return (
    <Container
      fluid
      className=" bg-white mt-2 rounded-3 position-relative bordinoGames"
    >
      <Row className="ms-2 align-items-md-start">
        <Col xs={12} md={6} className="mt-3 mb-2">
          <h3>Skills</h3>
        </Col>
        <button type="button" className=" border-0 plus btn btn-sm">
          <i className="bi bi-plus-lg fs-4"></i>
        </button>{" "}
        <i className="bi bi-pencil fs-5 matitina"></i>
        <Col xs={12}>
          <p className=" fw-bold">Lavoro di squadra</p>
          <p>
            {" "}
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGE6CUEiMMXeA/company-logo_100_100/company-logo_100_100/0/1630643040684/i_grandi_viaggi_spa_logo?e=1746057600&v=beta&t=uPbFIvfoGKFF6YTRYsqS1TN9eyphdZkB28oeArJAbmM"
              alt=""
              style={{ width: "24px" }}
            />{" "}
            Animatrice at I GRANDI VIAGGI S.p.A
          </p>
        </Col>
      </Row>
      <hr className="my-3" />
      <Row className="ms-2 align-items-md-start">
        <Col xs={12}>
          <p className=" fw-bold">Lavoro di squadra</p>
          <p>
            {" "}
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGE6CUEiMMXeA/company-logo_100_100/company-logo_100_100/0/1630643040684/i_grandi_viaggi_spa_logo?e=1746057600&v=beta&t=uPbFIvfoGKFF6YTRYsqS1TN9eyphdZkB28oeArJAbmM"
              alt=""
              style={{ width: "24px" }}
            />{" "}
            Animatrice at I GRANDI VIAGGI S.p.A
          </p>
        </Col>
      </Row>
      <hr className="mt-3 mb-0" />

      <Row>
        <Col>
          <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center btnAnalytics">
            Show all skills <i className="bi bi-arrow-right-short fs-5"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsComp;
