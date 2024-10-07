<template>
    <div class="is-flex is-align-itens-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <button class="button" @click="iniciar" :disabled="cronometroDisparado">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroDisparado">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: 'Temporizador',
    emits: ['aoFinalizarTemporizador'],
    components: {
        Cronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroDisparado: false
        }
    },
    methods: {
        iniciar() {
            this.cronometroDisparado = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);
        },
        finalizar() {
            this.cronometroDisparado = false;
            clearInterval(this.cronometro);
            this.$emit('aoFinalizarTemporizador', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})
</script>