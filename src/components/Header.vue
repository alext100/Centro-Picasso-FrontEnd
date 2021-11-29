<template>
  <nav id="nav" class="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light">
    <img src="../../public/Centro-Picasso-120x55.png" alt="logo" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/about">Sobre el centro</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/courses">Cursos<i class="fas fa-angle-down p-1"></i></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/prices">Precios</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/contacts">Contactos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/inscribirse">Inscribirse</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link m-2" to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #cc1810;
    }
  }
}
</style>
