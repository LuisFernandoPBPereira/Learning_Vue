<template>
    <div class="is-flex is-align-itens-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao :nomeDoBotao="'play'" 
               :eventoDoBotao="iniciar" 
               :cronometroDisparado="cronometroDisparado"
               :icone="'fa-play'"
               />
        <Botao :nomeDoBotao="'stop'" 
               :eventoDoBotao="finalizar" 
               :cronometroDisparado="!cronometroDisparado"
               :icone="'fa-stop'"
               />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue';
import type ITemporizador from '@/interfaces/ITemporizador';

export default defineComponent({
    name: 'Temporizador',
    emits: ['aoFinalizarTemporizador'],
    components: {
        Cronometro,
        Botao
    },
    data() : ITemporizador{
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroDisparado: false
        }
    },
    methods: {
        iniciar() : void{
            this.cronometroDisparado = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);
        },
        finalizar() : void{
            this.cronometroDisparado = false;
            clearInterval(this.cronometro);
            this.$emit('aoFinalizarTemporizador', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})
</script>