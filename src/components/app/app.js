import React from 'react';
import Header  from '../header';
import ComicsList from '../comics-list';
import CharactersList from '../characters-list';
import  './app.css';

const  App = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        {/* <ComicsList /> */}
        <CharactersList />
      </div>
    </div>
  );
}

export default App;
