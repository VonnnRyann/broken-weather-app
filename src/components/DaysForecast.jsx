import {useContext} from 'react'
import MyContext from '../context/MyContext';

export const DaysForecast = () => {
    const context = useContext(MyContext)
    const {data} = context;


  return (
    <div>
        {/* im a 5 days forecast */}
        
        {data.name &&
            <div className="containertwo">
                <h2 className='daysFore'>5 Days Forecast</h2>
                <div className='container-5days'>
                    <div className='d-1 d'>
                    <div className="location">
                {/* {data.main ? <p>{data.name},{data.sys.country}</p> :null} */}
                {/* {data.list ? <p>{data.list.dt_txt }</p> :null} */}
                
            </div>
            
            <div className="temp">
                    <div style={{marginTop: '0px'}}>
                    {data.main ? <p className='small-it'>min temp: {data.main.temp_min.toFixed()}°C</p> : null}
                    {data.main ? <p className='small-it'>max_temp: {data.main.temp_max.toFixed()}°C</p> : null}
                    
                    </div>
                    </div>




            <div className="temp">
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            <br />
            <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> :null}
                {/* {<p>{dateFormatter()}</p>} */}
                
            </div>   
            <div className='imgs'>
                <img src="" alt="icon" />
                </div> 
            </div>
                    </div>
                    <div className='d-2 d' >
                    <div className="location">
                {data.main ? <p>{data.name},{data.sys.country}</p> :null}
                
            </div>
            <div className="temp">
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            <br />
            <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p> :null}
                {/* {<p>{dateFormatter()}</p>} */}
                
            </div>    
            <div className='imgs'>
                <img src="" alt="" />
                </div> 
            </div> 
                    </div>
                    <div className='d-3 d'>
                    <div className="location">
                {data.main ? <p>{data.name},{data.sys.country}</p> :null}
            </div>
            <div className="temp">
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            
             <br />   
            <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p> :null}
                {/* {<p>{dateFormatter()}</p>} */}
                
            </div>    
            <div className='imgs'>
                <img src="" alt="" />
                </div> 
            </div>
                    </div>
                    <div className='d-4 d'>
                    <div className="location">
                {data.main ? <p>{data.name},{data.sys.country}</p> :null}
                
            </div>
            <div className="temp">
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            <br />
            <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p> :null}
                {/* {<p>{dateFormatter()}</p>} */}
                
            </div>    
            <div className='imgs'>
                <img src="" alt="" />
                </div> 
            </div>
                    </div>
                    <div className='d-5 d'>
                    <div className="location">
                {data.main ? <p>{data.name},{data.sys.country}</p> :null}
            </div>
            <div className="temp">
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            <br />    
            <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p> :null}
                {/* {<p>{dateFormatter()}</p>} */}
                
            </div>    
            <div className='imgs'>
                <img src="" alt="" />
                </div> 
            </div>
                    </div>
                </div>
        </div>
    }
    <br />
    <br />
    <br />
    </div>
  )
}
