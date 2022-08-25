const input = document.querySelector('.input');
const btn = document.querySelector('.inputBtn');
const curr = document.querySelector('.currently');
// const city = document.querySelector('.name');
const des = document.querySelector('.description');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const long = document.querySelector('.long');
const lati = document.querySelector('.lati');
const windSpeed = document.querySelector('.windSpeed');




btn.addEventListener('click', (event)=>{
event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8903fb63731c6701c61fb4bda5f53891')
    .then(response => response.json())
    .then(data => {
        // let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        let humidityValue = data['main']['humidity'];
        let longValue = data['coord']['lon'];
        let latiValue = data['coord']['lat'];
        let windSpeedValue = data['wind']['speed'];

    
        curr.innerHTML = `CURRENTLY`;
        // city.innerHTHML = nameValue;
        des.innerHTML =`${descValue}`;
        temp.innerHTML = `${Math.floor(tempValue-273)}°C`;
        humidity.innerHTML = `Humidity: ${humidityValue}%`
        long.innerHTML = `Longitude: ${longValue}`;
        lati.innerHTML = `Latitude: ${latiValue}`;
        windSpeed.innerHTML = `Wind Speed: ${windSpeedValue}m/s`;

    })
    .catch(error => alert('wrong city name'))
});


