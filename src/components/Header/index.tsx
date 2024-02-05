import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
