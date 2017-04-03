import {connect} from 'react-redux'

import Stations from '../components/Stations'

function groupSongsByGenre(arrObj){

	let objResult = {}

	arrObj.forEach(song =>{
		if(objResult[song.genre]){
			objResult[song.genre].push(song);
		}else{
		   objResult[song.genre]=[song]
		}
	})

	return objResult
}

const mapStateToProps = function(state){
	return {
		stations: groupSongsByGenre(state.songs)
	}
}
const mapDispatchToProps = function(dispatch){
	return {}
}


const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)


export default StationsContainer
