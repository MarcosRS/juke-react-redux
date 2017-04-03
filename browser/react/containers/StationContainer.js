import {connect} from 'react-redux'
import {toggleSong} from '../action-creators/player'
import Station from '../components/Station'
import {convertSong} from '../utils'

function filterByGenre(songsList, genre){

  let filteredList = songsList.filter(song => {
    return song.genre === genre
  })

	return filteredList.map(song => convertSong(song))
}
//
// function toggle(song, list) {
//   store.dispatch(toggleSong(song, list));
// }


const mapStateToProps = function(state, ownProps){

	return {
    genre: ownProps.routeParams.genre,
		songs: filterByGenre(state.songs, ownProps.routeParams.genre),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
	}
}

const mapDispatchToProps = function(dispatch){
	return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}


const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station)


export default StationContainer
