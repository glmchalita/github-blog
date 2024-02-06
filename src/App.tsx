import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { PostProvider } from './contexts/postContext'
import Router from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
