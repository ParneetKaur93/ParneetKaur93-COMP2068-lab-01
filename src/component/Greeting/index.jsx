import React from 'react';
import './style.css';
import { Jumbotron } from 'react-bootstrap';


const Greeting = props => {
  const { name } = props;
  

  return (
    <Jumbotron>
        <header>
           
            
            <h1> Hey {' '+props.name}!.Welcome to my page.</h1>
        </header>

      <hr/>
            
    </Jumbotron>
  );


};

export default Greeting ;