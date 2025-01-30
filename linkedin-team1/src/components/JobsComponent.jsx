import { Container, Row, Col } from "react-bootstrap";
import JobDescription from "./JobDescription";
import { useParams } from "react-router-dom";
import JobFetch from "./JobFetch";

const JobsComponent = () => {
  const params = useParams();

  return (
    <Container className="mt-5 pt-3">
      <Row>
        <Col xs={12} md={5} lg={4}></Col>
        <Col xs={12} md={7} lg={8}>
          {params?.query && (
            <>
              <JobFetch />
              <JobDescription />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default JobsComponent;
