import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props) {

function handleSelectingPost(postId) {
  const { dispatch } = props;
  const action = {
    type: 'SELECT_POST',
    postId: postId
  };
  dispatch(action);
}

function handleIncrement(event) {
  console.log('click');
  const { dispatch } = props;
  event.preventDefault();
  const action = {
    type: 'INCREMENT'

  };
  dispatch(action);
}

  return (
    <div onClick={() => {handleSelectingPost(props.postId);}}>
      <p>Posted by {props.username}</p>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p>{props.postId}</p>
      <button onClick={handleIncrement}>+</button>
      <span>Vote Count: {props.voteCount}</span>
      <button>-</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // timePosted: PropTypes.object.isRequired
};

export default connect()(Post);
