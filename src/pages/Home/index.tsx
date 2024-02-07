import { useEffect, useState } from 'react'
import { usePosts } from '../../hooks/usePosts'

import { Card } from '../../components/Card'

import { api } from '../../lib/axios'

import {
  HomeContainer,
  PostsListContainer,
  ProfileCard,
  ProfileContent,
  SearchContainer,
} from './styles'

import { SearchForm } from './SearchForm'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProfileInputs {
  avatar_url: string
  html_url: string
  login: string
  name: string
  bio: string
  company: string
  followers: number
}

export function Home() {
  const { posts } = usePosts()
  const [profile, setProfile] = useState({} as ProfileInputs)

  async function loadProfile() {
    const response = await api.get('users/glmchalita')
    setProfile(response.data)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <HomeContainer>
      <ProfileCard>
        <img src={profile.avatar_url} alt="" height={148} width={148} />

        <ProfileContent>
          <div>
            <h2>{profile.name}</h2>

            <a href={profile.html_url}>
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>

          <p>{profile.bio}</p>

          <div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile.login}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profile.company === null ? 'N/A' : profile.company}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profile.followers} seguidores</span>
            </div>
          </div>
        </ProfileContent>
      </ProfileCard>

      <SearchContainer>
        <div>
          <h3>Publicações</h3>
          <span>{posts.length} publicações</span>
        </div>

        <SearchForm />
      </SearchContainer>

      <PostsListContainer>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              createdAt={post.created_at}
            />
          )
        })}
      </PostsListContainer>
    </HomeContainer>
  )
}
