/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MoreProfilesComp = (props) => {
  const profiles = useSelector((state) => {
    return state.profiles;
  });

  const dispatch = useDispatch();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
  const url = "https://striveschool-api.herokuapp.com/api/profile/";

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
        console.log(data);
        dispatch({
          type: "GET_PROFILES",
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

  return (
    <Container className="bg-white mt-4 rounded-3 pt-3 bordinoGames">
      <h5>{props.title}</h5>
      {profiles.slice(7, 12).map((profile, i) => {
        return (
          <div key={profile._id}>
            <div className="d-flex mt-2">
              <div>
                <img
                  src={
                    profile.image !== " "
                      ? profile.image
                      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  alt="profile picture"
                  className="rounded-circle suggestedImg"
                />
              </div>
              <div className="ms-2">
                <a href="#" className="h6 mainLink">
                  {profile.name} {profile.surname}
                </a>
                <p className="small">{profile.title}</p>
                <p className="small">{profile.bio}</p>
                <button
                  className="btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2"
                  id="btnResources"
                  onClick={() => {
                    dispatch({
                      type: "SHOW_MODAL",
                    });
                  }}
                >
                  <i className="bi bi-person-plus-fill me-1"></i>
                  Connect
                </button>
              </div>
            </div>
            {i < 4 && <hr />}
          </div>
        );
      })}
      <hr className="mt-3 mb-0" />{" "}
      <Row>
        <Col>
          <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center btnAnalytics">
            Show all
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreProfilesComp;
