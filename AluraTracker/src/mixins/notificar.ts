import type { TipoNotificacao } from "@/interfaces/INotificacao"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutacoes"

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string){
            store.commit(NOTIFICAR, {
                titulo: titulo,
                texto: texto,
                tipo: tipo
            })
        }
    }
}