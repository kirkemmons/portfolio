<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top p-st"
      :class="{
        'bg-light2': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand mr-5"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        
        <a
          class="location-div ml-auto mt-1 mr-4"
          href="https://goo.gl/maps/Bb7z2zuARmZgyv458"
          target="_blank"
          v-tooltip.bottom="'Home'"
        >
          <span 
          class="location-name"
          :class="{ 'text-light': nightMode }">
          Ithaca, NY</span>
        </a>
        
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: gray; font-size: 23px;"
            ><i class="fas fa-bars"></i
          ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                :class="{ 'text-light': nightMode }"
                >about</a
              >
            </li>
            
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                :class="{ 'text-light': nightMode }"
                >skills</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                :class="{ 'text-light': nightMode }"
                >portfolio</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                :class="{ 'text-light': nightMode }"
                >contact</a
              >
            </li>
            <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'text-light': nightMode }"
                ><i
                  :class="{
                    'fas fa-moon': nightMode,
                    'fa fa-moon': !nightMode,
                  }"
                  v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
    };
  },
  components: {
    Logo,
  },
  methods: {
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}

.location-div:hover .location-name {
  letter-spacing: 1.5px;
  transition: 0.5s all;
  text-decoration: none;
}

.location-name {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s all;
  color: black;
}

a:hover {
  text-decoration: none;
}

</style>
