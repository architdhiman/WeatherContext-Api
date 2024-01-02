const baseUrl = "https://api.weatherapi.com/v1/current.json?key=cdfffea4ada147d98fa153754240101";
export const getWeatherApi = async(city) =>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json() 
}

export const getWeatherDataLocation = async(lat,long) =>{
    const response = await fetch(`${baseUrl}&q=${lat}, ${long}&aqi=yes`)
    return await response.json() 
}