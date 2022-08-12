import "./List.css";
import TodoItem from "../todo/TodoItem";
import Todo from "../../utils/TodoType";
import { useMemo } from "react";

function List({
    todos,
    deleteTodo,
    completeTodo,
    cancelTodo
}: {
    todos: Todo[];
    deleteTodo: Function;
    completeTodo: Function;
    cancelTodo: Function;
}) {
    const numberOfWorkingTodos = useMemo(() => {
        return todos.filter(({ isDone }) => !isDone).length;
    }, [todos]);
    const numberOfDoneTodos = useMemo(() => {
        return todos.filter(({ isDone }) => isDone).length;
    }, [todos]);
    return (
        <div className="List">
            <h2 className="List-working-title">
                Working Todos ({numberOfWorkingTodos})
            </h2>
            <div className="List-working">
                {todos
                    .filter((todo) => !todo.isDone)
                    .map((workingTodo) => (
                        <TodoItem
                            key={workingTodo.id}
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                            cancelTodo={cancelTodo}
                            {...workingTodo}
                        />
                    ))}
            </div>
            <h2 className="List-done-title">
                Done todos ({numberOfDoneTodos})
            </h2>
            <div className="List-done">
                {todos
                    .filter((todo) => todo.isDone)
                    .map((doneTodo) => (
                        <TodoItem
                            key={doneTodo.id}
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                            cancelTodo={cancelTodo}
                            {...doneTodo}
                        />
                    ))}
            </div>
        </div>
    );
}

export default List;
