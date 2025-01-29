import { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DeleteMyPostModal from './DeleteMyPostModal';
import { useNavigate } from 'react-router-dom';

const FeedAreaComp = () => {
  const [posts, setPosts] = useState([]);
  const [notShowArr, setNotShowArr] = useState([]);
  const [currentPostId, setCurrentPostId] = useState('');

  const navigate = useNavigate();

  const profile = useSelector((state) => {
    return state.profile;
  });

  const getAllFeed = async () => {
    const url = 'https://striveschool-api.herokuapp.com/api/posts/';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk';
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
        setPosts(data);
      } else {
        throw new Error('Errore nel recupero dei post');
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
        return '??';
    }
  };

  const hidePost = (postId) => {
    setNotShowArr(notShowArr.concat(postId));
  };

  useEffect(() => {
    getAllFeed();
  }, [currentPostId]);

  return (
    <div className=' mt-2 rounded-3'>
      {posts.length === 0 ? (
        <Spinner animation='border' variant='info' />
      ) : (
        <>
          {posts.slice(-50).map((post) => {
            if (!notShowArr.includes(post._id)) {
              return (
                <div
                  className='bg-white rounded-3 mt-2 bordinoGames'
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

                    {/* corpo del testo */}
                    <div className='d-flex flex-column align-items-center my-2'>
                      <p className='w-100 mb-2 overflow-x-hidden'>
                        {post.text}
                      </p>
                      {post?.image && (
                        <img
                          src={post.image}
                          alt=''
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
                        <Button variant='link'>20 comments</Button> •{' '}
                        <Button variant='link'>44 reposts</Button>
                      </div>
                    </div>
                  </div>

                  <hr className='my-1' />

                  {/* bottoni interazioni col post */}
                  <div className='d-flex justify-content-between mb-2'>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-hand-thumbs-up-fill'></i> Like
                    </button>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-chat-dots'></i> Comment
                    </button>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-repeat'></i> Repost
                    </button>
                    <button className='btn bg-transparent fs-6'>
                      <i className='bi bi-send-fill'></i>Send
                    </button>
                  </div>
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
