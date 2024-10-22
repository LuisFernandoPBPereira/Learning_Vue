<h1 align="center"><code>@submit</code></h1>

O evento `@submit` é usado em um `<form>` para eventos de envio.

<br>

## `prevent`

O `@submit.prevent` impede que o formulário faça seu comportamento padrão.

<br>

## `capture`
O `@submit.capture` permite capturar o evento na fase de captura dele.

O que seria a fase de captura?

Simples, um evento é disparado e vai do `document`, até o elemento que disparou o evento. Este processo, se chama fase de captura.

<br>

## `left`

O `@submit.left` emite o evento apenas quando o clique do botão esquerdo do mouse for efetuado.

<br>

## `middle`

O `@submit.middle` emite o evento apenas quando o clique do botão do meio do mouse (scroll) for efetuado.

<br>

## `right`

O `@submit.right` emite o evento apenas quando o clique do botão da direita do mouse for efetuado.

<br>

## `once`

O `@submit.once` garante que o evento seja executado apenas uma vez.

<br>

## `passive`

O `@submit.passive` garante `event.preventDefault()` não seja executado.

<br>

## `self`

O `@submit.self` garante que o evento seja tratado se ele for disparado no próprio elemento, e não por seus filhos.

<br>

## `stop`

O `@submit.stop` interrompe a propagação do evento para os elementos pais.

