import { NavLink } from 'react-router-dom'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PostContainer, PostContent, PostTitleCard } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostTitleCard>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </NavLink>
          <a href="#">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <h2>JavaScript data types and data structures</h2>

        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>glmchalita</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>32 comentarios</span>
          </div>
        </div>
      </PostTitleCard>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </PostContent>
    </PostContainer>
  )
}
