import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteTodoItem} = props
  const {title, id} = todoItemDetails

  const onDeleteTodoItem = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo-items">
      <p className="todo-title">{title}</p>
      <button
        type="button"
        className="delete-button"
        onClick={this.onDeleteTodoItem}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
