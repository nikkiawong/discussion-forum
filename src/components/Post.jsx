import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
      <p>Posted by {props.username}</p>
      // <p>{props.timePosted}</p>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // timePosted: PropTypes.object.isRequired
};

export default Post;
