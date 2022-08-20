<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to ="/inicioview">Inicio</router-link>
      <router-link to ="/Createproductos">create</router-link>
      <router-link to ="/indexproductos">index</router-link>
      <router-link to ="/Updateproductos">Update</router-link>
      <router-link to ="/dashboard.Admin">dashboard</router-link>
      <router-link to ="/dashboardusuario">dashboardusuario</router-link>
      <router-link to ="/rolusuario">rolusuario</router-link>
      <router-link to ="/iniciousuario">iniciousuario</router-link>




      <router-link to ="/Siderbar">Siderbar</router-link>
    </nav>
    <router-view/>
  </div>
</template>
import 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
