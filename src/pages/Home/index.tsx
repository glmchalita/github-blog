import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Card } from '../../components/Card'

import {
  HomeContainer,
  PostsListContainer,
  ProfileCard,
  ProfileContent,
  SearchContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard>
        <img src="https://placeholder.com/148x148" alt="" />

        <ProfileContent>
          <div>
            <h2>Guilherme Chalita</h2>

            <a href="#">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>glmchalita</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </div>
        </ProfileContent>
      </ProfileCard>

      <SearchContainer>
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>

        <form>
          <input type="text" placeholder="Buscar conteúdo" required />
        </form>
      </SearchContainer>

      <PostsListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </PostsListContainer>
    </HomeContainer>
  )
}
