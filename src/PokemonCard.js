import React, {Component} from 'react'

class PokemonCard extends Component{
  constructor(props){
    super()
    this.id = props.pokemon.id
    this.name = props.pokemon.name
    this.sprite = props.pokemon.sprites.front
  }

  render(){
    return (
      <div className="pokemon-card">
        <div className="pokemon-frame">
          <h1 className="center-text">{this.name}</h1>
          <div className="pokemon-image">
            <img data-id="${this.id}" data-action="flip" className="toggle-sprite" src={this.sprite} />
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonCard
