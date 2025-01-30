import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

const JobPicksComp = () => {
  const jobs = useSelector((state) => {
    return state.jobs;
  });

  return (
    <Container
      fluid
      className=" bg-white mt-4 rounded-3 position-relative bordinoGames"
    >
      <Row className="align-items-md-start">
        <Col xs={12} className="my-3">
          <h5 className=" fw-bold mt-2">Job picks for you</h5>
          <p className=" text-secondary small">
            Based on your profile, preferences, and activity like applies,
            searches and saves
          </p>
        </Col>{" "}
      </Row>{" "}
      {jobs.slice(0, 3).map((job) => {
        return (
          <Row className=" align-items-start" key={job._id}>
            <Col xs={11}>
              <Row className="py-3">
                <Col xs={2} lg={1} className="pe-0 me-lg-3">
                  {" "}
                  <img
                    src={
                      "https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                    }
                    alt=""
                    style={{ width: "48px" }}
                  />
                </Col>
                <Col xs={10} className="ps-0">
                  <h4 className="fw-bold fs-6 w-100">{job.title}</h4>
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
            <Col xs={1} className=" px-3 py-3">
              <i className="bi bi-x-lg fs-6 me-3"></i>
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
    </Container>
  );
};

export default JobPicksComp;
