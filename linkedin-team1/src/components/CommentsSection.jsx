/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const CommnetsSection = (props) => {
  const [showMe, setShowMe] = useState(false);
  const [comments, setComments] = useState([]);

  const matchedComments = (arr, idPost) => {
    const rightComments = arr.filter((element) => element.elementId === idPost);

    setComments(rightComments);
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
  }, []);

  useEffect(() => {
    console.log('array da mostrare' + props.show);
    checkVisibility();
  }, [props.show]);

  return (
    <div>
      {comments.length > 0 && showMe && (
        <ul>
          {comments.map((comment, i) => {
            return (
              <li key={comment._id}>
                <div>
                  <div>
                    <h6>{comment.author}</h6>
                  </div>
                  {comment.comment}
                </div>
                {i < comments.length - 1 && <hr className='me-5' />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommnetsSection;
