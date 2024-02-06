import { useForm } from 'react-hook-form'

import { usePosts } from '../../../hooks/usePosts'

import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts } = usePosts()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>()

  function handleSearchForm(data: SearchFormInputs) {
    fetchPosts(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchForm)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        required
        {...register('query')}
        disabled={isSubmitting}
      />
    </form>
  )
}
