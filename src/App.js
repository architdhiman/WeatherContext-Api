
import { useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import {useWeather} from './context/Weather'

function App() {
  const weather = useWeather()
  console.log(weather)

  useEffect(()=>{
    weather.fetchCurrentUserLocation()
  },[])
  return (
    <div className="App">
      
      <Input/> 
      <Button onClick={weather.fetchData} value="Search" />
      <Card/>
      <Button value="Refresh" />
    </div>
  );
}

export default App;
