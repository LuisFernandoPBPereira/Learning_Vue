<h1 align="center"><code>reactive()</code></h1>

Usamos o `reactive()` quando queremos que um objeto ou um array sofra as mudanças de estado.
Diferentemente do `ref()` que tem a função de mudar estado de dados primitivos (`string`, `int` etc.)

## Exemplo

```ts
export const useProjetoStore = defineStore('projeto', () => {
  const projetosReativos = reactive({projetos: <IProjeto[]>[] });

  async function obterProjetos(){
    const resposta = await http.get('projetos');
    projetosReativos.projetos = resposta.data;
  }

  //...
```

Aqui temos um cenário onde possuimos uma store usando Pinia, e estamos fazendo uma requisição de projetos para um array de `IProjetos`, sendo assim, usamos o reactive.

Outro detalhe, quando usamos o `reactive()`, podemos acessar seus valores sem o `.value`, apenas acessando o objeto definido no `reactive()`.