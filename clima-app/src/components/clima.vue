<template>
  <div class="clima-container">
    <h1>🌤️ Aplicación del Clima</h1>

    <!-- Input para buscar ciudad -->
    <input v-model="ciudad" type="text" placeholder="Escribe una ciudad..." />
    <button @click="buscarClima">Buscar</button>

    <p v-if="error">{{ error }}</p>

    <div v-if="clima && clima.main">
      <h2>{{ clima.name }}</h2>
      <p> Temperatura: {{ clima.main.temp }} °C</p>
      <p>Sensación térmica: {{ clima.main.feels_like }} °C</p>
      <p>Clima: {{ clima.weather[0].description }}</p>
      <p>💧 Humedad: {{ clima.main.humidity }} %</p>
      <p>🌬️ Viento: {{ clima.wind.speed }} m/s</p>
      <p>Presión: {{ clima.main.pressure }} hPa</p>
      <p>Nubosidad: {{ clima.clouds.all }} %</p>

      <img
        v-if="clima.weather[0].icon"
        :src="`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`"
        alt="icono clima"
      />
    </div>
    <div v-else-if="!error">
      <p>Cargando datos...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clima",
  data() {
    return {
      ciudad: "El Bagre", // Se carga el clima en esta ciudad por defecto
      clima: null,
      error: null,
    };
  },
  mounted() {
    this.buscarClima(); // carga inicial
  },
  methods: {
    buscarClima() {
      const apiKey = "2ea7c1c40b4f9cf3d21fb355f5d93497";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${apiKey}&units=metric&lang=es`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.clima = data;
          this.error = null;
        })
        .catch((err) => {
          console.error("Error al obtener el clima:", err);
          this.error =
            "No se pudo obtener el clima. Verifica la ciudad o tu API Key.";
          this.clima = null;
        });
    },
  },
};
</script>

<style scoped>
.clima-container {
  max-width: 500px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #0000;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}
input {
  padding: 10px 15px;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
}

button {
  padding: 10px 40px;
  margin-left: 20px;
  background: linear-gradient(135deg, #4a90e2, #007bff);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background: linear-gradient(135deg, #007bff, #0056b3);
}
</style>
