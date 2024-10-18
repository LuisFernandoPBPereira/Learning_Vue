<h1 align="center"><code>:class</code></h1>

Usamos o `:class` para manipular dinamicamente uma classe HTML.

## Exemplo

```ts
<template>
    <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuro }">
        <!-- seu código aqui ... -->
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modoEscuro = ref(true);

function trocarTema(modoEscuroAtivo: boolean){
  modoEscuro.value = modoEscuroAtivo
}
</script>
```

Criamos uma constante reativa, então manipulamos a lógica necessária para inserirmos no objeto contido na `:class`

No exemplo, criamos a constante reativa `modoEscuro` e a manipulamos pela função `trocarTema()`,
então, dinamicamente, quando seu valor for alterado, a classe sofrerá as mudanças.