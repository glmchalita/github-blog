import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { PostProvider } from './contexts/postContext'
import Router from './Router'
import { ThemeProvider } from 'styled-components'

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
