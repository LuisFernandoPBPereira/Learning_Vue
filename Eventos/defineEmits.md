<h1 align="center"><code>defineEmits()</code></h1>

Usamos `defineEmits()` para definir os eventos usando Composition Api.

<br>

## Exemplo

```ts
const modoEscuroAtivo = ref(true)

const emits = defineEmits<{
  (evento: 'aoAlterarTema', modoEscuroAtivo: boolean): void
}>()

function alterarTema(){
    modoEscuroAtivo.value = !modoEscuroAtivo.value
    emits('aoAlterarTema', modoEscuroAtivo.value)
}
```

Definimos o evento `aoAlterarTema` e passamos o valor que o evento manipula