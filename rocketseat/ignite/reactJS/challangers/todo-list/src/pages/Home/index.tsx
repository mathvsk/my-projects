import { MainContainer, TasksContainer, TasksContent } from './style'
import { Trash } from '@phosphor-icons/react'

import { CheckBox } from '../../components/CheckBox'

import { useState } from 'react'
import { Header } from '../../components/Header'
import { NewTodo } from './NewTodo'
import { EmptyTask } from './EmptyTask'

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

  function handleDeleteTask(taskID: string) {
    const filteredTasks = todo.filter((task) => task.id !== taskID)
    setTodo(filteredTasks)
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
              <span> 0 de {todo.length}</span>
            </p>
          </div>

          {todo.length === 0 ? (
            <EmptyTask />
          ) : (
            todo.map((todo) => (
              <TasksContent key={todo.id}>
                <label htmlFor={todo.id}>
                  <CheckBox id={todo.id} />
                  <span>{todo.title}</span>
                </label>
                <button onClick={() => handleDeleteTask(todo.id)}>
                  <Trash size={16} />
                </button>
              </TasksContent>
            ))
          )}
        </TasksContainer>
      </MainContainer>
    </>
  )
}
