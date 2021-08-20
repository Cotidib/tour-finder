import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Tour = (props) => {
    const [readMore, setReadMore] = useState(false);
    

    return (
        <article className='tour-container'>
            <button className='remove-btn' onClick={() => props.handleRemove(props.id)}><FontAwesomeIcon icon={faTimes} /></button> 
            <img src={props.img} alt='' className='tour-image'></img>
            <div className='info-container'>
                <div className='info-header'>
                        <div className='tour-name'>{props.name}</div>
                        <div className='tour-price'>${props.price}</div>
                </div>
                <p className='tour-info'>
                    {
                        readMore ? props.info : `${props.info.substring(0,150)}...`
                    }
                    <button className='read-btn' onClick={() => setReadMore(!readMore)}>{readMore ? 'read less' : 'read more'}</button>
                </p>
            </div>
        </article>
    )
}

export default Tour
