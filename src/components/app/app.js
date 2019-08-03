import React from 'react';
import Header  from '../header';
import MapiService from '../../services/MapiService';
import ComicsList from '../comics-list';
import CharactersList from '../characters-list';
import StoriesList  from '../stories-list';
import SeriesList  from '../series-list';
import  './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mapiService = new MapiService();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <ComicsList getData = {this.mapiService} />
          <CharactersList getData={this.mapiService} />
          <SeriesList getData={this.mapiService} />
        </div>
      </div>
    )
  }
  
}

export default App;
