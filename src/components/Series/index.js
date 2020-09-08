import React, {Component} from 'react';
import SeriesList from "../SeriesList";


class Series extends Component {

    state = {
        series : [],
        seriesNameEntered : '',
        isFetching : false
    }

    onSeriesInputChangeHandler = (e) => {

        if (this.state.seriesNameEntered !== ''){
            this.setState( {isFetching: true});
            fetch('https://api.tvmaze.com/search/shows?q='+this.state.seriesNameEntered)
                .then(response => response.json())
                .then(jsonres => {
                    this.setState( { series : jsonres, isFetching : false})
                });
        }

    }

    render() {
        return (
            <div className="container-sm">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter the series name here"
                           aria-label="Enter the series name here" aria-describedby="button-addon2"
                           value={this.state.seriesNameEntered}
                           onChange={ event => this.setState( {seriesNameEntered: event.target.value})}
                    />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                onClick={ event => this.onSeriesInputChangeHandler(event) }> Search
                            </button>
                        </div>
                </div>
                {
                    !this.state.isFetching && this.state.series.length === 0 && this.state.seriesNameEntered.trim() !== ''
                    &&
                        <p> No Series found with this name </p>
                }
                <br/>
                <SeriesList list={this.state.series}/>
            </div>
        )
    }
}


export default Series;