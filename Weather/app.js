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
const display = document.querySelector('.display');




btn.addEventListener('click', (event)=>{
event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=9e0f88b5347b1a3d9910161dcb56e595`)
    .then(response => response.json())
    .then(data => {
        // let res = `<div><h1>${data.name}</h1>
        // let h1 = document.createC
        // <h2>temp = ${Math.floor(data['main'].temp-273)}</h2>
        
        
        // </div>`


        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0];['description'];
        // let nameValue = data.name;
        let humidityValue = data['main']['humidity'];
        let longValue = data['coord']['lon'];
        let latiValue = data['coord']['lat'];
        let windSpeedValue = data['wind']['speed'];

    
        curr.innerHTML = `CURRENTLY`;
        city.innerHTHML = `${nameValue}`;
        des.innerHTML =`${descValue}`;
        temp.innerHTML = `${Math.floor(tempValue-273)}°C`;
        humidity.innerHTML = `Humidity: ${humidityValue}%`
        long.innerHTML = `Longitude: ${longValue}`;
        lati.innerHTML = `Latitude: ${latiValue}`;
        windSpeed.innerHTML = `Wind Speed: ${windSpeedValue}m/s`;

        
    })
    .catch(error => alert('wrong city name'))
});


