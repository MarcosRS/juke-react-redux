import React from 'react'
import {Link} from 'react-router';

const Stations = (props) => {
   
   // const stations = props.stations
   let genres = []

   for(let station in props.stations){
       genres.push(station)
   }

  console.log(genres)

  // const DUMMY_STATIONS_DATA = [
  //   { name: '90s Hip Hop' },
  //   { name: 'Death Metal' },
  //   { name: 'Classical' }
  // ];

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
         genres.map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={'fill/me/in/later'}>{station}</Link>
            </div>
          );
        }) 
      }
      </div>
    </div>
  )
}

export default Stations
