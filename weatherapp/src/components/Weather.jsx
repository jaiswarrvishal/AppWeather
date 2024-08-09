import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState()

    const handleChangeCity = (event) =>{
        setCity(event.target.value);
    }

    const fetchWeather = async() =>{
        try{
            const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'8e8ce3faf8924edaaf64ec6a2bbc31dd'}`);
            // console.log(response)
            setWeather(response)
        }
        catch(error){
            console.log("Error fetching weather data", error)
        }
    }
    const handleChange = () =>{
        //api call
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter City Name' value={city} onChange={handleChangeCity}/>
        <button className='weather-info' onClick={handleChange}>Get Weather</button>
        {weather && <>
            <div>
                <h3>{weather.data.name}</h3>
                <p>Temp is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
        </>}
    </div>
  )
}

export default Weather