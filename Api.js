import axios from 'axios';
import  { useState } from "react";

const API_KEY = '983c2b1b4fea8a500eacada87075231f';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';



export const getWeather = async (cityname, countrycode) => {

     try {
          console.log(cityname); 
          console.log(countrycode);     
          let response = await axios.get( API_URL + `q=${cityname},${countrycode}&appid=${API_KEY}`);
          console.log(response);   
          return response.data;
     } catch (error) {
          console.log('Error while calling the api ', error.message);
          return error.response;
     }
 }