<template>
    <section>
        <RouterLink to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo Projeto</span>
        </RouterLink>
        <br>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{projeto.id}}</td>
                    <td>{{projeto.nome}}</td>
                    <td>
                        <RouterLink :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </RouterLink>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue';
import type IProjeto from '@/interfaces/IProjeto';

const store = useStore()
store.obterProjetos();

const projetos = computed<IProjeto[]>(() => {
    return store.projetosReativos.projetos;
})

function excluir(projetoId: string){
    store.removerProjeto(projetoId);
}
</script>