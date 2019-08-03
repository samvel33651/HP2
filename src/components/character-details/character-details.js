import  React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MapiService from '../../services/MapiService';

import  './character-details.css';

class CharacterDetails extends Component {
    
    constructor() {
        super();
        this.mapiService = new MapiService();
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
       this.updateCharacter();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectedCharacterID !== this.props.selectedCharacterID){
            this.updateCharacter();
        }
    }

    updateCharacter = () => {
        const  { selectedCharacterID, getCharacterData } = this.props;
        getCharacterData.getCharacter(selectedCharacterID)
            .then((character) => {
                this.setState({
                    character: character[0]
                })
            });
    }
    
    render(){
        const { character } = this.state;
        return (
            <Fragment>
                {character.id && 
                    <div className="card" >
                        <img className="card-img-top" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{character.name}</h4>
                            <p className="card-text">Modified: {character.modified}</p>
                            <a href={character.urls[1].url}  target='_blank' className="btn btn-primary">More</a>
                        </div>
                    </div>
                }
            </Fragment>
            
        )
    }
}

CharacterDetails.propTypes = {
    getCharacterData: PropTypes.object.isRequired
}

export default CharacterDetails;