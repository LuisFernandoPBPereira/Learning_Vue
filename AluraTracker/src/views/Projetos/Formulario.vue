<template>
    <section class="projetos">
        <br>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field">
                <button type="submit" class="button">
                    Salvar
                </button>
            </div>
            <br>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store'
import type { store } from '@/store';

export default defineComponent({
    name: 'Formulario',
    props:{
        id: {
            type: String
        }
    },
    mounted() {
        if(this.id){
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data(){
        return{
            nomeDoProjeto: ''
        }
    },
    methods:{
        salvar(){
            if(this.id){
                this.store.commit('ALTERA_PROJETO', { id: this.id, nome: this.nomeDoProjeto })
            }
            else{
                this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto)
            }
            this.nomeDoProjeto = ''
            this.$router.push('/projetos');
        }
    },
    setup(){
        const store = useStore()
        return {
            store,
        }
    }
})

</script>

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>