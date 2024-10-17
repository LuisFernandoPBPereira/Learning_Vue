import type { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao"
import { useStore } from "@/store"
const store = useStore() 

function notificar(tipo: TipoNotificacao, titulo: string, texto: string){
    store.notificar({titulo: titulo,texto: texto,tipo: tipo} as INotificacao);
}

// export const notificacaoMixin = {
//     methods: {
//         notificar(tipo: TipoNotificacao, titulo: string, texto: string){
//         }
//     }
// }

export default notificar;