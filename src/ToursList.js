import React from 'react';
import Tour from './Tour';


const ToursList = (props) => {
    return (
        <section>
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
