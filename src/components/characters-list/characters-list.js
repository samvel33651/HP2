import React, { Component } from 'react';
import MapiService from '../../services/MapiService';
import CharacterDetails from '../character-details';

import  './characters-list.css';

class CharacterList extends  Component {
    constructor() {
        super();
        this.mapiService = new MapiService();
        this.state = {
            characters: [],
            selectedCharacter: 1011334,
        }
    }

    componentDidMount() {
        this.mapiService.getAllCharacters()
            .then((characters) => {
                this.setState({
                    characters
                });
            })
    }

    selectCharacter =  (event) => {
        const  selectedCharacter = event.target.dataset.id;
        this.setState({
            selectedCharacter
        })
    }

    renderCharacterList () {
        const  {characters, selectedCharacter} = this.state;
        return characters.map((character)=> {
            const  clazz = +selectedCharacter === +character.id ? 'active': '';
            return (
                <li data-id={character.id} key={character.id} className={`list-group-item ${clazz}`} onClick={this.selectCharacter}>{character.name}</li>
            )
        });
    }

    render() {
        const { characters, selectedCharacter } = this.state;
        const  characterList = this.renderCharacterList()
        return (
            <div className="characters-container">
                <ul className="list-group">
                        {characterList}
                </ul>
                <CharacterDetails selectedCharacterID = {selectedCharacter} />
            </div>
        )
    }

}

export default CharacterList;