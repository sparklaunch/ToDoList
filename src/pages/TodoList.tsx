import List from "../components/list/List";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Todo from "../utils/TodoType";
import { useState } from "react";

function TodoList() {
    const [idCounter, setIdCounter] = useState<number>(0);
    const [todos, setTodos] = useState<Todo[]>([]);
    const postTodo = ({
        title,
        content
    }: {
        title: string;
        content: string;
    }) => {
        const todo: Todo = {
            id: idCounter,
            title: title,
            content: content,
            isDone: false
        };
        setTodos([...todos, todo]);
        setIdCounter((idCounter) => idCounter + 1);
    };
    const deleteTodo = (id: number) => {
        setTodos([...todos].filter((todo) => todo.id !== id));
    };
    const completeTodo = (id: number) => {
        setTodos(
            [...todos].map((todo) => {
                if (todo.id === id) {
                    todo.isDone = true;
                }
                return todo;
            })
        );
    };
    const cancelTodo = (id: number) => {
        setTodos(
            [...todos].map((todo) => {
                if (todo.id === id) {
                    todo.isDone = false;
                }
                return todo;
            })
        );
    };
    return (
        <div>
            <Layout>
                <Header />
                <Form postTodo={postTodo} />
                <List
                    todos={todos}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    cancelTodo={cancelTodo}
                />
            </Layout>
        </div>
    );
}

export default TodoList;
