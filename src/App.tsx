import React, { useEffect, useState } from 'react';
import CountryList from './components/CountryList/CountryList';
import GlobalInfo from './components/GlobalInfo/GlobalInfo';
import type { ResponseData, Country } from "./@types/Types";
import { Global, css } from "@emotion/react";
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import BarChart from './components/BarChart/BarChart';

function App() {
  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [activeCountries, setActiveCountries] = useState<Country[]>([])
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(res => setData(res))
  }, [])

  const onHandleClickCountry = (country: Country) => {
    const countryIndex = activeCountries.findIndex(
      (activeCountry) => activeCountry.ID === country.ID);
    
    if (countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);
      setActiveCountries(newActiveCountries);
    } else {
      setActiveCountries([...activeCountries, country]);
    }
  }
  return (
    <>
      <Navbar />
     
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
   
      <div>
        <Global styles={css`
      body{
        background-image: url('./images/virus.jpeg');
        opacity:0.9;
     }`} />
      
        {data ? (
          <>
            <GlobalInfo
              newConfirmed={data?.Global.NewConfirmed}
              newDeaths={data?.Global.NewDeaths}
              newRecovered={data?.Global.NewRecovered}
            />
            <hr />
            {activeCountries.length ? (
            <BarChart countries={activeCountries} />
            ) : null}
            
            <CountryList
              countries={data.Countries}
              onItemClick={onHandleClickCountry}
            />
          </>
        ) : (
          "Loading..."
        )}
      </div>
      );
    </>
  )
}
export default App;
