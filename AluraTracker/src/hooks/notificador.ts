import type { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao"
import { useStore } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutacoes"

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void
}

export default () : Notificador => {
    const store = useStore()
    
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string) : void =>{
        store.notificar({titulo, texto, tipo} as INotificacao)
    }

    return{
        notificar
    }
}