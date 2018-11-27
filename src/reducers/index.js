import { combineReducers } from 'redux';
import postListReducer from './post-list-reducer';
import voteReducer from './vote-reducer';


const rootReducer = combineReducers({
  masterPostList: postListReducer,
  voteCount: voteReducer
});

export default rootReducer;
