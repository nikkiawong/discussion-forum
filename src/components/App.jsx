import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './PostList';
import Header from './Header';
import NewPostForm from './NewPostForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedPost: null
    };
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.props.masterPostList} />} />
          <Route exact path='/newpost' render={()=><NewPostForm/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

App.propTypes = {
  masterPostList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
