import type IProjeto from "@/interfaces/IProjeto";
import type Estado from "@/interfaces/Estado";
import type { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";



export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state:{
        projetos: []
    },
    mutations:{
        'ADICIONA_PROJETO'(state : any, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto

            state.projetos.push(projeto);
        },
        'ALTERA_PROJETO'(state : any, projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto;
        }

    }
});

export function useStore() : Store<Estado>{
    return vuexUseStore(key)
}