import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './series-details.css';

class SeriesDetails extends Component {
    constructor () {
        super()
        this.state = {
            series: {}
        }
    }

    componentDidMount = () => {
        this.updateSeries()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectedSeries !== this.props.selectedSeries){
            this.updateSeries();
        }
    }

    updateSeries = () => {
        const  { selectedSeries, getSeriesData } = this.props;
        getSeriesData.getSeries(selectedSeries)
            .then((series) => {
                this.setState({
                    series: series[0]
                })
            });
    }

    render () {
        const {series} = this.state;
        return (
            <Fragment>
                {series.id && 
                    <div className="card" >
                        <img className="card-img-top" src={`${series.thumbnail.path}.${series.thumbnail.extension}`} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{series.title}</h4>
                            <p className="card-text">Modified: {series.modified}</p>
                            <a href={series.urls[0].url}  target='_blank' className="btn btn-primary">More</a>
                        </div>
                    </div>
                }
            </Fragment>
            
        )
    }
}

SeriesDetails.propTypes = {
    selectedSeries: PropTypes.number.isRequired,
    getSeriesData: PropTypes.object.isRequired
}

export default SeriesDetails ;