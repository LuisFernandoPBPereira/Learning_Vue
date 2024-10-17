<template>
    <div class="notificacoes">
        <article class="message" :class="tiposNotificacoes[notificacao.tipo]" v-for="notificacao in notificacoes.notificacoes" :key="notificacao.id">
            <div class="message-header">
                {{ notificacao.titulo }}
            </div>
            <div class="message-body">
                {{ notificacao.texto }}
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import {storeToRefs} from 'pinia'
const tiposNotificacoes : Record<TipoNotificacao, string>  = {
    [TipoNotificacao.SUCESSO]: 'is-success',
    [TipoNotificacao.ATENCAO]: 'is-warning',
    [TipoNotificacao.FALHA]: 'is-danger',
}

const store = useStore()
const {notificacoes} = storeToRefs(store)

</script>

<style scoped>
.notificacoes{
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 100;
}
</style>