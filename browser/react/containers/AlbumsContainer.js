import React, {Component} from 'react';
import {connect} from 'react-redux'
// import store from '../store';
import Albums from '../components/Albums';

// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

// export default AlbumsContainer;


const mapStateToProps = function(state, ownProps){

  return {
    albums:state.albums.list
  }
}

const mapDispatchToProps = function(dispatch){
  return {}
}

const AlbumsContainer = connect(mapStateToProps,mapDispatchToProps)(Albums)


export default AlbumsContainer