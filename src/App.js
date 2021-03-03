import React  from 'react';
import './App.css';
import {CardList} from './components/Card-List/card-list.component';

class App extends React.Component {
  constructor(){
    super();
    
    this.state={
     arr:[]
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({arr:users}))
}

  render(){
  return (
    <div className="App">

      <CardList>
        {this.state.arr.map(arr => 
        <h1>{arr.name}</h1>)} 
      </CardList>
      
    </div>
  );
}
}
export default App;
