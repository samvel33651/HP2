import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapiService from '../../services/MapiService';

import  './comics-list.css';

class ComicsList extends Component {
  constructor(){
    super();
    this.mapiService = new MapiService();

    this.state= {
      comics:[]
    }
  }

  componentDidMount(){
    const {getData} = this.props;
    // this.mapiService.getAllComics()
    getData.getAllComics()
      .then((comics) => {
        this.setState({
          comics: comics
        });
      })
  }


  renderComics() {
    const  {comics} = this.state;
    return comics.map((comic) => {
      return (
        <div className="col-md-3 text-center" key={comic.id}>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className="rounded commic-img" alt="..."/>
          <h6 className="text-info"><a href={comic.urls[0].url} target="_blank">{comic.title}</a> </h6>
        </div>
      );
    });
  }

  render() {
    const  comics = this.renderComics();
    return (
      <div className="comics-list">
      <h2> Comics Page</h2>
        {comics}
      </div>
    );
  }
}

ComicsList.propTypes = {
  getData: PropTypes.object.isRequired
}

export default ComicsList;
