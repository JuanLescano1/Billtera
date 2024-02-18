<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
  />
  <img />
  <div id="cuerpo">
    <div id="contenedor">
      <img
        src="https://directivosygerentes.es/wp-content/uploads/2020/08/Qu%C3%A9-son-las-monedas-virtuales-o-criptomonedas.jpeg"
      />
      <div class="titulo">
        <p id="moneda">Moneda</p>
        <p id="precio">Precio</p>
      </div>
      <div id="datos">
        <div
          v-for="nombre in nombres"
          :key="nombre"
          class="coins"
          @click="mostrarDetalles(nombre)"
        >
          <p id="nombre">{{ nombre }}</p>
          <p id="precioCompra">$ {{ cryptos[nombre].totalAsk }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/services/EventService.js";
export default {
  data() {
    return {
      cryptos: [],
      nombres: "",
    };
  },
  mounted() {
    axios
      .get("/btc/ars")
      .then((response) => {
        this.cryptos = response.data;
        this.nombres = Object.keys(this.cryptos);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  },
  methods: {
    mostrarDetalles(nombre) {
      this.$router.push({ name: "detalles", params: { coin: nombre } });
    },
  },
};
</script>
<style>
.titulo {
  display: grid;
  height: 33.5px;
  border-style: ridge;
  border-radius: 5px;
  margin-left: 5%;
  margin-right: 5%;
  background-color: white;
  border-color: rgb(44, 23, 102);
  position: relative;
  background-color: transparent;
  margin-top: 25px;
}
#moneda {
  position: absolute;
  justify-self: start;
  align-self: center;
  font-weight: 1000;
  margin-left: 3px;
  text-shadow: 1px 1px 5px rgb(255, 255, 255);
  font-size: 25px;
  color: rgb(44, 23, 102);
}
#precio {
  position: absolute;
  justify-self: center;
  align-self: center;
  font-weight: 1000;
  text-align: left;
  width: 30%;
  text-shadow: 1px 1px 5px rgb(255, 255, 255);
  font-size: 25px;
  color: rgb(44, 23, 102);
}
#cuerpo {
  max-width: 100vmax;
  height: 89.8vh;
  position: relative;
}
#contenedor {
  display: grid;
  position: absolute;
  min-height: 80%;
  min-width: 80%;
  max-height: 80%;
  max-width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
}
#contenedor img {
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
  border-radius: 50px;
  border-style: solid;
  border-color: black;
  border-width: 2px;
}
#datos {
  position: absolute;
  overflow: overlay;
  max-height: 80%;
  min-height: 80%;
  min-width: 100%;
  border-top: 50px;
  border-bottom: 50px;
  align-self: center;
  cursor: pointer;
}
.coins {
  display: grid;
  height: 33.5px;
  border-style: ridge;
  border-radius: 5px;
  margin-left: 5%;
  margin-right: calc(5% - 5px);
  background-color: white;
  border-color: rgb(44, 23, 102);
  position: relative;
  background-color: transparent;
}
.coins #nombre {
  position: absolute;
  margin-left: 3px;
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  justify-self: left;
  align-self: center;
  font-size: 20px;
  text-shadow: 2px 1px 3px rgb(0, 0, 0);
  color: rgb(180, 179, 179);
}
.coins #precioCompra {
  justify-self: center;
  position: absolute;
  text-align: left;
  width: 30%;
  font-weight: 1000;
  align-self: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-shadow: 2px 1px 3px rgb(0, 0, 0);
  color: rgb(180, 179, 179);
}
#datos::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
}

#datos::-webkit-scrollbar-thumb {
  background: rgb(44, 23, 102);
  border-radius: 5px;
}

#datos::-webkit-scrollbar-track {
  background: transparent;
}
</style>
