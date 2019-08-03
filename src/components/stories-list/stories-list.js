import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class StoriesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        const  { getData } = this.props;
        getData.getAllSeries()
            .then((stories) => {
                this.setState({
                    stories
                })
            });
    }

    render() {
        console.log(this.state);
        return null;
    }
}

StoriesList.propTypes = {
    getData: PropTypes.object.isRequired
}

export default StoriesList;