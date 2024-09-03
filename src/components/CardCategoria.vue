<script lang="ts">
import type ICategoria from '@/Interfaces/ICategorias';
import type { PropType } from 'vue'
export default {
    props: {
        categoria: {type: Object as PropType<ICategoria >, required: true}
    }    
}
</script>


<template>
    {{ categoria.nome }}
</template>