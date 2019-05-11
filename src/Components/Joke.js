import Card from 'react-bootstrap/Card';
import React from 'react';

function Joke({joke}){

const {title,text,image}=joke;


return(
 <div className="Response">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt="" />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            </Card.Body>
          </Card>

</div>
);
}

export default Joke;