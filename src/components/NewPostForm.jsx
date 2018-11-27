import React from 'react';
import { v4 } from 'uuid';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewPostForm(props){
  let _title = null;
  let _username = null;
  let _content = null;

  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _title.value,
      username: _username.value,
      content: _content.value
      // timePosted: new Moment()
    };
    dispatch(action);
    _title.value = '';
    _username.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='username'
          placeholder='Username'
          ref={(input) => {_username = input;}}/>
        <textarea
          id='content'
          placeholder='Type Your Post Here'
          ref={(textarea) => {_content = textarea;}}/>
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);
