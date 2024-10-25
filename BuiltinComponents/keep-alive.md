<h1 align="center"><code>&ltKeepAlive&gt</code></h1>

Usamo `<KeepAlive>` quando queremos manter o estado de um componente vivo mudarmos de componente.

## Exemplo


### Componente 1

```html
<template>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const texto = ref("")

watch(texto, (textoAlterado : string) => {
  texto.value = textoAlterado
})
</script>
```

No `<Componente1/>` temos um watch que verifica se o texto digitado no input foi alterado, e recebe esse novo estado a cada tecla pressionada.

### Componente 2

```html
<template>
    <button @click="incrementar">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const count = ref(0)

function incrementar(){
   count.value = count.value + 1;
}
</script>
```

No `<Componente2/>` temos um botão que ao ser clicado, incrementa um contador.


### Componente de Exibição

```html
<template>
  <KeepAlive>
    <Componente1 v-if="exibir"/>
    <Componente2 v-else-if="!exibir"/>
  </KeepAlive>
  <br>
  <button @click="trocaPagina">Trocar</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Componente1 from './components/Componente1.vue';
import Componente2 from './components/Componente2.vue';

const exibir = ref(false);

function trocaPagina(){
  exibir.value = !exibir.value;
}
</script>
```

Aqui temos dois componentes dentro da tag `<KeepAlive>`, porém, a tag não aceita dois filhos, então fazemos a condição onde será exibido apenas um componente com uma função que troca o estado da condição.

Ao clicar no botão `Trocar`, as exibições serão trocadas, mas seus estados serão mantidos.