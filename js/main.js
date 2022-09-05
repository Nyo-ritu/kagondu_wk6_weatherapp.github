//const api_key = '6346473ca69916a0947487b98ceea782'

//my api call api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// Grabbing Form Data From a Submit event
const form = document.querySelector('#city_search')
// console.log(form)

// Add event listener for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#city');
    let city_input = event.path[0][0].value;
    return city_input
} )


//grab the data

let getJson = async () =>{
    let city = document.querySelector('#city').value;
    // go fetch
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6346473ca69916a0947487b98ceea782`)

    return response.data
    
}



let display_weather = async () =>{
    
    let info = await getJson();

    // Get Chosen city
    let city_name = info.name
    let city_display = document.getElementById('chosen_city')
    city_display.innerHTML = city_name
    
    // // Get temp

    let temp = info.main.temp
    let temp_display = document.getElementById('cloud_cover')
    temp_display.innerHTML = `${temp}°F`
    

    // Get high temp

    let maxtemp = info.main.temp_max
    let maxtemp_display = document.getElementById('high')
    maxtemp_display.innerHTML = `High - ${maxtemp}°F`

    // Get Low temp

    let mintemp = info.main.temp_min
    let mintemp_display = document.getElementById('low')
    mintemp_display.innerHTML = `Low - ${mintemp}°F`

    // // Get cloud coverage

    let description = info.clouds.all
    let weather_description_display = document.getElementById('weather_desc')
    weather_description_display.innerHTML = `${description}% cloud cover`
    

    // Get humidity
    let humidity = info.main.humidity
    let humid_display = document.getElementById('humid')
    humid_display.innerHTML = ` ${humidity}%`
  

    // Get windspeed
    let windspeed = info.wind.speed
    let windspeed_display = document.getElementById('wind_speed')
    windspeed_display.innerHTML =  `windspeed - ${windspeed} meters per second`
    

    // Get temp feels like
    let temp_feels_like = info.main.feels_like
    let temp_feels_like_display = document.getElementById('feels_like')
    temp_feels_like_display.innerHTML = `feels like ${temp_feels_like} °F right now`

    //Get last 3hrs of rainfall
    let desc = info.weather[0].description
    let desc_display = document.getElementById('weather_de')
    desc_display.innerHTML = desc
    

}

