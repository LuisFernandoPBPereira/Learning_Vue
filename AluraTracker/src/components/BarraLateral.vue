<template>
    <header>
        <h1>
            <img src="https://raw.githubusercontent.com/alura-cursos/alura-tracker/main/src/assets/logo.png" alt="Fotinha">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="alterarTema">
                {{ textoDoBotao }}
            </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <RouterLink to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoAlterarTema'],
    data() {
        return {
            modoEscuroAtivo: true
        }
    },
    computed: {
        textoDoBotao() {
            if (this.modoEscuroAtivo) {
                return "Desativar modo escuro"
            }

            return "Ativar modo escuro"
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo,
                this.$emit('aoAlterarTema', this.modoEscuroAtivo)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background-color: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

.panel li{
    margin: 8px 0;
}

.link{
    color: #fff;
}

.link:hover{
    color:  #FAF0CA;
}

.link.router-link-active{
    color:  #FAF0CA;
}
</style>