import React from 'react';
import './SeriesList.css'

const SeriesListItem = ({ series }) => (
    <li>
        { series.show.name }
    </li>
    )

const SeriesList = (props) =>{
    return (
        <div className="SeriesList">
            <ul className="series-list">
                { props.list.map(series => ( <SeriesListItem series={series} key={series.show.id} /> )
                )}
            </ul>
        </div>
    )
}


export default SeriesList;