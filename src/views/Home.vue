<template>
  <div class="home">
    <Header msg=""/>
       <About msg=""/>
        <Services msg=""/>
        <Works msg=""/>
        <Team msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Works from '@/components/Works.vue'
import Team from '@/components/Team.vue'



export default {
  name: 'Home',
  components: {
    Header,
    About,
    Services,
    Works,
    Team,
  }
}
</script>
