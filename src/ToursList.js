import React from 'react';
import Tour from './Tour';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const ToursList = (props) => {
    return (
        <section>
            <header className='tours-header'>Tours <FontAwesomeIcon icon={faGlobe}/></header>
            <div className='list'>
                {
                    props.tours.map((tour) => {
                        return <Tour key={tour.id} id={tour.id} img={tour.image} info={tour.info} name={tour.name} price={tour.price} handleRemove={props.handleRemove}/>
                    })
                }
            </div>
        </section>
    )
}

export default ToursList
