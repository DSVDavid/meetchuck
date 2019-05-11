import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


function Interface({categories,onClickButton}){

	const buttons=categories.map((category,i)=>{
		return <Button className="btn" key={i} id={category} onClick={onClickButton}>{category}</Button>
	});


	return(
		<div className="Interface" >

            <ButtonGroup className="btn-group" >
            	<Button className="btn" id="random" key="100" onClick={onClickButton}>random</Button>
               {buttons}
            </ButtonGroup>
        
        </div>

		);
}

export default Interface;