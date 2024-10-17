import type IProjeto from "@/interfaces/IProjeto";
import type { INotificacao } from "@/interfaces/INotificacao";
import http from "@/http"
import type ITarefa from "@/interfaces/ITarefa";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useProjetoStore = defineStore('projeto', () => {
  const projetosReativos = reactive({projetos: <IProjeto[]>[] });
  const tarefasReativas = reactive({tarefas: <ITarefa[]>[] });
  const notificacoesReativas = reactive({notificacoes: <INotificacao[]>[]});
  
  async function obterProjetos(){
    const resposta = await http.get('projetos');
    projetosReativos.projetos = resposta.data;

  }

  async function cadastrarProjeto(nomeDoProjeto: string){
    await http.post('/projetos', { nome: nomeDoProjeto });
    obterProjetos();
  }

  async function alterarProjeto(projeto:IProjeto) {
    await http.put(`/projetos/${projeto.id}`, projeto);
    obterProjetos();
  }

  async function removerProjeto(idProjeto:string) {
    await http.delete(`/projetos/${idProjeto}`);
    projetosReativos.projetos = projetosReativos.projetos.filter(proj => proj.id !== idProjeto);
  }

  async function obterTarefas() {
    const resposta = await http.get('tarefas');
    tarefasReativas.tarefas = resposta.data;
  }

  function notificar(novaNotificacao:INotificacao) {
    novaNotificacao.id = new Date().getTime();
    notificacoesReativas.notificacoes.push(novaNotificacao);

    setTimeout(() => {
      notificacoesReativas.notificacoes = notificacoesReativas.notificacoes.filter(
        (notificacao) => notificacao.id !== novaNotificacao.id
      );
    }, 3000);
  }

  function adicionarProjeto(nomeDoProjeto : string){
    const projeto = {
      id: new Date().toISOString(),
      nome: nomeDoProjeto,
    } as IProjeto;
    
    projetosReativos.projetos.push(projeto);
  }

  function alterarProjetoLocal(projeto:IProjeto) {
    const index = projetosReativos.projetos.findIndex((proj) => proj.id === projeto.id);
    if (index !== -1) {
      projetosReativos.projetos[index] = projeto;
    }    
  }

  function excluirProjeto(projetoId:string) {
    projetosReativos.projetos = projetosReativos.projetos.filter((proj) => proj.id !== projetoId);    
  }

  function definirProjetos(projetosDefinidos:IProjeto[]) {
    projetosReativos.projetos = projetosDefinidos;
  }

  function definirTarefas(tarefasDefinidas:ITarefa[]) {
    tarefasReativas.tarefas = tarefasDefinidas;
  }

  return{
    notificar,
    obterTarefas,
    removerProjeto,
    alterarProjeto,
    cadastrarProjeto,
    obterProjetos,
    projetosReativos,
    tarefas: tarefasReativas,
    notificacoes: notificacoesReativas,
    definirTarefas,
    definirProjetos,
    excluirProjeto,
    alterarProjetoLocal,
    adicionarProjeto
  }

});

export function useStore(){
    return useProjetoStore();
}