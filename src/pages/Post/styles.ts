import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const PostTitleCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color['base-profile']};

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    font: ${({ theme }) => theme.font.link};
    color: ${({ theme }) => theme.color.blue};

    span,
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  h2 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font: ${({ theme }) => theme.font['title-l']};
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        height: 18px;
        width: 18px;
        color: ${({ theme }) => theme.color['base-label']};
      }

      span {
        color: ${({ theme }) => theme.color['base-span']};
      }
    }
  }
`

export const PostContent = styled.main`
  padding: 2.5rem 2rem;
  color: ${({ theme }) => theme.color['base-text']};
`
