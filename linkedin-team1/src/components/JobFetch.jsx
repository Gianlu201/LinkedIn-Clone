/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import companyImages from "../data/company_images.json";

const JobFetch = () => {
  const params = useParams();

  const [jobsFetched, setJobsFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getJobsSearched = async () => {
    const url = `https://strive-benchmark.herokuapp.com/api/jobs?search=${params.query}`;
    console.log(params.query);
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setJobsFetched(data.data);
        setIsLoading(false);
      } else {
        throw new Error("Errore nel recupero dei lavori cercati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomImage = () => {
    return companyImages[Math.floor(Math.random() * companyImages.length)]
      .image;
  };

  useEffect(() => {
    setIsLoading(true);
    getJobsSearched();
  }, [params.query]);

  return (
    <Container
      fluid
      className=" bg-white mt-2 mt-md-4 rounded-3 bordinoGames pb-3"
    >
      <Row className="align-items-md-start">
        <Col xs={12} className="mt-3 mb-1 ps-4 ps-md-2 ps-lg-3 ps-xl-4">
          <h5 className=" fw-bold mt-2 pb-1">Search results:</h5>
          <p className=" text-secondary small jobsDesc">
            From your search:{" "}
            <span className=" fw-semibold"> {params.query}</span>
          </p>
        </Col>
      </Row>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : jobsFetched.length < 1 ? (
        <Alert className="mt-2 fw-bold" variant="danger">
          No results found
        </Alert>
      ) : (
        <div
          style={{ maxHeight: "40vh" }}
          className="overflow-y-auto overflow-x-hidden"
        >
          {jobsFetched.map((job, i) => (
            <Row className="align-items-start w-100" key={job._id}>
              <Col xs={11}>
                <Row className="py-3">
                  <Col
                    xs={2}
                    lg={1}
                    className="pe-0 pe-md-2 pe-lg-0 ms-lg-3 d-flex justify-content-center justify-content-lg-end"
                  >
                    <img
                      src={getRandomImage()}
                      alt=""
                      style={{ width: "48px", height: "48px" }}
                      className="pt-1"
                    />
                  </Col>
                  <Col xs={10} className="ps-0 ps-lg-2">
                    <Link
                      to={`/jobs/${params.query}/company/${job.company_name}/job/${job._id}`}
                      className="fw-bold fs-6 w-100 mainLink text-primary"
                    >
                      {job.title}
                    </Link>
                    <p className="descriptions">
                      {job.company_name} • {job.category}
                    </p>
                    <p className="descriptions text-secondary">
                      {job.candidate_required_location} •{" "}
                      {job.publication_date.slice(0, 10)}
                    </p>
                    <p className="promoted text-secondary d-flex align-items-center">
                      Promoted •{" "}
                      <i className="bi bi-linkedin icon-linkedin mx-1 fs-6"></i>{" "}
                      Easy Apply
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={1} className="px-md-0 px-lg-3 px-xxl-4 py-3">
                <i className="bi bi-x-lg fs-6 me-3 me-lg-0"></i>
              </Col>
              {i < jobsFetched.length - 1 && <hr className="mb-0" />}
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};

export default JobFetch;
