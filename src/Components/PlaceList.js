import React from 'react';
import Place from './Place';
import NoPlaces from './NoPlaces';

const PlaceList = props => {
  const results = props.businesses;
  let places;

  if (results.length > 0) {

    places = results.map(place => <Place url={place.image_url}
                                         key={place.id}
                                         name={place.name}
                                         stars={place.rating}
                                         dollar={place.price}
                                         location={place.location.address1}
                                         city={place.location.city}
                                         phone={place.phone}
                                         open={place.is_close} />);

    let index = Math.floor(Math.random()*places.length)
    places = places[index]
    console.log(places);
  } else {
    places = <NoPlaces />
  }
  return(
    <ul className="gif-list">
      {places}
    </ul>
  );
}

export default PlaceList;
