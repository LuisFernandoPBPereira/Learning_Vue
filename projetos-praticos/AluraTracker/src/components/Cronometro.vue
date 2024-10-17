<template>
    <section class="display">
        <p>{{ tempoDecorrido }}</p>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const segundoEmMilisegundos : number = 1000;

const props = defineProps<{
    tempoEmSegundos?: number
}>()

const tempoDecorrido = computed(() => {
    const tempo = props.tempoEmSegundos ?? 0;
    return new Date(tempo * segundoEmMilisegundos).toISOString().substr(11, 8);
})

</script>

<style>
.display{
    color: var(--text-primario);
}
</style>