<h1 align="center">Async Components</h1>

Usamos um Async Component quando queremos que um componente grande seja carregado de forma assíncrona, podemos manipular seu carregamento, fazendo com que outro componente menor seja exibido até que o componente carregue por inteiro.

## Exemplo

```html
<template>
  <AsyncComponent/>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import OutroComponente from "./components/OutroComponenete.vue"

const AsyncComponent = defineAsyncComponent({
  loader: () => import('./components/AsyncComponent.vue'),
  loadingComponent: OutroComponente
});
</script>
```

O componente que será carregado é o `AsyncComponent`, como haverá uma demora, o `OutroComponente` estará carregado em tela até que o `AsyncComponent` finalize seu carregamento.