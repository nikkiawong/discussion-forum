import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      {Object.keys(props.postList).map(function(postId) {
        let post = props.postList[postId];
        return <Post title={post.title}
          username={post.username}
          content={post.content}
          key={postId}
          postId={postId}/>;
      })}
    </div>
  );
}

// PostList.propTypes = {
//   postList: PropTypes.object
// };

export default PostList;
