<template>
  <nav
    id="nav"
    class="ml-lg-n4 header d-flex flex-column justify-content-between navbar navbar-expand-lg navbar-light bg-light p-3 sticky-md-top"
  >
    <div class="header_top offcanvas-body">
      <div class="align-items-md-center offcanvas-body mr-5">
        <router-link to="/">
          <img class="header_big-image align-self-md-start ml-2 mr-5" src="../../public/Centro-Picasso-200x91.png" alt="logo" />
        </router-link>
        <p class="header_text-school align-self-md-center">ESCUELA DE LENGUA ESPAÑOLA</p>
      </div>
      <div class="align-items-md-center d-flex mb-3 ml-5">
        <div class="mr-3"><em class="fas fa-map-marker mr-2"></em><span>Zagorodnyi prosp., 5</span></div>
        <div><em class="fas fa-phone-alt mr-2"></em><span>+7 (911) 844 26 28</span></div>
      </div>
    </div>
    <div class="header_rule table-bordered"></div>
    <div class="header_bottom">
      <router-link to="/">
        <img class="header_small-image" src="../../public/Centro-Picasso-120x55.png" alt="logo" />
      </router-link>
      <button
        class="header_toggle-button navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="header_navbar-collapse align-self-md-end collapse navbar-collapse badge-light" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-end bg-body bg-transparent">
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/about">Sobre el centro</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/courses">Cursos<em class="fas fa-angle-down p-1"></em></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/prices">Precios</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link m-2" href="https://www.instagram.com/centropicassorusia/">Blog</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/contacts">Contactos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/inscribirse">Inscribirse</router-link>
          </li>
          <li v-if="!isUserAuthenticated" class="nav-item">
            <router-link class="nav-link m-2" to="/login">{{ "Login" }}</router-link>
          </li>
          <li v-if="isUserAuthenticated" class="nav-item">
            <router-link class="nav-link m-2" to="/"
              ><button class="logout-button" @click="handleLogout()" data-test="logout">Logout</button></router-link
            >
          </li>
          <li v-if="currentUser.adminAccess" class="nav-item">
            <router-link class="nav-link m-2" to="/admin">{{ "Admin" }}</router-link>
          </li>
          <li v-if="currentUser.professorAccess" class="nav-item">
            <router-link class="nav-link m-2" to="/teacher">{{ "Mi plataforma" }}</router-link>
          </li>
          <li v-if="currentUser.studentAccess" class="nav-item">
            <router-link class="nav-link m-2" :to="{ name: 'StudentBoard', params: { id: currentUser.id } }">{{ "Mi plataforma" }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Header",
  props: {},
  computed: { ...mapState(["currentUser", "isUserAuthenticated", "isAdmin", "isProfessor", "isStudent"]) },
  methods: {
    ...mapActions(["getUserFromLocalStorage", "deleteDataFromLocalStorage"]),
    handleLogout() {
      this.deleteDataFromLocalStorage();
      this.$router.push("/");
    },
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

.header {
  min-width: 400px;
}

.header_text-school {
  color: #cc1810;
}

#nav {
  max-height: 180px;
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #cc1810;
    }
  }
}
.logout-button {
  color: black;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  font-weight: bold;
  background-color: transparent;
  border: transparent;
}
.header_rule {
  width: 100vw;
  height: 0.1rem;
  top: 0;
  bottom: auto;
  background-color: rgba(179, 181, 182, 0.32);
}
.header_bottom {
  height: 80px;
  .header_small-image {
    margin-right: 8rem;
  }
  .header_toggle-button {
    margin-left: 10rem;
  }
  @media screen and (min-width: 992px) {
    .header_small-image {
      display: none;
    }
  }
}

@media screen and (max-width: 991px) {
  .header_top {
    display: none;
  }
  .header_rule {
    display: none;
  }

  @media screen and (max-width: 515px) {
    .header_toggle-button {
      margin-left: 4rem !important;
    }
  }
}
</style>
