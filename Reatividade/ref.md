<h1 align="center"><code>ref()</code></h1>

Usamos o <code>ref()</code> para valores que vão sofrer alteração no Vue, dessa forma,
podemos deixá-lo de forma reativa, fazendo com que o Vue detecte essa mudança e faça as
alterações no DOM.

## Exemplo

Caso queiramos fazer um cronômetro, o valor do tempo precisa ser reativo, pois estará em constante mudança

```ts
const tempoEmSegundos = ref(0)
const cronometroDisparado = ref(false)
let cronometroId : number = 0;

function iniciar() : void{
    cronometroDisparado.value = true;
    cronometroId = setInterval(() => {
      tempoEmSegundos.value++;
    }, 1000);
}
```

Usamos <code>ref()</code> para o <code>tempoEmSegundos</code> que é um inteiro, e para o <code>cronometroDisparado</code> que é um booleano.
Seus valores mudam toda vez que a função iniciar é chamada, em especial o <code>tempoEmSegundos</code> que muda a cada segundo no <code>setInterval()</code>.

Podemos acessar o valor de um `ref()` usando `.value`, como em `tempoEmSegundos.value`.