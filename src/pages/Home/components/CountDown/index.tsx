import * as S from './styles'

interface ICountDownProps {
  minutes: string
  seconds: string
}

export function CountDown({ minutes, seconds }: ICountDownProps) {
  return (
    <S.CountDownCotainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountDownCotainer>
  )
}
