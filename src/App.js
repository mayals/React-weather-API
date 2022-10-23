import './App.css';
import NavbarComp from './components/NavbarComp';
import FooterComp from "./components/FooterComp";
import ContentComp from "./components/ContentComp";
import SearchComp from "./components/SearchComp";

import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = () => {

    const [ WeatherState, setWeatherState ] = useState();
    const [ CityState, setCityState ]   = useState() 

  
    const getWeatherApi = async(inputCity) =>{

          if ( inputCity !== "" ){

                setCityState(inputCity)

                // const city_name = "Dubai";
                const API_key = "16b78ba3c254147335cdbdff4dc15fe8";

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityState}&appid=${API_key}&units=metric&lang=ar`)
                    
                    
                // console.log( response.data)      
                // https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately
                    
                setWeatherState( {
                      temp : response.data.main.temp,
                      city : response.data.name,
                      icon : response.data.weather[0].icon,
                      desc : response.data.weather[0].description,
                      humidity : response.data.main.humidity,
                      pressure : response.data.main.pressure,
                      wind :  response.data.wind.speed,
                      visibility : response.data.visibility,
                      sunrise : response.data.sys.sunrise,
                      sunset : response.data.sys.sunset,
                      error: false,
                      toast_message: '' 
                })


          
          }
    
    }




      useEffect(() => {

           getWeatherApi();
           console.log(WeatherState);   
      }, []);



      useEffect(() => {

          getWeatherApi();
          console.log(CityState);   
      }, CityState);

      


      return (
              <div>
              <NavbarComp />
                  <BrowserRouter>
                  <Routes> 

                      <Route path="/"             element={ <SearchComp  setCityState={setCityState}  getWeatherApi={getWeatherApi}   /> }  /> 
                      <Route path="/city-weather" element={ <ContentComp  WeatherState={WeatherState}    /> }  />
                    
                  </Routes>
                  </BrowserRouter>

              <FooterComp/>
              </div> 
      );




}
export default App;
