<template>
  <div>
    <h1>🌤️ Clima en {{ ciudad }}</h1>
    <p v-if="error">{{ error }}</p>
    <div v-if="clima && clima.main">
      <p>Temperatura: {{ clima.main.temp }} °C</p>
      <p>Descripción: {{ clima.weather[0].description }}</p>
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
      ciudad: "El Bagre",
      clima: null,
      error: null,
    };
  },
  mounted() {
    const lat = "7.60347";
    const lon = "-74.80951";
    const apiKey = "2ea7c1c40b4f9cf3d21fb355f5d93497";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.clima = data;
      })
      .catch(error => {
        console.error("Error al obtener los datos del clima:", error);
        this.error = "Error al obtener los datos del clima";
      });
  }
};
</script>

<style scoped>
.clima-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
}
</style>
