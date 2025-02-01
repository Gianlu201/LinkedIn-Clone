/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CommnetsSection = (props) => {
  const [showMe, setShowMe] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [currentMod, setCurrentMod] = useState(false);
  const [currentComment, setCurrentComment] = useState("");

  const profile = useSelector((state) => {
    return state.profile;
  });

  const matchedComments = (arr, idPost) => {
    const rightComments = arr.filter((element) => element.elementId === idPost);

    setComments(rightComments);
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";

  const URLCommenti = `https://striveschool-api.herokuapp.com/api/comments/`;
  const commentPost = async () => {
    const myComment = {
      comment: commentText,
      rate: 3,
      elementId: props.postId,
    };

    try {
      const response = await fetch(URLCommenti, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(myComment),
      });
      if (response.ok) {
        setCommentText("");
        props.setUpdate((state) => !state);
      } else {
        throw new Error("Errore recupero commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(URLCommenti + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        props.setUpdate((state) => !state);
      } else {
        throw new Error("Errore recupero commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePut = async (id, commentText) => {
    const myComment = {
      comment: commentText,
    };
    console.log(id);

    try {
      const response = await fetch(URLCommenti + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(myComment),
      });
      if (response.ok) {
        setCommentText("");
        props.setUpdate((state) => !state);
        setCurrentMod(false);
      } else {
        throw new Error("Errore recupero commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkVisibility = () => {
    console.log(props.postId);
    props.show.forEach((element) => {
      if (element === props.postId) {
        setShowMe(true);
      }
    });
  };

  useEffect(() => {
    matchedComments(props.commentsArray, props.postId);
  }, [props.commentsArray]);

  useEffect(() => {
    console.log("array da mostrare" + props.show);
    checkVisibility();
  }, [props.show]);

  return (
    <div>
      {showMe && (
        <>
          <div>
            <img src="" alt="" />
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Row>
                <Col xs={commentText !== "" ? "8" : "10"} className=" ms-2">
                  <Form.Group
                    className=" flex-grow-1 mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Add a comment.."
                      className=" w-100 ms-4 ms-lg-2 ms-xl-4 rounded-5 borderFocus"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col
                  xs={commentText !== "" ? "2" : "2"}
                  // className={"d-flex ".concat(
                  //   commentText
                  //     ? "justify-content-between"
                  //     : "justify-content-end"
                  // )}
                  className=" ms-3 ms-lg-0 ms-xl-3"
                >
                  {commentText && (
                    <Button
                      type="submit"
                      className=" rounded-5"
                      onClick={(e) => {
                        if (currentMod) {
                          handlePut(currentComment._id, commentText);
                        } else {
                          e.preventDefault();
                          commentPost();
                        }
                      }}
                    >
                      {currentMod ? "Modify" : "Comment"}
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
          {comments.length > 0 && (
            <ul className=" ps-0">
              {comments.map((comment, i) => {
                return (
                  <li key={comment._id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div>
                          <h6 className=" ps-3">{comment.author}</h6>
                        </div>
                        {currentMod && comment.author === profile.username ? (
                          <p className="text-muted ps-3">{comment.comment}</p>
                        ) : (
                          <p className=" ps-3">{comment.comment}</p>
                        )}
                      </div>
                      <div>
                        {comment.author === profile.username && (
                          <div className="d-flex me-3">
                            <Button
                              onClick={() => {
                                if (currentMod) {
                                  setCurrentMod(false);
                                  setCommentText("");
                                } else {
                                  setCurrentMod(true);
                                  setCurrentComment(comment);
                                  setCommentText(comment.comment);
                                }
                              }}
                              className="btn btn-sm bg-white rounded-5 text-black border-0"
                            >
                              <i className=" bi bi-pencil-fill text-primary"></i>
                            </Button>
                            <Button
                              onClick={() => {
                                handleDelete(comment._id);
                              }}
                              className="btn btn-sm bg-white rounded-5 text-black border-0"
                            >
                              <i className=" bi bi-x-lg text-danger"></i>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    {i < comments.length - 1 && <hr />}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default CommnetsSection;
