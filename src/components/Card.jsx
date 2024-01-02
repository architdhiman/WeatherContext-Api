import React from 'react'
import { useContext } from 'react'
import { useWeather } from '../context/Weather'
const Card = () => {
  const weather = useWeather()
  return (
    <div className='card'>
      <img src={weather?.data?.current?.condition?.icon} alt="" />
      <h2>{weather.data?.current?.temp_c}</h2>
      <h5>{weather.data?.location?.name + ", " + weather.data?.location?.country}</h5>
    </div>
  )
}

export default Card
