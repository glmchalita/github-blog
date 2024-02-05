import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const ProfileCard = styled.div`
  margin-top: -5.5rem;
  margin-bottom: 4.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.color['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;

  > img {
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 0.5rem;

    h2 {
      font: ${({ theme }) => theme.font['title-l']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme.color.blue};
      font: ${({ theme }) => theme.font.link};
      text-transform: uppercase;
    }
  }

  p {
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;

    color: ${({ theme }) => theme.color['base-text']};
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
        color: ${({ theme }) => theme.color['base-subtitle']};
      }
    }
  }
`

export const SearchContainer = styled.div`
  margin-bottom: 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;

    h3 {
      font: ${({ theme }) => theme.font['title-s']};
      color: ${({ theme }) => theme.color['base-subtitle']};
    }

    span {
      font: ${({ theme }) => theme.font['text-s']};
      color: ${({ theme }) => theme.color['base-span']};
    }
  }

  form {
    input {
      width: 100%;
      border-radius: 6px;
      padding: 12px 16px;
      border: 1px solid ${({ theme }) => theme.color['base-border']};

      background-color: ${({ theme }) => theme.color['base-input']};

      &::placeholder {
        color: ${({ theme }) => theme.color['base-label']};
      }
    }
  }
`

export const PostsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 416px);
  gap: 2rem;
`
