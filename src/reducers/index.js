import { combineReducers } from 'redux';
import postListReducer from './post-list-reducer';
import voteReducer from './vote-reducer';
import selectedPostReducer from './selected-post-reducer';

const rootReducer = combineReducers({
  masterPostList: postListReducer,
  voteCount: voteReducer,
  selectedPost: selectedPostReducer
});

export default rootReducer;
