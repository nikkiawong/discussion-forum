export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { title, username, content, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        title: title,
        username: username,
        content: content,
        // timePosted: timePosted,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
