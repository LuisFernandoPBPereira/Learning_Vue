<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in store.projetosReativos.projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoFinalizarTemporizador="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Temporizador from './Temporizador.vue';
import { useStore } from "@/store"
import { ref } from 'vue';
import type ITarefa from '@/interfaces/ITarefa';
import type IProjeto from '@/interfaces/IProjeto';

const descricao = ref("")
const idProjeto = ref("")

const store = useStore()

const emits = defineEmits<{
    (evento: 'aoSalvarTarefa', tarefa: ITarefa) : void
}>() 

function finalizarTarefa(tempoDecorrido : number) : void{
    
    const projetoEscolhido = store.projetosReativos.projetos.find((proj: { id: string }) => proj.id === idProjeto.value) as IProjeto
    
    emits('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetoEscolhido
    })
    
}
</script>

<style>
.formulario {
    color: var(--text-primario);
    background-color: var(--bg-primario);
}
</style>