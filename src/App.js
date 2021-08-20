import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import ToursList from './ToursList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const url = 'https://course-api.com/react-tours-project'  //provided by John Smilga

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const toursjson = await response.json();
    //console.log(toursjson);
    setTours(toursjson);
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  const handleRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(isLoading)
  {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  
  if(tours.length === 0)
  {
    return (
      <main className='refresh-page'>
        <button className='refresh-btn' onClick={fetchData}><FontAwesomeIcon icon={faRedo}/></button>
      </main>
    );
  }
    
  return (
    <main>
      <ToursList tours={tours} handleRemove={handleRemove}/>
    </main>
  );
  
  
}

export default App;
