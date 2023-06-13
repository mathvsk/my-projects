import {
  HeaderContainer,
  InputContainer,
  MainContainer,
  TasksContainer,
  TasksContent,
} from './style'
import { PlusCircle, Trash } from '@phosphor-icons/react'

import Logo from '../../assets/logo.svg'
import { CheckBox } from '../../components/CheckBox'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" />
      </HeaderContainer>

      <MainContainer>
        <InputContainer>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button>
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </InputContainer>

        <TasksContainer>
          <div>
            <p>
              Tarefas criadas
              <span>5</span>
            </p>
            <p>
              Concluídas
              <span> 2 de 5</span>
            </p>
          </div>

          <TasksContent>
            <label htmlFor="teste">
              <CheckBox id="teste" />
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, assumenda delectus quas ipsam voluptatem numquam eos
                fuga veniam
              </span>
            </label>
            <button>
              <Trash size={16} />
            </button>
          </TasksContent>
        </TasksContainer>
      </MainContainer>
    </>
  )
}
