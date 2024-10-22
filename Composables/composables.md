<h1 align="center">Composables</h1>

Na programação, reutilizar código é uma boa prática, em Vue não seria diferente, podemos reutilizar código através dos composables.

## Exemplo

```ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const eixoX = ref(0)
  const eixoY = ref(0)

  function update(event : MouseEvent) {
    eixoX.value = event.pageX
    eixoY.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { eixoX, eixoY }
}
```

Aqui nós envolvemos um algoritmo para rastrear o mouse e dizer os seus eixos na tela em uma função.

<br>

```html
<template>
    Posição do mouse: {{ eixoX }}, {{ eixoY }}    
</template>

<script setup lang="ts">
import { useMouse } from './MouseTracker';

const {eixoX, eixoY} = useMouse()

</script>
```

E então, utilizamos a função no componente desejado.