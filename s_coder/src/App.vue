<template>
  <div>
    <div id="content">
      <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <navfooter></navfooter>
  </div>
  
</template>

<script>
import navfooter from './components/navfooter/navfooter'
export default {
  name: 'app',
    components: {
    navfooter

  }

  }



</script>
