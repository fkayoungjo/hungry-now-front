import React from 'react';
import { NavLink, Row, Col } from 'reactstrap';
import heart from './heart.png';


export const Results = (props) => {

  return (
    <div>
    {props.results.hits.map(result => <ul key={result.recipe.label}>

    <Row><NavLink  href={result.recipe.url} target="_blank" className="navitem"><Col xs="auto"><img src={result.recipe.image} alt="link" width="75" height="75"/></Col><Col xs="auto"><h6>{result.recipe.label}</h6></Col></NavLink><Col xs="auto"><img src={heart} alt="heart" width="30" height="30"/></Col></Row>
    </ul>)}
    </div>
  );
}



export default Results;
