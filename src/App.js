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
    let newTours = tours.filter((tour) => tour.id !== id);
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

  const handleOneWeek = () => {
    let newTours = tours.filter((tour) => 
    parseInt(tour.name.match(/\d+/g)) <= 7
    );
    setTours(newTours);
  }

  const handleTwoWeek = () => {
    let newTours = tours.filter((tour) => 
    parseInt(tour.name.match(/\d+/g)) > 7 && parseInt(tour.name.match(/\d+/g)) <= 14
    );
    setTours(newTours);
  }

  const handleSecondPrice = () => {
    let newTours = tours.filter((tour) => parseInt(tour.price.replace(",","")) < 3000);
    setTours(newTours);
  }

  const handleThirdPrice = () => {
    let newTours = tours.filter((tour) => parseInt(tour.price.replace(",","")) < 4000 && parseInt(tour.price.replace(",","")) > 3000);
    setTours(newTours);
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
      {/* <header className='tours-header'>Our Tours <FontAwesomeIcon icon={faGlobe}/></header> */}
      <div className='filters'>
        <button className='filter-btn' onClick={fetchData}>All</button>
        <button className='filter-btn' onClick={handleOneWeek}>1 week tours</button>
        <button className='filter-btn' onClick={handleTwoWeek}>1-2 weeks tours</button>
        <button className='filter-btn' onClick={handleSecondPrice}>$2,000</button>
        <button className='filter-btn' onClick={handleThirdPrice}>$3,000</button>
      </div>
      <ToursList tours={tours} handleRemove={handleRemove}/>
    </main>
  );
  
  
}

export default App;
