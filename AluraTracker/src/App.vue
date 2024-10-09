
<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @AoAlterarTema="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <p v-if="tarefas.length === 0">NÃO HÁ TAREFAS INICIADAS</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefa from './components/Tarefa.vue'
import type ITarefa from './interfaces/ITarefa'
import { ref } from 'vue';

let tarefas = ref([] as ITarefa[]);
let modoEscuro = ref(false);

function salvarTarefa (tarefa: ITarefa){
  if(tarefa.descricao !== ''){
      tarefas.value.push(tarefa);
  }
}

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
