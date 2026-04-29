const lat = '7.60347';
const lon = '-74.80951';
const ciudad = 'El Bagre';
const apiKey = '2ea7c1c40b4f9cf3d21fb355f5d93497';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    console.log(`La temperatura en ${ciudad} es de ${temperatura} grados Centrigados y el clima es ${descripcion}.`);
})

.catch(error => {console.error('Error al obtener los datos del clima:', error);});