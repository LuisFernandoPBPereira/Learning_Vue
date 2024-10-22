<h1 align="center"><code>watchEffect()</code></h1>

O watcher `watchEffect()` é similar ao `watch()`, com a diferença de que não precisamos explicitar o recurso via parâmetro.

## Exemplo

```ts
import { ref, watchEffect } from 'vue';

const cep = ref("")
const dados = ref(null);

watchEffect(async () => {
  if(cep.value.length == 8){
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    dados.value = await response.json()
  }
})
```

Caso a quantidade de caracteres do `cep` digitado seja igual a `8`, a requisição é feita, sem a necessidade de passar a variável via parâmetro.