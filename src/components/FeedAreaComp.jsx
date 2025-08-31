import { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DeleteMyPostModal from './DeleteMyPostModal';
import { useNavigate, useParams } from 'react-router-dom';
import CommnetsSection from './CommentsSection';

const FeedAreaComp = () => {
  const [posts, setPosts] = useState([]);
  const [notShowArr, setNotShowArr] = useState([]);
  const [currentPostId, setCurrentPostId] = useState('');
  const [update, setUpdate] = useState(false);

  const [showArr, setShowArr] = useState(['']);

  const [commentsArray, setCommentsArray] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const profile = useSelector((state) => {
    return state.profile;
  });

  const getAllFeed = async () => {
    const url = 'https://striveschool-api.herokuapp.com/api/posts/';
    const token = import.meta.env.VITE_TOKEN;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const provvisory = [...data].reverse();
        setPosts(provvisory);
      } else {
        throw new Error('Errore nel recupero dei post');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const token = import.meta.env.VITE_TOKEN;
  const getComments = async () => {
    const URLCommenti = `https://striveschool-api.herokuapp.com/api/comments/`;

    try {
      const response = await fetch(URLCommenti, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('ECCO I DATI ');
        console.log(data);
        setCommentsArray(data);
      } else {
        throw new Error('Errore recupero commenti');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const timePassed = (dat) => {
    const targetDay = new Date(dat);
    const today = new Date();

    const timePassed = (today - targetDay) / 1000;
    const yearPassed = Math.floor(timePassed / 60 / 60 / 24 / 30 / 12);
    const monthsPassed = Math.floor(timePassed / 60 / 60 / 24 / 30);
    const daysPassed = Math.floor(timePassed / 60 / 60 / 24);
    const hoursPassed = Math.floor(timePassed / 60 / 60);
    const minutesPassed = Math.floor(timePassed / 60);
    const secondsPassed = Math.floor(timePassed);

    switch (true) {
      case yearPassed > 0:
        return `${yearPassed}y`;
      case monthsPassed > 0:
        return `${monthsPassed}m`;
      case daysPassed > 0:
        return `${daysPassed}d`;
      case hoursPassed > 0:
        return `${hoursPassed}h`;
      case minutesPassed > 0:
        return `${minutesPassed}min`;
      case secondsPassed > 0:
        return `${secondsPassed}sec`;
      default:
        return 'now';
    }
  };

  const hidePost = (postId) => {
    setNotShowArr(notShowArr.concat(postId));
  };

  const matchedComments = (arr, idPost) => {
    const rightComments = arr.filter((element) => element.elementId === idPost);

    return rightComments.length;
  };

  useEffect(() => {
    getAllFeed();
    getComments();
  }, [currentPostId, params]);

  useEffect(() => {
    getComments();
  }, [update]);

  return (
    <div className=' mt-2 rounded-3 d-flex flex-column'>
      {posts.length === 0 ? (
        <Spinner
          animation='border'
          className=' align-self-center'
          variant='primary'
        />
      ) : (
        <>
          {posts.slice(0, 50).map((post) => {
            if (!notShowArr.includes(post._id)) {
              return (
                <div
                  className='bg-white rounded-3 mt-2 bordinoGames overflow-x-hidden'
                  key={post._id}
                >
                  <div className='d-flex justify-content-between align-items-center mx-3'>
                    {profile._id === post.user._id ? (
                      <p className=' text-secondary small'>Your own</p>
                    ) : (
                      <p className=' text-secondary small'>Suggested</p>
                    )}

                    <div>
                      <div className='d-inline-block'>
                        <button
                          className='btn bg-transparent'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <i className='bi bi-three-dots'></i>
                        </button>
                        <ul className='dropdown-menu dropdown-menu-end'>
                          {profile._id === post.user._id && (
                            <>
                              <li>
                                <Button
                                  className='btn btn-sm bg-transparent border-0'
                                  type='button'
                                  data-bs-toggle='modal'
                                  data-bs-target='#newPostModal'
                                  onClick={() => {
                                    navigate(`/post/${post._id}`);
                                  }}
                                >
                                  <i className='bi bi-pencil-square text-black'></i>
                                  <span className='text-black ms-2'>
                                    Edit your post
                                  </span>
                                </Button>
                              </li>
                              <li>
                                <Button
                                  className='btn btn-sm bg-transparent border-0'
                                  type='button'
                                  data-bs-toggle='modal'
                                  data-bs-target='#deleteMyPostModal'
                                  onClick={() => {
                                    setCurrentPostId(post._id);
                                    console.log(notShowArr);
                                  }}
                                >
                                  <i className='bi bi-trash-fill text-danger'></i>
                                  <span className='text-black ms-2'>
                                    Delete your post
                                  </span>
                                </Button>
                              </li>
                            </>
                          )}

                          <li>
                            <button className='btn btn-sm'>
                              <i className='bi bi-bookmark'></i>
                              <span className='text-black ms-2'>Save</span>
                            </button>
                          </li>
                          <li>
                            <button className='btn btn-sm'>
                              <i className='bi bi-link-45deg'></i>
                              <span className='text-black ms-2'>
                                Copy link to post
                              </span>
                            </button>
                          </li>
                          <li>
                            <button className='btn btn-sm'>
                              <i className='bi bi-code-slash'></i>
                              <span className='text-black ms-2'>
                                Embed this post
                              </span>
                            </button>
                          </li>
                          <li>
                            <button className='btn btn-sm'>
                              <i className='bi bi-eye-slash-fill'></i>
                              <span className='text-black ms-2'>
                                Not interested
                              </span>
                            </button>
                          </li>
                          <li>
                            <button className='btn btn-sm'>
                              <i className='bi bi-flag-fill'></i>
                              <span className='text-black ms-2'>
                                Report post
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <button
                        className='btn bg-transparent'
                        onClick={() => {
                          hidePost(post._id);
                        }}
                      >
                        <i className='bi bi-x-lg'></i>
                      </button>
                    </div>
                  </div>

                  <hr className='mx-2 mt-0' />

                  {/* corpo principale del post */}
                  <div className='mx-3'>
                    {/* utente creatore post */}
                    <div>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <img
                            src={post.user.image}
                            alt='user picture'
                            className=' rounded-circle mt-1'
                            width={'40px'}
                            height={'40px'}
                          />
                        </div>
                        <div className=' flex-grow-1 mx-2'>
                          <h6 className=' fw-semibold'>
                            {post.user.name} {post.user.surname}
                          </h6>
                          <p className=' postText text-secondary '>
                            {post.user.title}
                          </p>
                          <p className=' postText text-secondary'>
                            {timePassed(post.updatedAt)} •
                            <i className='bi bi-globe-americas ms-2 postText text-secondary'></i>
                          </p>
                        </div>
                        <div>
                          <button className='btn bg-transparent flex-grow-1'>
                            <i className='bi bi-plus-lg me-2'></i>Follow
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* corpo del post */}
                    <div className='d-flex flex-column align-items-center my-2'>
                      <p className='w-100 mb-2 overflow-x-hidden'>
                        {post.text}
                      </p>
                      {post?.image && (
                        <img
                          src={post.image}
                          alt='post image'
                          className='w-75 mx-auto mt-1'
                        />
                      )}
                    </div>

                    {/* sezione commenti e reazioni */}
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <span className='text-secondary'>343</span>
                      </div>
                      <div>
                        {commentsArray.length > 0 && (
                          <Button variant='link'>
                            {matchedComments(commentsArray, post._id)} comments
                          </Button>
                        )}{' '}
                        • <Button variant='link'>44 reposts</Button>
                      </div>
                    </div>
                  </div>

                  <hr className='my-1' />

                  {/* bottoni interazioni col post */}
                  <div className='d-flex justify-content-between'>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-hand-thumbs-up-fill'></i> Like
                    </button>
                    <button
                      className='btn bg-transparent fs-6'
                      type='button'
                      onClick={() => {
                        // setShowArr(showArr.concat(post._id));
                        setShowArr([...showArr, post._id]);
                      }}
                    >
                      <i className='bi bi-chat-dots'></i> Comment
                    </button>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-repeat'></i> Repost
                    </button>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-send-fill'></i>Send
                    </button>
                  </div>

                  <CommnetsSection
                    show={showArr}
                    setUpdate={setUpdate}
                    postId={post._id}
                    commentsArray={commentsArray}
                  />

                  <DeleteMyPostModal
                    postId={currentPostId}
                    setCurrentPostId={setCurrentPostId}
                  />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default FeedAreaComp;
