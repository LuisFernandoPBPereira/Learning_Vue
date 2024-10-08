<template>
    <button class="button" @click="eventoDoBotao" :disabled="cronometroDisparado">
        <span class="icon">
            <i :class="icone" class="fas"></i>
        </span>
        <span>{{nomeDoBotao}}</span>
    </button>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'

export default defineComponent({
    name: 'Botao',
    props:{
        eventoDoBotao: {
            type: Function as PropType<(tipo: MouseEvent) => void>,
            required: true
        },
        cronometroDisparado:{
            type: Boolean
        },
        icone:{
          type: String  
        },
        nomeDoBotao:{
            type: String
        }
    },    
})
</script>