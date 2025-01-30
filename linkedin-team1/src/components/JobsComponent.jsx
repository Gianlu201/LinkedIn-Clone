/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import JobPicksComp from "./JobPicksComp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MoreJobsComp from "./MoreJobsComp";
import ExploreJobs from "./ExploreJobs";
import JobDescription from "./JobDescription";
import { useParams } from "react-router-dom";
import JobFetch from "./JobFetch";
import StaticSuggested from "./StaticSuggested";
import JobsProfile from "./JobsProfile";
import PreferencesSideComp from "./PreferencesSideComp";
import ProfileFooter from "./ProfileFooter";

const JobsComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const url = "https://strive-benchmark.herokuapp.com/api/jobs?search=query";

  const getProfile = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("LAVORI:", data.data);
        dispatch({
          type: "GET_JOBS",
          payload: data.data,
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
    <Container className="mt-4 mt-md-5 pt-2">
      <Row>
        <Col xs={12} md={5} lg={4}>
          <JobsProfile />
          <PreferencesSideComp />
          <ProfileFooter />
        </Col>
        <Col xs={12} md={7} lg={8}>
          {params?.query ? (
            <>
              <JobFetch />
              <JobDescription />
            </>
          ) : (
            <>
              <JobPicksComp />
              <ExploreJobs />
              <StaticSuggested />
              <MoreJobsComp />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default JobsComponent;
