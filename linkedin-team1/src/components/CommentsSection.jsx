/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CommnetsSection = (props) => {
  const [showMe, setShowMe] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [currentMod, setCurrentMod] = useState(false);
  const [currentComment, setCurrentComment] = useState('');

  const profile = useSelector((state) => {
    return state.profile;
  });

  const matchedComments = (arr, idPost) => {
    const rightComments = arr.filter((element) => element.elementId === idPost);

    setComments(rightComments);
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk';

  const URLCommenti = `https://striveschool-api.herokuapp.com/api/comments/`;
  const commentPost = async () => {
    const myComment = {
      comment: commentText,
      rate: 3,
      elementId: props.postId,
    };

    try {
      const response = await fetch(URLCommenti, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(myComment),
      });
      if (response.ok) {
        setCommentText('');
        props.setUpdate((state) => !state);
      } else {
        throw new Error('Errore recupero commenti');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(URLCommenti + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        props.setUpdate((state) => !state);
      } else {
        throw new Error('Errore recupero commenti');
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
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(myComment),
      });
      if (response.ok) {
        setCommentText('');
        props.setUpdate((state) => !state);
        setCurrentMod(false);
      } else {
        throw new Error('Errore recupero commenti');
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
    console.log('array da mostrare' + props.show);
    checkVisibility();
  }, [props.show]);

  return (
    <div>
      {showMe && (
        <>
          <div>
            <img src='' alt='' />
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Row className=' border border-2 rounded-4 border-opacity-50 mx-4 mb-3'>
                <Col xs={commentText !== '' ? '12' : '11'}>
                  <Form.Group
                    className=' flex-grow-1 mb-3'
                    controlId='formBasicEmail'
                  >
                    <Form.Control
                      type='text'
                      className='border-0 w-75 my-0 mt-2 borderFocus'
                      placeholder='Add a comment..'
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col
                  xs={commentText !== '' ? '12' : '1'}
                  className={'d-flex '.concat(
                    commentText
                      ? 'justify-content-between'
                      : 'justify-content-end'
                  )}
                >
                  {commentText && (
                    <Button
                      className='py-0 mb-1'
                      type='submit'
                      onClick={(e) => {
                        if (currentMod) {
                          handlePut(currentComment._id, commentText);
                        } else {
                          e.preventDefault();
                          commentPost();
                        }
                      }}
                    >
                      {currentMod ? 'Modify' : 'Comment'}
                    </Button>
                  )}
                  <div className='d-flex'>
                    <Button
                      type='button'
                      className='btn btn-sm p-2 bg-transparent border-0'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='bi bi-emoji-smile text-secondary'></i>
                    </Button>
                    <Button
                      type='button'
                      className='btn btn-sm p-2 bg-transparent border-0'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='bi bi-image text-secondary'></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
          {comments.length > 0 && (
            <ul>
              {comments.map((comment, i) => {
                return (
                  <li key={comment._id}>
                    <div className='d-flex justify-content-between align-items-center me-5'>
                      <div>
                        <div>
                          <h6>{comment.author}</h6>
                        </div>
                        {currentMod && comment.author === profile.username ? (
                          <h6 className='text-muted'>{comment.comment}</h6>
                        ) : (
                          <h6>{comment.comment}</h6>
                        )}
                      </div>
                      <div>
                        {comment.author === profile.username && (
                          <div className='d-flex'>
                            <Button
                              onClick={() => {
                                if (currentMod) {
                                  setCurrentMod(false);
                                  setCommentText('');
                                } else {
                                  setCurrentMod(true);
                                  setCurrentComment(comment);
                                  setCommentText(comment.comment);
                                }
                              }}
                              className='btn btn-sm bg-white rounded-5 text-black border-black'
                            >
                              mod
                            </Button>
                            <Button
                              onClick={() => {
                                handleDelete(comment._id);
                              }}
                              className='btn btn-sm bg-white rounded-5 text-black border-black'
                            >
                              canc
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    {i < comments.length - 1 && <hr className='me-5' />}
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
