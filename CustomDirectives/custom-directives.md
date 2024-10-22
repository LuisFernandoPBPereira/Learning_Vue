<h1 align="center">Custom Directives</h1>

Podemos criar diretivas para manipularmos o que desejarmos em um elemento HTML.

## Exemplo

```html
<template>
  <div v-highlight>
    Esse texto tá em highlight
  </div>
</template>

<script setup lang="ts">
const vHighlight = {
  mounted: (elemento: Element) => {
    elemento.classList.add('is-highlight')
  }
}
</script>

<style>
.is-highlight{
  background-color: yellow;
  width: 22ch;
}
</style>
```

Criamos uma diretiva chamada `vHighlight`, que terá como objetivo deixar o texto com uma marcação em destaque.

As diretivas devem começar com `v` ao serem criadas, e devemos usá-las dessa forma: `v-nomedadiretiva`