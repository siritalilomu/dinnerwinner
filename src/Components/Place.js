import React from 'react';

const Place = props => (
  <li className="gif-wrap">
    <h1>{props.name}</h1>
    <img src={props.url} alt=""/>
    <h1>Reviews: {props.stars} Stars</h1>
    <h6>Address: {props.location}</h6>
    <h6>City: {props.city}</h6>
    <h6>Phone: {props.phone}</h6>
    <h1>Price: {props.dollar}</h1>
    <h6>Price: {props.open}</h6>
  </li>
);



export default Place;
