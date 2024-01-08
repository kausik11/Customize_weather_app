
let submit = document.getElementById("submit");
let HeadTemp = document.getElementById("temp1");
let HeadHumidity = document.getElementById("humidity1");
let HeadWindSpeed = document.getElementById("windspeed1");
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0f4cecc21msh9e3e7af0591a36ep125514jsn11dcb73343ff',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
//     console.log(error)
// }

function getWeather(city){
	fetch(url+city,options)
    .then(res => res.json())
    .then(value => {
        let risetime = new Date(value.sunrise).toLocaleTimeString();
        let settime = new Date(value.sunset).toLocaleTimeString();
  cloud_pct.innerHTML = value.cloud_pct
  temp.innerHTML = value.temp
  feels_like.innerHTML = value.feels_like
  humidity.innerHTML = value.humidity
  min_temp.innerHTML = value.min_temp
  max_temp.innerHTML = value.max_temp
  wind_speed.innerHTML = value.wind_speed
  wind_degrees.innerHTML = value. wind_degrees
  sunrise.innerHTML = risetime 
  sunset.innerHTML = settime
  HeadTemp.innerHTML = value.temp;
//    HeadHumidity.innerHTML=value.humidity;
//     HeadWindSpeed.innerHTML = value.wind_speed;
temp1.innerHTML = value.temp
humidity1.innerHTML = value.humidity
windspeed1.innerHTML = value.wind_speed
        
        
        
    // console.log(value)
})
    .catch(err=> console.error(err));
}
 

getWeather("Delhi");
let a = submit.addEventListener("click",(e)=>{
    heading.innerHTML = city.value;
    getWeather(city.value);
    e.preventDefault();
})
