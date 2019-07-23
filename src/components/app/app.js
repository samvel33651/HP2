import React from 'react';
import Header  from '../header';
import ComicsList from '../comics-list';
import  './app.css';

const  App = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <ComicsList />
      </div>
    </div>
  );
}

export default App;
