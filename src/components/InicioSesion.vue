<template>
  <body>
    <div id="app">
      <div id="body">
        <div id="ingresoDeUsuario">
          <h2>Ingrese su ID</h2>
          <div id="imagen">
            <img src="@\components\Imagenes\Usuario-removebg-preview.png" />
          </div>
          <input v-model.trim="idUsuario" id="id" />
          <button v-on:click="agregarUsuario">Ingresar</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      idUsuarios: [],
      idUsuario: "",
    };
  },
  mounted() {
    if (localStorage.getItem("idUsuarios")) {
      try {
        this.idUsuarios = JSON.parse(localStorage.getItem("idUsuarios"));
      } catch (e) {
        localStorage.removeItem("idUsuarios");
      }
    }
  },
  methods: {
    agregarUsuario() {
      if (!this.idUsuario) {
        alert("Ingrese id");
      } else {
        if (this.idUsuarios.includes(this.idUsuario)) {
          this.cargarUsuarios();
          this.$router.push({ name: "cripto" });
        } else {
          this.idUsuarios.push(this.idUsuario);
          this.cargarUsuarios();
          this.$router.push({ name: "cripto" });
        }
      }
    },
    cargarUsuarios() {
      var parsed = JSON.stringify(this.idUsuarios);
      localStorage.setItem("idUsuarios", parsed);
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 91.8vh;
  background-repeat: no-repeat;
  margin: 0px;
  border-radius: 10px;
}
#app {
  border-radius: 10px;
}
#ingresoDeUsuario {
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-radius: 10px;
  border-color: black;
  min-width: 300px;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 300px;
}
#ingresoDeUsuario h2 {
  position: relative;
  margin: 0px;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 2px 4px #fc0490;
}
#ingresoDeUsuario button {
  border-radius: 10px;
  border-color: rgb(44, 23, 102);
  width: 100px;
  font-size: 15px;
}
#ingresoDeUsuario #id {
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: inset;
  border-color: rgb(44, 23, 102);
}
#imagen img {
  width: 50%;
  height: 50%;
  display: block;
  margin: auto;
}
#imagen {
  display: flex;
  margin: 3px;
  border-radius: 50%;
  position: relative;
  max-width: 100px;
  max-height: 100px;
  min-width: 100px;
  min-height: 100px;
  background: linear-gradient(
    35deg,
    #1b0438,
    #1b0438,
    #5c3a8e,
    #db2190,
    #fc0490
  );
  border-style: solid;
}
</style>
