const lat = '7.60347';
const lon = '-74.80951';
const ciudad = 'El Bagre';
const apiKey = 'dae288027e196dec9481fa0cacd59687';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

fetch(url)
.then(response => response.json())
.then(data => {
    
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    console.log(`La temperatura en ${ciudad} es de ${temperatura} grados Kelvin y el clima es ${descripcion}.`);
})

.catch(error => {console.error('Error al obtener los datos del clima:', error);});