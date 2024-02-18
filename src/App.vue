<template>
  <nav>
    <router-link
      to="/"
      v-if="
        $route.name === 'home' ||
        $route.name === 'about' ||
        $route.name === '/cripto'
      "
    >
      Iniciar Sesion
    </router-link>
    <router-link
      to="/about"
      v-if="$route.name === 'home' || $route.name === 'about'"
      >Mas sobre nosotros.
    </router-link>
    <router-link
      to="/cripto"
      v-if="$route.name != 'home' && $route.name != 'about'"
      >Listado de monedas
    </router-link>
    <router-link
      to="/compra"
      v-if="$route.name != 'home' && $route.name != 'about'"
      >Compra
    </router-link>
    <router-link
      to="/venta"
      v-if="$route.name != 'home' && $route.name != 'about'"
      >Venta
    </router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("components/Imagenes/FondoInicioSesion.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: right;
  position: relative;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 3px;
  padding-left: 3px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
