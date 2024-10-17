
<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <p v-if="tarefas.length === 0">NÃO HÁ TAREFAS INICIADAS</p>
    </div>
</template>
  
<script setup lang="ts">
import Formulario from '../components/Formulario.vue'
import Tarefa from '../components/Tarefa.vue'
import type ITarefa from '../interfaces/ITarefa'
import { ref } from 'vue';
import { useStore } from '@/store';

let tarefas = ref([] as ITarefa[]);
const store = useStore();

store.obterProjetos()

function salvarTarefa(tarefa: ITarefa) {
    if (tarefa.descricao !== '') {
        tarefas.value.push(tarefa);
    }
}
</script>
  
<style>
.lista {
    padding: 1.25rem;
}

main {
    --bg-primario: #fff;
    --texto-primario: #000;
}

main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #fff;
}

.conteudo {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>
  