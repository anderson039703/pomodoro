import { useFormContext } from 'react-hook-form'
import { ICycle } from '../../../../context'
import * as S from './styles'

interface INewCycleFormProps {
  activeCycle?: ICycle
}

export function NewCycleForm({ activeCycle }: INewCycleFormProps) {
  const { register } = useFormContext()
  return (
    <S.FormContainer>
      <label htmlFor="task"> vou trabalhar em</label>
      <S.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Nome para o projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </S.FormContainer>
  )
}
