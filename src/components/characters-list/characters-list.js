import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterDetails from '../character-details';
import ItemsList from '../items-list'
 
import  './characters-list.css';

class CharactersList extends  Component {
   
    constructor() {
        super();
        this.state = {
            characters: [],
            selectedCharacter: 1011334,
        }
    }

    componentDidMount() {
        const  { getData } = this.props;
        getData.getAllCharacters().then((characters) => {
            this.setState({
                characters
            });
        })
    }

    selectCharacter =  (selectedCharacter) => {
        this.setState({
            selectedCharacter
        })
    }

    render() {
        const { characters, selectedCharacter } = this.state;
        const { getData } = this.props;
        // const  characterList = this.renderCharacterList();
        return (
            <div className="characters-container">
                <ItemsList list={characters} selectedItem={selectedCharacter} onItemClick={this.selectCharacter} />
                <CharacterDetails selectedCharacterID = {selectedCharacter} getCharacterData ={getData} />
            </div>
        )
    }

}

CharactersList.propTypes = {
    getData: PropTypes.object.isRequired
}

// CharactersList.defaultProps ={
//     getData: {}
// }


export default CharactersList;