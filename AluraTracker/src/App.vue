
<template>
  <main class="columns is-gapless is-multiline modo-escuro">
    <div class="column is-one-quarter">
      <BarraLateral/>
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

<script lang="ts">
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefa from './components/Tarefa.vue'
import type ITarefa from './interfaces/ITarefa'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral,
    Formulario,
    Tarefa
  },
  data(){
    return{
      tarefas: [] as ITarefa[]
    }
  },
  methods:{
    salvarTarefa(tarefa: ITarefa){
      if(tarefa.descricao !== ''){
        this.tarefas.push(tarefa);
      }
    }
  }
})
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
