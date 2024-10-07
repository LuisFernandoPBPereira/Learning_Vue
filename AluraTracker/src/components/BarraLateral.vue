<template>
    <header>
        <h1>
            <img src="https://raw.githubusercontent.com/alura-cursos/alura-tracker/main/src/assets/logo.png" alt="Fotinha">
        </h1>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral'
})
</script>

<style scoped>
header{
    padding: 1rem;
    background-color: #0d3b66;
    width: 100%;
    height: 100vh;
}

@media only screen and (max-width: 768px){
    header{
        padding: 2.5rem;
        height: auto;
    }
}
</style>