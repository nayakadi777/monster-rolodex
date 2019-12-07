import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster:[
      ],
      search:''
    };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {this.setState({monster : users})})
}

render(){
  const {monster , search }= this.state;
  const filteredMonsters =  monster.filter(monst =>monst.name.toLowerCase().includes(search.toLowerCase()));
  return(
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox  placeholder="search monster" handleChange={e =>this.setState({search :e.target.value})} />
      <CardList monster={filteredMonsters}>
      </CardList>
   
    </div>
  )
}
}

export default App;
