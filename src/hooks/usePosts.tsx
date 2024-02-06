import { useContext } from 'react'

import { PostContext } from '../contexts/postContext'

export function usePosts() {
  return useContext(PostContext)
}
