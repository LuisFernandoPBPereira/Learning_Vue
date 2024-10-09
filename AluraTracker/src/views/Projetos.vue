<template>
    <section class="projetos">
        <h1>Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field">
                <button type="submit" class="button">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type IProjeto from "../interfaces/IProjeto"

export default defineComponent({
    name: 'Projetos',
    data(){
        return{
            nomeDoProjeto: '',
            projetos: [] as IProjeto[]
        }
    },
    methods:{
        salvar(){
            const projeto: IProjeto ={
                id: new Date().toISOString(),
                nome: this.nomeDoProjeto
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = ''
        }
    }
})

</script>

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>