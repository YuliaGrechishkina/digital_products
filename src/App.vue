<template>
<div  id="app">
        <Header msg=""/>
        <About msg=""/>
        <Services msg=""/>
        <Works msg=""/>
        <Team msg=""/>
        <Contacts msg=""/>
    </div>
         
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Works from '@/components/Works.vue'
import Team from '@/components/Team.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Services,
    Works,
    Team,
    Contacts,
  }
}

</script>


<style lang="scss">


@font-face {
    font-family: ProximaNova;
    src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot);
    src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.eot?#iefix) format("embedded-opentype"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff2) format("woff2"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.woff) format("woff"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.ttf) format("truetype"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_1_0.svg#wf) format("svg");
    font-weight: 300;
    font-style: normal
}

@font-face {
    font-family: ProximaNova;
    src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot);
    src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.eot?#iefix) format("embedded-opentype"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff2) format("woff2"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.woff) format("woff"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.ttf) format("truetype"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_4_0.svg#wf) format("svg");
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: ProximaNova;
    src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot);
    src: url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.eot?#iefix) format("embedded-opentype"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff2) format("woff2"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.woff) format("woff"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.ttf) format("truetype"), url(https://d25purrcgqtc5w.cloudfront.net/dist/fonts/proximanova/302D42_5_0.svg#wf) format("svg");
    font-weight: 700;
    font-style: normal
}
#app {
 margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ProximaNova;
    scroll-behavior: smooth; 
    min-height: 100vh;
    font-size: 100%;
    scroll-behavior: smooth;
    font-size: 16px;
    color: #ffffff;
}


</style>
