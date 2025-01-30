import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

const JobsProfile = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const dispatch = useDispatch();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";

  const getProfile = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("PROFILO:", data);
        dispatch({
          type: "GET_PROFILE",
          payload: data,
        });
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {}, []);
  return (
    <Container fluid className=" bg-white mt-4 rounded-3 bordinoGames">
      <Row className=" bg-white rounded-3">
        <Col className="p-0 mb-3 profileTopHome">
          <img
            src="https://placecats.com/900/200"
            alt=""
            className="img-fluid rounded-top-3 sfondoGattoHome"
            style={{ width: "900px" }}
          />
          <img
            src={profile.image}
            alt=""
            className="profileImgHome rounded-circle border border-white border-3"
          />
        </Col>
        <Col className="mt-3 mt-md-3 ms-1" xs={12}>
          <Row className=" mt-3 w-100 justify-content-between align-items-start">
            <Col xs={6} md={12}>
              <h1 className="fs-5 fw-bold my-0">
                {profile.name} {profile.surname}
              </h1>
              <p className="ProfTitleHome">{profile.title}</p>
              <p className="mt-0 text-muted">{profile.area}</p>
            </Col>
            <Col xs={6} md={12} className="my-md-2">
              <Button
                size="sm"
                className="btnSideProf mx-2 w-100 justify-content-center align-items-center fw-semibold"
              >
                <i className="bi bi-plus-lg fs-6"></i> Experience{" "}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsProfile;
