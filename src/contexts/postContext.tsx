import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

interface PostsInputs {
  id: number
  html_url: string
  created_at: string
  title: string
  body: string
  comments: number
  user: {
    login: string
  }
}

interface PostContextProps {
  children: ReactNode
}

interface PostContextType {
  posts: PostsInputs[]
  fetchPosts: (query?: string) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostContextProps) {
  const [posts, setPosts] = useState<PostsInputs[]>([])

  async function fetchPosts(query?: string) {
    let params = {}
    if (query) {
      params = {
        q: `${query}`,
        repo: 'caffeinemc/sodium-fabric',
        per_page: 6,
      }
    } else {
      params = {
        q: 'repo:caffeinemc/sodium-fabric',
        per_page: 6,
      }
    }

    const response = await api.get('search/issues', { params })

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
