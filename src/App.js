import React, { Component } from 'react';
import PokemonCard from './PokemonCard'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      filterTerm: ""
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => {
      this.setState({allPokemon: pokemon})
    })
  }

  onSearch = (event) => {
    this.setState({filterTerm: event.target.value})
  }

  render() {
    let filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.filterTerm))
    return (
      <div id="container">
        <img id="pokemon-logo" src="https://learn-co-curriculum.github.io/js-pokemon-search-practice-assignment/images/pokemon.png" alt="" />
        <form id="pokemon-search-form" action="" method="">
          <input id="pokemon-search-input" type="text" value={this.state.filterTerm} onChange={this.onSearch}/>
        </form>
        <div id="pokemon-container">
          {
            filteredPokemon.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
          }
        </div>
      </div>
    )
  }
}

export default App;
