import { Button, Container } from "react-bootstrap";

const JobDescription = () => {
  const URL = "https://strive-benchmark.herokuapp.com/api/jobs?search=chef";
  const getJob = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };
  getJob();

  return (
    <Container className=" bg-white">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src="" alt="logoComp" />
          <h5>
            <a>link</a>
          </h5>
        </div>

        <div className="d-flex">
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
                  <i className="bi bi-twitter-x"></i>
                  X, formerly Twitter
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
        </div>
      </div>
      <h3>Developer </h3>
      <p>italy · Reposted 5d ago · Over 100 applicants </p>
      <p>
        <i className="bi bi-briefcase-fill"></i>
        Remote · Contract
      </p>
      <p>
        <i className="bi bi-check-circle"></i>Applicant review time is typically
        3 days <a>Learn more</a>
      </p>
      <p>
        <i className="bi bi-lightbulb"></i> See how you compare to other 100
        other applicants. <a>Try Premium for €0 </a>
      </p>
      <p>
        <i className="bi bi-tags"></i> DevOps
      </p>
    </Container>
  );
};

export default JobDescription;
