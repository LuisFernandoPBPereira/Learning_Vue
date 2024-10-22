<h1 align="center"><code>&ltTransition&gt</code></h1>

Usamos para colocar transição em elementos HTML

## Exemplo

```html
<template>
  <button @click="show = !show">Alterar</button>
  <Transition>
    <p v-if="show">Olá mundo</p>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
```

Ao pressionar o botão `Alterar`, o texto `Olá mundo` sofrerá uma transição para diminuir sua opacidade até diminuir por completo.

A tag `<Transition>` permite apenas um elemento raíz. Caso esse elemento seja um componente, ele deve ter apenas um elemento raíz.

### Classes

#### `v-enter-active`:

Aplicada durante toda a fase de entrada. Geralmente usada para definir a duração, a função de tempo e outros estilos gerais para a animação ou transição.

#### `v-leave-active`:

Aplicada durante toda a fase de saída. É onde você define a duração, função de tempo, e outros estilos que controlam como a transição ocorre.

#### `v-enter-from`:

Ela é usada para definir o estado inicial do elemento no início da transição, antes de ele começar a animar para seu estado final.

#### `v-leave-to`:

Ela é aplicada logo após o início da transição de saída e permanece até que a animação ou transição seja concluída.