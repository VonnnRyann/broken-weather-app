import {useContext} from 'react'
import MyContext from '../context/MyContext'
//import dateFormatter from '../helpers/dateFormatter'
import { DaysForecast } from './DaysForecast'
//import {WiSunrise,WiSunset} from 'react-icons/wi'

const Weather = () => {
    const context = useContext(MyContext)
    const {data,location,setLocation,searchLocation} = context;
  
  return (

    <div className='app'>
        <div className="search">
            <input 
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder= 'Enter City'
            type='text'
            />
        </div>
        <div className="container">
            <div className="top">
                <div className="location">
                    {data.main ? <p className='bold'>{data.name},{data.sys.country}</p> :null}
                    
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C 
                    <div style={{marginTop: '0px'}}>
                    {data.main ? <p className='small-it'>min temp: {data.main.temp_min.toFixed()}°C</p> : null}
                    {data.main ? <p className='small-it'>max_temp: {data.main.temp_max.toFixed()}°C</p> : null}
                    {data.weather ? <p className='small-it'>{data.weather[0].description}</p> :null}
                    </div>
                    </h1> : null}
                    

                
                <div className='description'>
                    
                    
                </div>    
                </div>
        </div>
            {data.name && <DaysForecast />}

                {data.name  &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null }
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null }
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className='bold'>{data.wind.speed} KPH</p> : null} 
                        <p>Wind Speed</p>
                    </div>
                    <div className="wind">
                        {data.clouds ? <p className='bold'>{data.clouds.all}%</p> : null} 
                        <p>Cloudiness</p>
                    </div>
                </div>
}

            </div>
    </div>
    

    
  )
}

export default Weather