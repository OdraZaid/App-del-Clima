const apikey = '2ea7c1c40b4f9cf3d21fb355f5d93497';
const ciudad = 'El Bagre';
const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

fetch(url)
.then(response => response.json())
.then(data => {
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    console.log(`La temperatura en ${ciudad} es de ${temperatura} grados Kelvin y el clima es ${descripcion}.`);
})

.catch(error => {console.error('Error al obtener los datos del clima:', error);});