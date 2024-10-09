
<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @AoAlterarTema="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue'
import { ref } from 'vue';

let modoEscuro = ref(false);

function trocarTema(modoEscuroAtivo: boolean){
  modoEscuro.value = modoEscuroAtivo
}
</script>

<style>
.lista{
  padding: 1.25rem;
}

main{
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #fff;
}

.conteudo{
  background-color: var(--bg-primario);
  color: var(--texto-primario) ;
}
</style>
