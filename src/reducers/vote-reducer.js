export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    console.log(' increment works');
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
