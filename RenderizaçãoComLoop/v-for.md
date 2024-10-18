<h1 align="center"><code>v-for</code></h1>

Usamos `v-for` quando precisamos renderizar um componente que tenha uma lista de elementos.

## Exemplo

Temos uma lista de projetos, e precisamos renderizá-los em um dropdown, sendo assim, percorremos toda a lista com `v-for`:

```html
<select v-model="idProjeto">
    <option value="">Selecione o projeto</option>
    <option :value="projeto.id" v-for="projeto in store.projetosReativos.projetos" :key="projeto.id">
        {{ projeto.nome }}
    </option>
</select>
```

## `:key`

O `v-bind:key` tem como função identificar cada elemento renderizado pelo `v-for`, sendo assim, o Vue consegue rastrear a identidade de cada elemento.

