import type IProjeto from "@/interfaces/IProjeto";
import type { INotificacao } from "@/interfaces/INotificacao";
import http from "@/http"
import type ITarefa from "@/interfaces/ITarefa";
import { defineStore } from "pinia";

export const useProjetoStore = defineStore('projeto', {
    state: () => ({
      projetos: [] as IProjeto[],
      tarefas: [] as ITarefa[],
      notificacoes: [] as INotificacao[],
    }),
  
    actions: {
      // Ação para buscar projetos
      async obterProjetos() {
        const resposta = await http.get('projetos');
        this.projetos = resposta.data;
      },
  
      // Ação para cadastrar um novo projeto
      async cadastrarProjeto(nomeDoProjeto: string) {
        await http.post('/projetos', { nome: nomeDoProjeto });
        this.obterProjetos(); // Atualiza a lista após cadastrar
      },
  
      // Ação para alterar um projeto existente
      async alterarProjeto(projeto: IProjeto) {
        await http.put(`/projetos/${projeto.id}`, projeto);
        this.obterProjetos(); // Atualiza a lista após alterar
      },
  
      // Ação para remover um projeto
      async removerProjeto(idProjeto: string) {
        await http.delete(`/projetos/${idProjeto}`);
        this.projetos = this.projetos.filter(proj => proj.id !== idProjeto);
      },
  
      // Ação para buscar tarefas
      async obterTarefas() {
        const resposta = await http.get('tarefas');
        this.tarefas = resposta.data;
      },
  
      // Ação para adicionar uma notificação
      notificar(novaNotificacao: INotificacao) {
        novaNotificacao.id = new Date().getTime();
        this.notificacoes.push(novaNotificacao);
  
        // Remover a notificação após 3 segundos
        setTimeout(() => {
          this.notificacoes = this.notificacoes.filter(
            (notificacao) => notificacao.id !== novaNotificacao.id
          );
        }, 3000);
      },
    },
  });

export function useStore(){
    return useProjetoStore();
}