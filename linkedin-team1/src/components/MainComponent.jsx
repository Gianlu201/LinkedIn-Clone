/* eslint-disable react-hooks/exhaustive-deps */
import ProfileComp from "./ProfileComp";
import { Container, Row, Col } from "react-bootstrap";
import SuggestedComp from "./SuggestedComp";
import AnalyticsComp from "./AnalyticsComp";
import ActivityComp from "./ActivityComp";
import ExperienceComp from "./ExperienceComp";
import EducationComp from "./EducationComp";
import SkillsComp from "./SkillsComp";
import InterestsComp from "./InterestsComp";
import LanguageUrlComp from "./LanguageUrlComp";
import HiringComp from "./HiringComp";
import MoreProfilesComp from "./MoreProfilesComp";
import AboutComp from "./AboutComp";
import PeopleComp from "./PeopleComp";
import Footer from "./Footer";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

const MainComponent = () => {
  //const params = useParams();
  // const dispatch = useDispatch();

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";

  // const getExperience = async () => {
  //   const url2 = `https://striveschool-api.herokuapp.com/api/profile/${params.profileId}/experiences`;
  //   if (!params.profileId) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch(url2, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);

  //       dispatch({
  //         type: "GET_EXPERIENCE",
  //         payload: data,
  //       });
  //     } else {
  //       throw new Error("Errore nel recupero dei dati");
  //     }
  //   } catch (error) {
  //     console.log("errore", error);
  //   }
  // };

  // useEffect(() => {
  //   getExperience();
  // }, []);

  return (
    <>
      <Container className="p-0 mt-5 pt-3">
        <Row>
          <Col xs={12} md={7} lg={8} className=" ps-xxl-5">
            <ProfileComp />
            <AboutComp />
            <SuggestedComp />
            <AnalyticsComp />
            <ActivityComp />
            <ExperienceComp />
            <EducationComp />
            <SkillsComp />
            <InterestsComp />
          </Col>
          <Col xs={0} md={5} lg={4} className=" pe-xxl-5">
            <LanguageUrlComp />

            <HiringComp />

            <MoreProfilesComp title="More profiles for you" />

            <PeopleComp title="People you may know" />

            <HiringComp />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MainComponent;
