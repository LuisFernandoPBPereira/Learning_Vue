<h1 align="center"><code>watch()</code></h1>

Usamos `watch()` quando queremos que algo seja monitorado, e ao identificar tal alteração, realizar as verificações necessárias.

## Exemplo

```html
<template>
  <input type="text" v-model="texto">
  <h1>{{ digitouCerto ? "Melhor console" : ''}}</h1>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const texto = ref("")
const digitouCerto = ref(false);

watch(texto, (textoAlterado) => {
  if(textoAlterado.includes("Xbox")){
    digitouCerto.value = true;
  }
  else{
    digitouCerto.value = false;
  }
})
</script>
```

Toda vez que a constante `texto` mudar de estado, o hook será executado e o código será executado.