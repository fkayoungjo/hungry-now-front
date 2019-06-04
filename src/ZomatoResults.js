import React from 'react';
import { NavLink, Row, Col } from 'reactstrap';
import heart from './heart.png';


export const ZomatoResults = (props) => {

  return (
    <div>
    {props.results.map(restaurant => <ul key={restaurant.name}>

    <Row><NavLink  href={restaurant.url} target="_blank" className="navitem"><Col xs="auto"></Col><Col xs="auto"><h6>{restaurant.name}</h6><h6>{restaurant.location.address}</h6></Col></NavLink><Col xs="3"><img src={heart} alt="heart" width="30" height="30"/></Col></Row>
    </ul>)}
    </div>
  );
}



export default ZomatoResults;
