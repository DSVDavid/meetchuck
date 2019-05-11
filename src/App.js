import React from 'react';

import Header from './Components/Header';
import Joke from './Components/Joke'
import './App.css';
import MainPage from './Container/MainPage'
import Interface from './Components/Interface.js'




class App extends React.Component {

constructor(){
    super();
    this.state={
        number:0,
        categories:[],
        joke:{
          title:'Welcome',
          text:'To the Chuck Norris joke APP',
          image:'#'
        }
    }
}


componentDidMount(){

  fetch("https://api.chucknorris.io/jokes/categories")
  .then((response)=>response.json())
  .then((response)=>this.setState({categories:response}));


}

onClickButton=(e)=>{

  const dataURL="https://api.chucknorris.io/jokes/random?category=";
  let newURL="https://api.chucknorris.io/jokes/random";

  if(e.target.id!='random')
    newURL=dataURL+e.target.id;


  fetch(newURL)
  .then((response)=>response.json())
  .then((response)=>{
    const {value,icon_url}=response;
    console.log(value);
    
    this.setState({number: this.state.number + 1});
    let jokeCopy={...this.state.joke};
    jokeCopy.text=value;
    
    console.log(this.state.number);
    jokeCopy.title=`Joke #${this.state.number}`
    this.setState({joke:jokeCopy});
  });
}

render(){
   if(this.state.categories.length===0){
    return( <h1>Loading...</h1>);
  
  }else{

     console.log(this.state.categories);
   
    return (
    <div className="App">

      <Header />

      <MainPage> 
        <Interface categories={this.state.categories} onClickButton={this.onClickButton}/>
        <Joke joke={this.state.joke} />
      </MainPage>
   
    </div>
  );
  }
}

}

export default App;
