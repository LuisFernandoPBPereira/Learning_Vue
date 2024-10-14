
<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @AoAlterarTema="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes/>
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue'
import { ref } from 'vue';
import Notificacoes from './components/Notificacoes.vue';

let modoEscuro = ref(true);

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

.input{
  background-color: #fff;
  color: #000;
}

.input::placeholder{
  color: #000;
}

.table{
  background-color: transparent;
}

.table td{
  color: var(--texto-primario);
}

.table thead th{
  color: var(--texto-primario);
}

.input, .select select, .textarea{
  background-color: #fff;
  color: #000;
}
</style>
