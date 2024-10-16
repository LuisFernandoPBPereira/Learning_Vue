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

<script setup lang="ts">
import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue';
import { ref } from 'vue';

const tempoEmSegundos = ref(0)
let cronometro : number = 0;
const cronometroDisparado = ref(false)

const emits = defineEmits<{
    (evento: 'aoFinalizarTemporizador', tempoEmSegundos : number) : void;
}>()

function iniciar() : void{
    cronometroDisparado.value = true;
    cronometro = setInterval(() => {
      tempoEmSegundos.value++;
    }, 1000);
}

function finalizar() : void{
    cronometroDisparado.value = false;
    clearInterval(cronometro);
    emits('aoFinalizarTemporizador', tempoEmSegundos.value);
    tempoEmSegundos.value = 0;
}
</script>