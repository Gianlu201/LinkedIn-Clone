import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const ModalComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const dispatch = useDispatch();

  const [required, setRequired] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
  const url = "https://striveschool-api.herokuapp.com/api/profile/";

  const getProfile = async () => {
    try {
      const response = await fetch(url + "me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  const putProfile = async () => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let data = await getProfile();
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

  window.addEventListener("scroll", (e) => {
    e.preventDefault();
  });

  const [user, setUser] = useState(profile);

  const handlePost = () => {
    if (user.name.trim() === "") {
      return setRequired(true);
    }
    if (user.surname.trim() === "") {
      return setRequired(true);
    }
    if (user.title.trim() === "") {
      return setRequired(true);
    }
    if (user.area.trim() === "") {
      return setRequired(true);
    }
    setRequired(false);
    putProfile();
    document.getElementById("chiudiModaleProfilo").click();
  };

  useEffect(() => {
    if (profile.name) {
      setUser(profile);
    }
  }, [profile]);

  return (
    <>
      {user._id && (
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel2">
                  Edit intro
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="chiudiModaleProfilo"
                ></button>
              </div>
              <div className="modal-body modalHeight">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p className=" text-secondary mb-4 small">
                      {" "}
                      * indicates required
                    </p>
                    <Form.Label className=" text-secondary">
                      First name*
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      value={user.name}
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                      }}
                    />

                    <Form.Label className="mt-2 text-secondary">
                      Last name*
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      value={user.surname}
                      onChange={(e) => {
                        setUser({ ...user, surname: e.target.value });
                      }}
                    />

                    <div className=" mt-4 mb-3">
                      <p>Name pronunciation</p>
                      <p>
                        <i className="bi bi-info-square-fill"></i> This can only
                        be added using our mobile app
                      </p>
                    </div>

                    <Form.Label className="mt-1 text-secondary">
                      Headline*
                    </Form.Label>
                    <Form.Control
                      required
                      as={"textarea"}
                      rows={"1"}
                      placeholder=""
                      value={user.title}
                      onChange={(e) => {
                        setUser({ ...user, title: e.target.value });
                      }}
                    />

                    <div className=" my-3">
                      <h5>Current position</h5>
                      <button className=" border-0 bg-transparent text-primary fw-bold ps-0 btnPosition mt-2">
                        <i className="bi bi-plus"></i> Add new position
                      </button>
                    </div>

                    <h5>Location</h5>
                    <Form.Label className="mt-1 text-secondary">
                      Country/Region*
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder=""
                      value={user.area}
                      onChange={(e) => {
                        setUser({ ...user, area: e.target.value });
                      }}
                    />

                    <h5 className="mt-3">Contact info</h5>
                    <Form.Label className="mt-1 text-secondary">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="modal-footer d-flex justify-content-between align-items-center">
                {required ? (
                  <p className=" text-danger small">*campi non compilati</p>
                ) : (
                  <p></p>
                )}
                <button
                  type="button"
                  className="btn btn-primary rounded-5 btn-sm px-3"
                  onClick={() => handlePost()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComp;
