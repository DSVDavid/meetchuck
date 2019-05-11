import React from 'react';
import logo from './logo.svg';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';

import './App.css';




function App() {


  return (
    <div className="App">

      <div  className="App-header">
          <h1 className="App-head-title">Meet Chuck!</h1>
          <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="Chuck" className="App-head-image" />
      </div>

      <div className="App-main">
      
        <div className="Interface" >

            <ButtonGroup className="btn-group" >
               <Button className="btn">Random</Button>
               <Button className="btn">a</Button>
               <Button className="btn">a</Button>
               <Button className="btn">a</Button>
            </ButtonGroup>
        
        </div>

        <div className="Response">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="#" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
   
    </div>
  );
}

export default App;
