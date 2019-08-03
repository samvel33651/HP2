import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import ItemsList from '../items-list';
import SeriesDetails from '../series-details';


class SeriesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedSeries: 18454,
            series: []
        }
    }

    componentDidMount() {
        const  { getData } = this.props;
        getData.getAllSeries()
            .then((series) => {
                this.setState({
                    series
                })
            });
    }

    onSeriesSelect = (selectedSeries) => {
        this.setState ({
            selectedSeries
        })
    }    

    render() {
        const {series, selectedSeries} = this.state;
        const {getData} = this.props;
        return (
            <div className = "series-container">
                <ItemsList list={series} selectedItem={selectedSeries} onItemClick={this.onSeriesSelect} />
                <SeriesDetails selectedSeries={selectedSeries} getSeriesData={getData}/>
            </div>
        );
    }
}

SeriesList.propTypes = {
    getData: PropTypes.object.isRequired
}

export default SeriesList;