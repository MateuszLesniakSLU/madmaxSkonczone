<template>
  <div id="nav">
    <router-link to="/AboutUs">
      <img src="./assets/logo_strony.png" alt="MadMax Twój Sklep Internetowy" />
    </router-link>

    <router-link to="/Shops">
      <h1><shopping-icon class="icons" />Sklepy Stacjonarne</h1>
    </router-link>

    <router-link to="/Services">
      <h1><wrench-icon class="icons" /> Serwis</h1>
    </router-link>

    <router-link to="/Contact">
      <h1><phone-icon class="icons" /> Kontakt</h1>
    </router-link>

    <router-link to="/AboutUs">
      <h1><account-icon class="icons" /> O Nas</h1>
    </router-link>

    <a target="blank" href="https://www.facebook.com/CentrumKomputeroweMadMax">
      <h1><facebook-icon class="icons" /> Odwiedź Nas na Facebooku!</h1>
    </a>
  </div>
  <router-view />
  <footer>
    <img src="./assets/logo_strony_large.png" alt="" />
    <h1>NIP. 839-275-03-19</h1>
    <h1>Strona wykonana przez: <discord-icon /> Tameusz#3832</h1>
  </footer>
</template>

<script>
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import WrenchIcon from "vue-material-design-icons/Wrench.vue";
import ShoppingIcon from "vue-material-design-icons/Shopping.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import AccountIcon from "vue-material-design-icons/Account.vue";
import DiscordIcon from "vue-material-design-icons/Discord.vue";

import "vue-material-design-icons/styles.css";

export default {
  name: "App",
  components: {
    PhoneIcon,
    WrenchIcon,
    ShoppingIcon,
    FacebookIcon,
    AccountIcon,
    DiscordIcon,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400&display=swap");

body {
  margin: 0;
}

h1,
a {
  color: gainsboro;
  text-decoration: none;
  font-size: 28px;
}

footer {
  margin-top: 20px;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

footer h1 {
  font-size: 30px;
  color: black;
}

footer img {
  background-color: black;
  height: 20vh;
}

.icons {
  width: 3vh;
  height: 3vh;
}

#app {
  background-color: rgba(249, 180, 45, 0.8);
  width: 100%;
  height: auto;
  font-family: "Readex Pro", sans-serif;
}
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #1c1c1c;
}

#nav img {
  width: 10vh;
  height: 10vh;
}
</style>
