import React from 'react';
import {connect} from 'react-redux'
import AddSong from '../components/AddSong';
// import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongContainerMethods extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    // this.unsubscribe = store.subscribe(() => {
    //   this.setState(store.getState());
    // });

    this.props.loadAllSongs();

  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
 
    evt.preventDefault();

    const playlistId = this.props.playlists.selected.id;
    const songId = this.state.songId;

   this.props.addSongToPlaylist(playlistId, songId)
   .catch(() => this.setState({ error: true }));

  }

  render() {
     
    const songs = this.props.songs;
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

//---------------------------------------------------------


//Actual Connection :

const mapStateToProps = function(state, ownProps){

  return {
    songs:state.songs,
    playlists:state.playlists
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    loadAllSongs: function (){
      dispatch(loadAllSongs())  
    },
    addSongToPlaylist:function(playlistId, songId){
       return dispatch(addSongToPlaylist(playlistId, songId))
    }
  }
}


const AddSongContainer =connect(mapStateToProps, mapDispatchToProps)(AddSongContainerMethods) 

export default AddSongContainer;
