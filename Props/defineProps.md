<h1 align="center">Props com <code>defineProps()</code></h1>

Para definir props usando Composition Api, usamos o `defineProps()`.

## Exemplo

```html
<template>
    <button class="button" @click="props.eventoDoBotao">
        <span class="icon">
            <i :class="props.icone" class="fas"></i>
        </span>
        <span>{{props.nomeDoBotao}}</span>
    </button>
</template>

<script setup lang="ts">

const props = defineProps<{
    eventoDoBotao?: Function,
    icone?: string,
    nomeDoBotao?: string
}>()

</script>
```

<br>

### Inserindo Props no Componente

```html
<Botao :nomeDoBotao="'play'" 
       :eventoDoBotao="iniciar" 
       :icone="'fa-play'"
       />
```