<h1 align="center">Condicionais</h1>

Usando Vue podemos usar condicionais para renderizar um componente, fazendo com que ele renderize caso a condição seja verdadeira.

<br>

# `v-if`

```html
<h1 v-if="adminPage">Bem-vindo, Admin</h1>
```
Caso `adminPage` seja `true`, será exibido o título.

<br>

# `v-else`

```html
<h1 v-if="adminPage">Bem-vindo, Admin</h1>
<h1 v-else>Bem-vindo, Usuário</h1>
```
Caso `adminPage` seja `true`, será exibido o título de admin. Senão, será exibido o título de usuário.


<br>

# `v-else-if`

```html
<div v-if="opcao === 1">
    Opção 1
    </div>
<div v-else-if="opcao === 2">
    Opção 2
</div>
<div v-else>
    Opção 3
</div>
```
Caso a variável `opcao` corresponda a `1`, será renderizado a opção 1 e assim sucessivamente no bloco `if-elseif-else`

<br>

# Renderizando Condicionalmente Mais de Um Elemento

Caso precisemos renderizar mais de um componente condicionalmente, podemos englobar a condição em um `<template>`, e na renderização final, a tag `<template>` não será incluída.

```html
<template v-if="listasCarregadas">
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
</template>
```