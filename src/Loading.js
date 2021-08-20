import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <div className='loading-page'>
            <div className='spinner'><FontAwesomeIcon icon={faSpinner} spin/></div>
        </div>
    )
}

export default Loading
