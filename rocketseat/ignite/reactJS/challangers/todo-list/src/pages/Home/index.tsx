import { MainContainer, TasksContainer, TasksContent } from './style'
import { Trash } from '@phosphor-icons/react'

import { CheckBox } from '../../components/CheckBox'

import { useState } from 'react'
import { Header } from '../../components/Header'
import { NewTodo } from './NewTodo'

export interface Todo {
  id: string
  title: string
}

export function Home() {
  const [todo, setTodo] = useState<Todo[]>([])

  function addNewTodo(newTodo: string) {
    setTodo([
      {
        id: String(Math.random()),
        title: newTodo,
      },
      ...todo,
    ])
  }

  return (
    <>
      <Header />

      <MainContainer>
        <NewTodo onAddNewTodo={addNewTodo} />

        <TasksContainer>
          <div>
            <p>
              Tarefas criadas
              <span>{todo.length}</span>
            </p>
            <p>
              Concluídas
              <span> 2 de {todo.length}</span>
            </p>
          </div>

          {todo.map((todo) => (
            <TasksContent key={todo.id}>
              <label htmlFor="teste">
                <CheckBox id="teste" />
                <span>{todo.title}</span>
              </label>
              <button>
                <Trash size={16} />
              </button>
            </TasksContent>
          ))}
        </TasksContainer>
      </MainContainer>
    </>
  )
}
