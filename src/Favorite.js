import React from 'react';
import { Row, NavLink } from 'reactstrap';
import minusfav from './minusfav.png';






export const Favorite = (props) => {

  return (
    <div >
      <Row><NavLink  href={props.fav.url} target="_blank" className="navitem"> <h6> {props.fav.label} </h6></NavLink><img src={minusfav} alt="minusfav" width="30" height="30"  id={props.fav.id} onClick={(e) => props.deleteFav(e)}/></Row>
    </div>

  );
}



export default Favorite;
