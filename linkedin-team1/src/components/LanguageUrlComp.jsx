/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";

const LanguageUrlComp = () => {
  return (
    <Container fluid className=" bg-white mt-4 my-md-2 pb-2 rounded-3">
      <Row className="ms-2 ms-md-0 align-items-md-start position-relative">
        <Col xs={12} className="mt-3 mb-2">
          <h3 className="fontDestra ">Profile language</h3>
          <p className="pDestra">Italiano</p>
          <i className="bi bi-pencil fs-5 matitina matitinaDestra"></i>
        </Col>
      </Row>
      <hr className="mt-1 mb-0" />
      <Row className="ms-2 ms-md-0 align-items-md-start position-relative">
        <Col xs={12} className="mt-3 mb-2">
          <h3 className="fontDestra ">Public profile & URL</h3>
          <p className="pDestra">
            www.linkedin.com/in/camilla-zicari-84101620b
          </p>
          <i className="bi bi-pencil fs-5 matitina matitinaDestra"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default LanguageUrlComp;
