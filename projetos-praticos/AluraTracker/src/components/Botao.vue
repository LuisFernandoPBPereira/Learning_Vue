<template>
    <button class="button" @click="props.eventoDoBotao" :disabled="props.cronometroDisparado">
        <span class="icon">
            <i :class="props.icone" class="fas"></i>
        </span>
        <span>{{props.nomeDoBotao}}</span>
    </button>
</template>

<script setup lang="ts">

const props = defineProps<{
    eventoDoBotao?: Function,
    cronometroDisparado?: boolean,
    icone?: string,
    nomeDoBotao?: string
}>()

</script>