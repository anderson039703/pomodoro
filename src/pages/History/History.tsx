import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useCyclesContext } from '../../context'
import * as S from './styles'

export function History() {
  const { cycles } = useCyclesContext()

  console.log(cycles)
  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>
      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDete && (
                    <S.Status statusColor="green">Concluido</S.Status>
                  )}
                  {cycle.interruptedDate && (
                    <S.Status statusColor="red">Interrompido</S.Status>
                  )}
                  {!cycle.finishedDete && !cycle.interruptedDate && (
                    <S.Status statusColor="yellow">Em andamento</S.Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
