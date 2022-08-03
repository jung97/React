import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div className="Todolist">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
export default TodoList;
