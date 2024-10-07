
<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <Formulario/>
    </div>
  </main>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral,
    Formulario
  }
})
</script>

<style>

</style>
