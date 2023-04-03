import { useTodos } from "../hooks";
import { TodoAdd,TodoList,todoReducer } from "./index";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount,handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();

    return (
        <>
            <h1>Todo App: {todos.length}, <small>pendientes: {todos.filter(todo=>!todo.done).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo}
                    onToggleTodo={ handleToggleTodo}
                    />
                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}

