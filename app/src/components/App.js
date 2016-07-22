import React from 'react';
import GMap from './GMap';
import PokeSearch from './PokeSearch';
import pokemon from '../../data/pokemon';

class App extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      mapOffset: 60,
      filterQuery: '',
    };
    this.onPokeFilter = this.onPokeFilter.bind(this);
  }

  componentDidMount() {
    this.updateOffset(this.refs.nav.getBoundingClientRect().height);
  }

  updateOffset(mapOffset) {
    this.setState({ mapOffset });
  }

  onPokeFilter(e) {
    this.setState({ filterQuery: e.target.value });
  }

  render() {
    const { filterQuery } = this.state;
    const filteredPokemon = pokemon.filter(p => p.name.includes(filterQuery));
    return (
      <div className="app">
      <nav className="app-nav" ref="nav">
        <ul>
          <li><a className="nav-btn" href="/">Pokefindr</a></li>
        </ul>
        <PokeSearch onFilter={this.onPokeFilter} />
      </nav>
      <GMap
        offsetTop={this.state.mapOffset}
        pokemon={filteredPokemon}
      />
      </div>
    );
  }
}

export default App;
