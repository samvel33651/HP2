import  React, { Component } from 'react';

import  './comics-list.css';

class ComicsList extends Component {
  render() {
    return (
      <div className="comics-list">
      <h2> Comics Page</h2>
        <div className="col-md-3 text-center">
          <img src="https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5d2c9d011d5a2/portrait_uncanny.jpg" class="rounded" alt="..."/>
          <h6 className="text-info">True Believers: Absolute Carnage - Mania #1 </h6>
        </div>
        <div className="col-md-3 text-center">
          <img src="https://i.annihil.us/u/prod/marvel/i/mg/4/b0/577d34f19e959/portrait_uncanny.jpg" class="rounded" alt="..."/>
          <h6 className="text-info">Psylocke #1 </h6>
        </div>
        <div className="col-md-3 text-center">
          <img src="https://i.annihil.us/u/prod/marvel/i/mg/e/a0/56bb60aa7bdc2/portrait_uncanny.jpg" class="rounded" alt="..."/>
          <h6 className="text-info">MARVEL AVENGERS ALLIANCE (2016) #4 </h6>
        </div>
        <div className="col-md-3 text-center">
          <img src="https://i.annihil.us/u/prod/marvel/i/mg/9/00/5d2c927bc061c/portrait_uncanny.jpg" class="rounded" alt="..."/>
          <h6 className="text-info">Fearless #1 </h6>
        </div>
      </div>
    );
  }
}

export default ComicsList;
