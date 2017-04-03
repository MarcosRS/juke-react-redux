import React from 'react'
import {Link} from 'react-router';
import StationContainer from '../containers/StationContainer'

const Stations = (props) => {

   // const stations = props.stations
   let genres = Object.keys(props.stations)
  console.log(genres)

  // const DUMMY_STATIONS_DATA = [
  //   { name: '90s Hip Hop' },
  //   { name: 'Death Metal' },
  //   { name: 'Classical' }
  // ];
  let genreList = genres.map( genre => {
    return (
      <div className="list-group-item" key={genre}>
        <Link to={`/stations/${genre}`}>{genre}</Link>
      </div>
    );
  })

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
        {genreList}
      </div>
    </div>
  )
}

export default Stations
