import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color['base-post']};
  height: 260px;

  h2 {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    font: ${({ theme }) => theme.font['title-m']};
    span {
      font: ${({ theme }) => theme.font['text-s']};
      color: ${({ theme }) => theme.color['base-span']};
      white-space: nowrap;
    }
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    font: ${({ theme }) => theme.font['text-m']};
    color: ${({ theme }) => theme.color['base-text']};
  }
`
