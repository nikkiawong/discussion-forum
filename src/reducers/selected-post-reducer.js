export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_POST':
    return action.postId;
  default:
    return state;
  }
};
