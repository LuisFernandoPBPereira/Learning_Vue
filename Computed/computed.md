<h1 align="center"><code>computed()</code></h1>

Usamos o `computed()` quando queremos armazenar alguma operação que não precise ser executada
todas as vezes que o componente for renderizado, esta operação será executada quando seu estado mudar.

## Exemplo

```ts
const store = useStore()
store.obterProjetos();

const projetos = computed<IProjeto[]>(() => {
    return store.projetosReativos.projetos;
})
```

Neste cenário, nós recuperamos objetos do tipo `IProjeto` em uma `store`, então, para não fazermos a mesma operação toda vez que o componente renderizar, usamos o `computed()` para armazenar os dados até que seu estado mude.