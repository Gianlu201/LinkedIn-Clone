/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const JobDescription = () => {
  const params = useParams();

  const [selectedJob, setSelectedJob] = useState({});

  const getJob = async () => {
    const URL = `https://strive-benchmark.herokuapp.com/api/jobs?company=${params.company}`;

    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const arr = data.data;
        arr.forEach((element) => {
          console.log(element._id);
          if (element._id == params.jobId) {
            setSelectedJob(element);
          }
        });
      } else {
        throw new Error("errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJob();
  }, [params.jobId]);

  useEffect(() => {
    setSelectedJob({});
  }, [params.query]);

  return (
    <Container
      className={"bg-white my-2 rounded-3 bordinoGames ".concat(
        selectedJob?._id ? "d-block" : "d-none"
      )}
    >
      <Row className="justify-content-between align-items-center mt-1 ms-md-2 ms-lg-1 ms-xl-0 ps-xl-0">
        <Col xs={12} className=" d-flex justify-content-end border-bottom">
          <div className=" dropdown ">
            <Button
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className=" btn bg-transparent border-0"
            >
              <i className="bi bi-arrow-90deg-right text-black"></i>
            </Button>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <h6 className="dropdown-header">Share on LinkenIn</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-pencil"></i>
                  Report to Feed
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-send-fill"></i>
                  Send in a message
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <h6 className="dropdown-header">Other options</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-send-fill"></i>
                  Copy link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-twitter-x"></i> X, formerly Twitter
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-facebook"></i>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className=" dropdown">
            <Button
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className=" btn bg-transparent border-0"
            >
              <i className="bi bi-three-dots text-black"></i>
            </Button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-pencil-square"></i>
                  Send feedback
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-flag-fill"></i>
                  Report this job
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} className="mb-1 ps-md-2 ps-lg-3 ps-xl-3 mt-3">
          <Row className=" align-items-center">
            <Col
              xs={2}
              lg={1}
              className="pe-0 pe-md-2 pe-lg-0 ms-lg-3 ms-xl-1 d-flex justify-content-center justify-content-lg-end"
            >
              <img
                src={
                  "https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI"
                }
                alt=""
                style={{ width: "55px", height: "55px" }}
              />
            </Col>
            <Col xs={8} className="ps-0 ps-lg-2">
              <a
                href={`${selectedJob.url}`}
                target="_blank"
                className=" fw-bold mt-2 pb-1 h5 text-primary"
              >
                {selectedJob.company_name}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=" ps-lg-3 ps-xl-4 ps-2 pb-2">
        <Col xs={12} className=" py-1">
          <h5 className=" fw-semibold">{selectedJob.title}</h5>
          {/* TODO importare funzione per calcolare il tempo */}
          {/* TODO inserire numero random nel 100 */}
          <p className=" small">
            {selectedJob.candidate_required_location} · Reposted 5d ago · Over
            100 applicants{" "}
          </p>
        </Col>
        <Col xs={12} className=" py-1">
          <p className=" small d-flex align-items-center text-uppercase">
            <i className=" fs-5 pe-1 text-secondary bi bi-briefcase-fill"></i>
            {selectedJob.job_type}
          </p>
        </Col>
        <Col xs={12} className=" py-1">
          <p className=" small d-flex align-items-center">
            <i className=" fs-5 pe-1 text-secondary bi bi-check-circle"></i>
            Applicant review time is typically 3 days <a>Learn more</a>
          </p>
        </Col>
        <Col xs={12} className=" py-1">
          <p className=" small d-flex align-items-center">
            <i className=" fs-5 pe-1 text-secondary bi bi-lightbulb"></i>See how
            you compare to other 100 other applicants.{" "}
          </p>
        </Col>
        <Col xs={12} className=" py-1">
          <p className=" small d-flex align-items-center">
            <i className=" fs-5 pe-1 text-secondary bi bi-tags"></i>
            {selectedJob.category}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDescription;
