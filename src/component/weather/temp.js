//https://api.openweathermap.org/data/2.5/weather?q=jodhpur&appid=f4dd1b226adda9cb3dfebd1c71dca197
import React, {useState, useEffect} from 'react'
import './style.css';
import WeatherCard from './weathercard'

const Temp = () => {
const [searchValue, setSearchValue] = useState("jodhpur");
const [tempInfo, settempInfo] = useState({});
const getWeatherInfo = async () => {
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}
        &units=metric&appid=f4dd1b226adda9cb3dfebd1c71dca197`;

        const res= await fetch(url);
        const data = await res.json();
        const { temp,humidity,pressure }=data.main;
        const{ main: weathermood }= data.weather[0];
        const{ name }= data;
        const{ speed }= data.wind;
        const{ country,sunset}= data.sys;

        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        };
        settempInfo(myNewWeatherInfo); 
        console.log(temp);
    }catch(error){
        console.log(error);
    }
};
useEffect(()=>{
    getWeatherInfo();
},[]);
    return (
        <>
            <div className="wrap">

                <div className="search">

                    <input 
                    type="search" 
                    placeholder="Search here..." 
                    autoFocus 
                    id="search" 
                    className="searchTerm"
                    value={searchValue}
                    onChange={ (e)=> setSearchValue(e.target.value)}>
                    </input>

                    <button 
                    className="searchButton"
                    type="button"
                    onClick={
                        getWeatherInfo
                    }
                    >
                    Search
                    </button>

                </div>
            </div>
            <WeatherCard tempInfo={tempInfo}/>
           
            
        </>
    )
}

export default Temp 