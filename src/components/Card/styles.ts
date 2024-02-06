import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const CardContainer = styled(NavLink)`
  padding: 2rem;
  border-radius: 10px;
  height: 260px;
  background-color: ${({ theme }) => theme.color['base-post']};
  border: 2px solid transparent;
  transition: border-color 0.2s;

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

    span:first-letter {
      text-transform: uppercase;
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

  &:hover {
    border-color: ${({ theme }) => theme.color['base-label']};
  }
`
