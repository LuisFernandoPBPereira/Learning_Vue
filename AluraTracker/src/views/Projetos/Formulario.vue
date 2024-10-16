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
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador'
import { CADASTRAR_PROJETOS, ALTERAR_PROJETO } from '@/store/tipo-acoes';

export default defineComponent({
    name: 'Formulario',
    props:{
        id: {
            type: String
        }
    },
    mounted() {
        if(this.id){
            const projeto = this.store.state.projetos.find((proj: { id: string  }) => proj.id == this.id)
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
                this.store.dispatch(ALTERAR_PROJETO, { id: this.id, nome: this.nomeDoProjeto })
                    .then(() => this.lidarComSucesso())
            }
            else{
                this.store.dispatch(CADASTRAR_PROJETOS, this.nomeDoProjeto)
                    .then(() => this.lidarComSucesso())
            }
        },
        lidarComSucesso(){
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, "Sucesso", "Projeto salvo!")
            this.$router.push('/projetos');
        },
    },
    setup(){
        const store = useStore()
        const {notificar} = useNotificador()
        return {
            store,
            notificar
        }
    }
})

</script>

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>