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

<script setup lang="ts">
import { useStore } from '@/store'
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador'
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
    id: string
}>();

const router = useRouter();

const nomeDoProjeto = ref('')
const store = useStore()
const { notificar } = useNotificador()

onMounted(() => {
    if (props.id) {
        const projeto = store.projetos.find((proj: { id: string }) => proj.id == props.id)
        nomeDoProjeto.value = projeto?.nome || ''
    }
})

function salvar() {
    if (props.id) {
        store.alterarProjeto({ id: props.id, nome: nomeDoProjeto.value })
            .then(() => lidarComSucesso())
    }
    else {
        store.cadastrarProjeto(nomeDoProjeto.value)
            .then(() => lidarComSucesso())
    }
}

function lidarComSucesso() {
    nomeDoProjeto.value = ''
    notificar(TipoNotificacao.SUCESSO, "Sucesso", "Projeto salvo!")
    router.push('/projetos');
}
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>