<template>
    <div v-if="tarefa?.descricao !== ''" class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-4">
                {{tarefa?.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{ tarefa?.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="props.tarefa?.duracaoEmSegundos"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Cronometro from './Cronometro.vue';
import type ITarefa from '../interfaces/ITarefa';

const props = defineProps<{
    tarefa?: ITarefa
}>()

</script>

<style scoped>
.box{
    background-color: #0d3b66;
}
</style>