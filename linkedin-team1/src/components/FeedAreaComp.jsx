import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const FeedAreaComp = () => {
  const [posts, setPosts] = useState([]);

  const getAllFeed = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/posts/";
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
        setPosts(data);
      } else {
        throw new Error("Errore nel recupero dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFeed();
  }, []);

  return (
    <div className=" mt-2 rounded-3">
      {posts.length === 0 ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <>
          {posts.splice(-50, posts.length).map((post) => {
            return (
              <div
                className="bg-white rounded-3 mt-2 bordinoGames"
                key={post._id}
              >
                <div className="d-flex justify-content-between align-items-center mx-3">
                  <p className=" text-secondary small">Suggested</p>
                  <div>
                    <button className="btn bg-transparent">
                      <i className="bi bi-three-dots"></i>
                    </button>
                    <button className="btn bg-transparent">
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                </div>

                <hr className="mx-2 mt-0" />

                {/* corpo principale del post */}
                <div className="mx-3">
                  {/* utente creatore post */}
                  <div>
                    <div className="d-flex justify-content-between ">
                      <div>
                        <img
                          src={post.user.image}
                          alt="user picture"
                          className=" rounded-circle mt-1"
                          width={"40px"}
                          height={"40px"}
                        />
                      </div>
                      <div className=" flex-grow-1 mx-2">
                        <h6 className=" fw-semibold">
                          {post.user.name} {post.user.surname}
                        </h6>
                        <p className=" text-secondary postText">
                          {post.user.title}
                        </p>
                        {/* TODO: funzione per calcolare il tempo trascorso dalla creazione del post */}
                        <p className=" postText text-secondary">
                          5d • <i className="bi bi-globe-americas postText"></i>
                        </p>
                      </div>
                      <div>
                        <button className="btn bg-transparent flex-grow-1">
                          <i className="bi bi-plus-lg me-2"></i>Follow
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* corpo del testo */}
                  <div className="d-flex flex-column align-items-center my-2">
                    <p className="w-100 mb-2 overflow-x-hidden">{post.text}</p>
                    {post?.image && (
                      <img src={post.image} alt="" className="w-75 mx-auto" />
                    )}
                  </div>

                  {/* sezione commenti e reazioni */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-secondary">343</span>
                    </div>
                    <div>
                      <Button variant="link">20 comments</Button> •{" "}
                      <Button variant="link">44 reposts</Button>
                    </div>
                  </div>

                  <hr className="my-1" />

                  {/* bottoni interazioni col post */}
                  <div className="d-flex justify-content-between mb-3">
                    <button className="btn bg-transparent fs-6">
                      <i className="bi bi-hand-thumbs-up-fill"></i> Like
                    </button>
                    <button className="btn bg-transparent fs-6">
                      <i className="bi bi-chat-dots"></i> Comment
                    </button>
                    <button className="btn bg-transparent fs-6">
                      <i className="bi bi-repeat"></i> Repost
                    </button>
                    <button className="btn bg-transparent fs-6">
                      <i className="bi bi-send-fill"></i>Send
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeedAreaComp;
