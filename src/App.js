import React, {Component}from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {Searchbox} from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state  = {
      monsters: [],
      searchFiled: '',
      title: ''
    };
  }
  
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json()
    .then(users => this.setState({ monsters: users }))); 
  }

  handleChange = (e) => {
    this.setState({searchFiled: e.target.value, 
      title: e.target.value})
  }
 
  render () {
    const {monsters,searchFiled, title} = this.state;
    // const filteredMonsters = monsters.filter(monsters => 
    //   monsters.name.toLowerCase().includes(searchFiled.toLowerCase()));
    return (
      <div className="App">
          <h1>{title}</h1>
          <Searchbox
            placeholder='search monster' 
            handleChange={this.handleChange}
          />
          <CardList monsters={monsters}/>
      </div>
      );
  }
}

export default App;

