import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ExperienceComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const experience = useSelector((state) => {
    return state.experience;
  });

  const dispatch = useDispatch();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";

  const getExperience = async () => {
    const url2 = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`;
    if (!profile._id) {
      return;
    }

    try {
      const response = await fetch(url2, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        dispatch({
          type: "GET_EXPERIENCE",
          payload: data,
        });
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  const currentDate = (startDate, endDate) => {
    const data = new Date(startDate.slice(0, 10));
    let data2;
    if (endDate) {
      data2 = new Date(endDate.slice(0, 10));
    } else {
      data2 = new Date();
    }

    const years = Math.floor(
      parseInt(data2 - data) / 1000 / 60 / 60 / 24 / 30 / 12
    );
    const months = Math.floor(
      parseInt(data2 - data) / 1000 / 60 / 60 / 24 / 30 - years * 12
    );

    if (years < 1) {
      return `${months} mos`;
    } else if (months < 1) {
      return `${years} yr`;
    } else {
      return `${years} yr ${months} mos`;
    }
  };

  useEffect(() => {
    getExperience();
  }, [profile]);

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
          {experience.map((exp, i) => {
            return (
              <div key={exp._id}>
                <Row className="ms-2">
                  <Col xs={2} lg={1} className="pe-0 me-lg-3">
                    <img
                      src={exp.image}
                      alt=""
                      style={{ width: "48px", height: "50px" }}
                    />
                  </Col>
                  <Col xs={10} lg={10} className="ps-0">
                    <h4 className="fw-bold fs-6">{exp.role}</h4>
                    <p className="descriptions">{exp.company}</p>
                    <p className="descriptions text-secondary">
                      {exp.startDate.slice(0, 10)} -{" "}
                      {exp.endDate?.slice(0, 10) || "Present"} ·{" "}
                      {currentDate(exp.startDate, exp.endDate)}
                    </p>
                    <p className="descriptions text-secondary">{exp.area}</p>
                  </Col>
                </Row>
                {i < experience.length - 1 && <hr />}
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceComp;
