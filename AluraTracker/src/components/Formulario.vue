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
                        <option :value="projeto.id" v-for="projeto in storeProjetos" :key="projeto.id">
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
import { useStore } from 'vuex'
import { key } from "@/store"
import { ref } from 'vue';
import { reactive } from 'vue';
import type { Ref } from 'vue';
import type ITarefa from '@/interfaces/ITarefa';

const descricao = ref("")
const idProjeto = ref("")

const store = useStore(key)
const storeProjetos = reactive({
    projetos: store.state.projetos
})

const emits = defineEmits<{
    (evento: 'aoSalvarTarefa', tarefa: ITarefa) : void
}>() 

function finalizarTarefa(tempoDecorrido : number) : void{
    emits('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: store.projetos.find((proj: { id: Ref<string, string>; }) => proj.id == idProjeto)
    })
    
}
</script>

<style>
.formulario {
    color: var(--text-primario);
    background-color: var(--bg-primario);
}
</style>