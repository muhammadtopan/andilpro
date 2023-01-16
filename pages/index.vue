<template>
  <div>
    <Heros />
    <!-- <HeroWaves /> -->
    <main id="main">
      <Clients />
      <About />
      <Counts />
      <Services />
      <Portfolios />
      <Articles />
    </main>
  </div>
</template>

<script>
import Heros from '~/components/Users/LandingPage/Heros.vue';
import HeroWaves from '~/components/Users/LandingPage/HeroWaves.vue';
import Clients from '~/components/Users/LandingPage/Clients.vue';
import About from '~/components/Users/LandingPage/About.vue';
import Counts from '~/components/Users/LandingPage/Counts.vue';
import Services from '~/components/Users/LandingPage/Services.vue';
import Portfolios from '~/components/Users/LandingPage/Portfolios.vue';
import Articles from '~/components/Users/LandingPage/Articles.vue';

export default {
  layout: 'layoutUsers',
  components: {
    Heros,
    HeroWaves,
    Clients,
    About,
    Counts,
    Services,
    Portfolios,
    Articles,
  }
}
</script>

<style>
.bg-cover {
  background-image: url("/dist/img/bg-grad.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.btn-order-now {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
  display: flex;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #ffffff;
  border: 2px solid #ffffff;
  background-color: #3498db;
  justify-content: space-evenly;
  position: -webkit-sticky;
}

.btn-order-now:hover {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
  display: flex;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #3498db;
  border: 2px solid #3498db;
  background-color: #ffffff;
  justify-content: space-evenly;
  position: -webkit-sticky;
}

.show_hide {
  position: relative;
  height: 22px;
  width: 100%;
  padding: 0 10px;
  color: #000;
  background-color: #c39a19;
  font-size: 12px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.show_hide:hover {
  background-color: #d4a81f
}

.btn {
  display: none;
  font-family: 'Tahoma', san-serif;
  font-size: 13px;
  color: #000
}
</style>