/* eslint-disable react-hooks/exhaustive-deps */
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProvaModale = () => {
  const param = useParams();
  const navigate = useNavigate();

  const initialExperience = {
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: "",
    image: "",
    // 'https://demo.studiopress.com/page-builder/gb-square-placeholder.jpg'
  };

  const profile = useSelector((state) => {
    return state.profile;
  });

  const experience1 = useSelector((state) => {
    return state.experience;
  });

  const [experience, setExperience] = useState(initialExperience);

  const [current, setCurrent] = useState(true);
  const [startDate, setStartDate] = useState({ year: "", month: "" });
  const [endDate, setEndDate] = useState({ year: "", month: "" });
  const [required, setRequired] = useState(false);

  const dispatch = useDispatch();

  const handlePost = () => {
    if (experience.role.trim() === "") {
      return setRequired(true);
    }
    if (experience.company.trim() === "") {
      return setRequired(true);
    }
    if (experience.description.trim() === "") {
      return setRequired(true);
    }
    if (experience.area.trim() === "") {
      return setRequired(true);
    }
    if (startDate.month === "" || startDate.year === "") {
      return setRequired(true);
    }
    if (!current) {
      if (endDate.month === "" || endDate.year === "") {
        return setRequired(true);
      }
    }
    setRequired(false);
    const initialDate = new Date(`${startDate.year}/${startDate.month}/01`);

    let stopDate;
    if (current) {
      stopDate = null;
    } else {
      stopDate = new Date(`${endDate.year}/${endDate.month}/01`);
    }

    let urlImg;
    if (experience.image.trim() === "") {
      urlImg =
        "https://demo.studiopress.com/page-builder/gb-square-placeholder.jpg";
    }

    const myNewExp = {
      ...experience,
      startDate: initialDate.toISOString(),
      endDate: stopDate?.toISOString() || null,
      image: urlImg ? urlImg : experience.image,
    };

    if (param.expId) {
      return putNewExperience();
    } else {
      return postNewExpereince(myNewExp);
    }
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";

  const url = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`;

  const postNewExpereince = async (exp) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(exp),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        await getExperience();
        setExperience(initialExperience);
        document.getElementById("closeExperienceModal").click();
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  const putNewExperience = async () => {
    const myExp = {
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      area: experience.area,
      image: experience.image,
    };

    console.log(myExp);

    try {
      const response = await fetch(url + `/${param.expId}`, {
        method: "PUT",
        body: JSON.stringify(myExp),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        await getExperience();
        document.getElementById("closeExperienceModal").click();
        navigate(`/profile/${profile._id}`);
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  const getExperience = async () => {
    const url2 = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`;

    try {
      const response = await fetch(url2, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

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

  useEffect(() => {
    if (param.expId) {
      setExperience(experience1.filter((ex) => ex._id === param.expId)[0]);
      setStartDate(experience1.filter((ex) => ex._id === param.expId)[0]);
      setEndDate(experience1.filter((ex) => ex._id === param.expId)[0]);
    }
  }, [param.expId]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add experience
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="closeExperienceModal"
              onClick={() => {
                navigate(`/profile/${profile._id}`);
                setExperience(initialExperience);
              }}
            ></button>
          </div>
          <div className="modal-body modalHeight">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className=" text-secondary mb-4 small">
                  * indicates required
                </p>
                <Form.Label className=" text-secondary">Title*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: retail sales manager"
                  value={experience.role}
                  onChange={(e) => {
                    setExperience({ ...experience, role: e.target.value });
                  }}
                  required
                />

                <Form.Label className="mt-1 text-secondary">
                  Company or Oraganization*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: Microsoft"
                  value={experience.company}
                  onChange={(e) => {
                    setExperience({ ...experience, company: e.target.value });
                  }}
                  required
                />
                <div className="mt-3">
                  <input
                    type="checkbox"
                    checked={current}
                    onChange={() => {
                      setCurrent(!current);
                    }}
                  />
                  <Form.Label className="mt-1 ms-2 text-secondary">
                    I am currently working in this role
                  </Form.Label>
                </div>

                <div className=" mb-3">
                  <Form.Label className="mt-1 text-secondary">
                    Start date*
                  </Form.Label>
                  {!param.expId && (
                    <div className=" d-flex justify-content-between">
                      <select
                        name="Month"
                        className=" w-50 me-2 p-1"
                        value={startDate.month}
                        onChange={(e) =>
                          setStartDate({ ...startDate, month: e.target.value })
                        }
                      >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>

                      <select
                        name="Year"
                        className=" w-50"
                        value={startDate.year}
                        onChange={(e) =>
                          setStartDate({ ...startDate, year: e.target.value })
                        }
                      >
                        <option value="">Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                    </div>
                  )}

                  {param.expId && (
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="ex: 2020-03-21"
                        value={experience.startDate.slice(0, 10)}
                        onChange={(e) => {
                          setExperience({
                            ...experience,
                            startDate: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  )}
                </div>

                {!current && !param.expId && (
                  <div className=" mb-3">
                    <Form.Label className="mt-1 text-secondary">
                      End date*
                    </Form.Label>
                    <div className=" d-flex justify-content-between">
                      <select
                        name="Month"
                        className=" w-50 me-2 p-1"
                        value={endDate.month}
                        onChange={(e) =>
                          setEndDate({ ...endDate, month: e.target.value })
                        }
                      >
                        <option>Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>

                      <select
                        name="Year"
                        className=" w-50"
                        value={endDate.year}
                        onChange={(e) =>
                          setEndDate({ ...endDate, year: e.target.value })
                        }
                      >
                        <option>Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                    </div>
                  </div>
                )}

                {!current && param.expId && (
                  <div>
                    <Form.Label className="mt-1 text-secondary">
                      End date*
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ex: 2020-03-21"
                      value={experience.endDate.slice(0, 10)}
                      onChange={(e) => {
                        setExperience({
                          ...experience,
                          endDate: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                )}

                <Form.Label className="mt-1 text-secondary">
                  Location*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: London, United Kingdom"
                  value={experience.area}
                  onChange={(e) => {
                    setExperience({ ...experience, area: e.target.value });
                  }}
                />

                <Form.Label className="mt-1 text-secondary">
                  Description*
                </Form.Label>
                <Form.Control
                  as={"textarea"}
                  placeholder="List your major duties and successes, highlighting specific projects"
                  value={experience.description}
                  onChange={(e) => {
                    setExperience({
                      ...experience,
                      description: e.target.value,
                    });
                  }}
                />

                <h5 className="mt-3">Media</h5>
                <p>Add image</p>
                <Form.Control
                  type="text"
                  placeholder="ex: 'https://demo.studiopress.com/page-builder/gb-square-placeholder.jpg'"
                  value={experience.image}
                  onChange={(e) => {
                    setExperience({ ...experience, image: e.target.value });
                  }}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="modal-footer d-flex flex-column align-items-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handlePost();
              }}
            >
              Save
            </button>
            {required && (
              <p className="text-danger small">Required fields not filled</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvaModale;
