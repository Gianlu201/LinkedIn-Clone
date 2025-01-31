import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ToastFeed from "./ToastFeed";

const NewPostModal = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const params = useParams();

  const handlePost = async () => {
    const myPost = {
      text: text,
      image: imgUrl,
    };
    const url = "https://striveschool-api.herokuapp.com/api/posts/";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(myPost),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setText("");
        document.getElementById("btnModalNewPostClose").click();
        setMessage("Post aggiunto correttamente!");
        setShowToast(true);
        navigate("/");
      } else {
        throw new Error("Errore nell'invio dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePut = async () => {
    const myPost = {
      text: text,
      image: imgUrl,
    };
    const url = `https://striveschool-api.herokuapp.com/api/posts/${params.postId}`;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(myPost),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setText("");
        document.getElementById("btnModalNewPostClose").click();
        setMessage("Post modificato correttamente!");
        setShowToast(true);
        navigate("/");
      } else {
        throw new Error("Errore nell'invio dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!params?.postId) {
      handlePost();
    } else {
      handlePut();
    }
  };

  const getMyPost = async () => {
    const url = `https://striveschool-api.herokuapp.com/api/posts/${params.postId}`;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
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
        setText(data.text);
        data?.image ? setImgUrl(data?.image) : "";
      } else {
        throw new Error("Errore nell'invio dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params) {
      console.log(params.postId);
      getMyPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.postId]);

  return (
    <>
      {" "}
      <div
        className="modal fade"
        id="newPostModal"
        tabIndex="-1"
        aria-labelledby="newPostModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className=" d-flex w-75">
                <img
                  src={profile.image}
                  alt="profile picture"
                  className=" rounded-circle me-3"
                  style={{ width: "50px" }}
                />
                <div>
                  <h5>
                    {profile.name} {profile.surname}
                  </h5>
                  <p className="small text-secondary">Post to Anyone</p>
                </div>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="btnModalNewPostClose"
                onClick={() => {
                  navigate("/");
                  setText("");
                }}
              ></button>
            </div>

            <div className="modal-body modalHeight d-flex flex-column justify-content-between">
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="What do you want to talk about?"
                    className="border-0"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>

              <div>
                <div className="collapse" id="collapseExample">
                  {/* form per inserire immagine nel post */}
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Put the image's url"
                        className="border-0"
                        value={imgUrl}
                        onChange={(e) => {
                          setImgUrl(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className=" d-flex align-items-center">
                  <button className="btn border border-black rounded-5 p-0 px-3 py-1">
                    <i className="bi bi-stars"></i> Rewrite with AI
                  </button>
                  <button
                    className="btn border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="bi fs-5 bi-image"></i>
                  </button>
                  <button className="btn border-0">
                    <i className="bi fs-5 bi-calendar2-week"></i>
                  </button>
                  <button className="btn border-0">
                    <i className="bi fs-5 bi-dash-circle-fill"></i>
                  </button>
                  <button className="btn border-0">
                    <i className="bi fs-5 bi-plus-lg"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className=" bg-transparent border-0">
                <i className="bi bi-clock fs-5"></i>
              </button>
              <button
                type="button"
                className={"btn rounded-5 border-0 fw-medium text-black text-white ".concat(
                  text?.trim() === "" ? "bg-secondary" : "bg-primary"
                )}
                disabled={text?.trim() === "" ? true : false}
                onClick={() => handleClick()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastFeed
        showToast={showToast}
        setShowToast={setShowToast}
        message={message}
      />
    </>
  );
};

export default NewPostModal;
