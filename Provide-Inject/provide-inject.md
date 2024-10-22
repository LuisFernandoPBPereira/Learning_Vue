<h1 align="center"><code>provide()</code> e <code>inject()</code></h1>

Talvez você tenha se deparado com um problema ao passar uma prop de um componente até outro componente mais distante.

Podemos contornar isso usando `provide()` para prover uma prop para seus componentes filhos, e `inject()` para injetar a prop provida de seu componente antecessor.

## Exemplo

Iremos ter a seguinte hierarquia: `App.vue` -> `Componente.vue` -> `FilhoDoComponente.vue`  

### App.vue

```html
<template>
  <Componente/>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import Componente from './components/Componente.vue';

provide("mensagem", "Olá Mundo");
</script>
```

Definimos a prop que iremos prover, que recebe a chave `mensagem` e o valor `Olá Mundo`.

<br>

### Componente.vue

```html
<template>
    <FilhoDoComponente/>
</template>

<script setup lang="ts">
import FilhoDoComponente from './FilhoDoComponente.vue';
</script>
```

Aqui só invocamos o componente `FilhoDoComponente`.

<br>

### FilhoDoComponente.vue

```html
<template>
    <h1>{{ mensagem }}</h1>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const mensagem = inject("mensagem")
</script>
```

Aqui podemos injetar a prop passada pelo `App.vue`, dentro de `inject()`, passamos a chave da prop e guardamos seu valor, e então, exibimos a mensagem em um `<h1>`