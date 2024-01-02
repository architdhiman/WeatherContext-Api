import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import {getWeatherApi , getWeatherDataLocation} from '../api/index'

const WeatherContext = createContext(null)

export const useWeather = () =>{
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const[data,setData] = useState(null)
    const [searchCity,setSearchCity] = useState(null)
    
    const fetchData = async() =>{
        const response = await getWeatherApi(searchCity)
        setData(response)
    }

    const fetchCurrentUserLocation = async() =>{
      navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataLocation(position.coords.latitude, position.coords.longitude).then((data)=> setData(data))
      })
    }

  return (
    <div>
      <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData, fetchCurrentUserLocation}}>
        {props.children}
      </WeatherContext.Provider>
    </div>
  )
}


