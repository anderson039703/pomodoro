import * as S from './styles'
import { CiAlarmOn, CiBoxList } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <S.HeaderContainer>
      <h1>AP</h1>
      <nav>
        <NavLink to="/" title="Timer">
          <CiAlarmOn width={15} height={15} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <CiBoxList width={3} height={3} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
