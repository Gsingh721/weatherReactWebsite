import React, {useEffect} from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherstate, setweatherstate] = React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=tempInfo;

    let sec=sunset;
    let date= new Date(sec*1000);
    let timesunset = `${date.getHours()}:${date.getMinutes()}`

    useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setweatherstate("wi-day-cloudy"); 
                    break;
                case "Haze":
                    setweatherstate("wi-fog"); 
                    break;
                case "Clear":
                    setweatherstate("wi-day-sunny"); 
                    break;
                case "Rain":
                    setweatherstate("wi-day-rain"); 
                    break; 
                case "Mist":
                    setweatherstate("wi-dust"); 
                    break;  
                default:
                    setweatherstate("wi-day-sunny"); 
                    break;
                /*case "Clouds":
                    setweatherstate("wi-day-cloud"); 
                    break;   
                case "Clouds":
                    setweatherstate("wi-day-cloud"); 
                    break;
                case "Clouds":
                    setweatherstate("wi-day-cloud"); 
                    break; 
                    */ 
            }
        }
    }, [weathermood])
    return (
    <>
        <div className="widget">
            
        <div className="weatherIcon">
            <i className={`wi ${weatherstate}`}></i>
        </div>

        <div className="weatherInfo">

           <div className="temperature"> 
                <span>{temp}&deg;</span>
           </div>
           <div className="description">

                <div className="weatherCondition">
                    {weathermood}
                </div>

                <div className="place">
                    {name},{country}
                </div>

            </div>
        </div>
        <div className="date">
            {new Date().toLocaleString()}
        </div>

        <div className="extra-temp">

            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-sunset"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timesunset} PM
                        <br></br>
                        sunset
                    </p>
                </div>

                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-humidity"></i>
                    </p>
                    <p className="extra-info-leftside">
                    {humidity} %
                        <br></br>
                        Humidity
                    </p>
                </div>
            </div>

            <div className="weather-extra-info">
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-rain"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {pressure} hpa
                        <br></br>
                        Pressure
                    </p>
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-strong-wind"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {speed} m/s
                        <br></br>
                        Air Speed
                    </p>
                </div>
            </div>
        </div>
    </div> 
 </>
)
}

export default WeatherCard;
