import { NavLink, useParams } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'

import { MarkdownRenderer } from '../../lib/markdown/MarkdownRenderer'
import { formatDate } from '../../utils/formatter'

import { PostContainer, PostContent, PostTitleCard } from './styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Post() {
  const { postId } = useParams()
  const { posts } = usePosts()

  const post = posts.filter((item) => item.id === Number(postId))[0]

  return (
    <PostContainer>
      <PostTitleCard>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </NavLink>
          <a href={post.html_url}>
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <h2>{post.title}</h2>

        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post.user.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{formatDate(post.created_at)}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comentarios</span>
          </div>
        </div>
      </PostTitleCard>

      <PostContent>
        <MarkdownRenderer>{post.body}</MarkdownRenderer>
      </PostContent>
    </PostContainer>
  )
}
