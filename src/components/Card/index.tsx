import { formatDate } from '../../utils/formatter'

import { CardContainer } from './styles'

interface CardProps {
  id: number
  title: string
  createdAt: string
  body: string
}

export function Card({ id, title, createdAt, body }: CardProps) {
  return (
    <CardContainer to={`/post/${id}`}>
      <h2>
        {title}
        <span>{formatDate(createdAt)}</span>
      </h2>

      <p>{body}</p>
    </CardContainer>
  )
}
