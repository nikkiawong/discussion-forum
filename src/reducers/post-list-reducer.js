export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { title, username, content, voteCount, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        title: title,
        username: username,
        content: content,
        voteCount: voteCount,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
