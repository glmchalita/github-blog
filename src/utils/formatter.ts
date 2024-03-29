import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function formatDate(date: string) {
  return formatDistanceToNow(date, {
    locale: ptBr,
    addSuffix: true,
  })
}
