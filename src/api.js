const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=d7103e6ee0028782009a473e51bdca4d';
import _ from 'lodash';

const kToF = function(kelvin){
  return Math.round((kelvin-273.15)*1.8+32) + ' ˚F';
};

export default function(latitude, longitude){
  const url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  return fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return{
        city: json.name,
        temperature: kToF(json.main.temp),
        description: _.capitalize(json.weather[0].description),
      }
    });
}
