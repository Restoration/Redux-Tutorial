import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo, ActionsType } from '../actions'

interface AddTodoProps {
  dispatch: React.Dispatch<ActionsType>;
}

const AddTodo: React.SFC<AddTodoProps> = ({ dispatch }): JSX.Element => {
  let input

  return (
    <div>
      <form
        onSubmit={ (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
