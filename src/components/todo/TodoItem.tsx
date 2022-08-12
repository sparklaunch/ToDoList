import "./TodoItem.css";

function TodoItem({
    title,
    content,
    id,
    isDone,
    deleteTodo,
    completeTodo,
    cancelTodo
}: {
    title: string;
    content: string;
    id: number;
    isDone: boolean;
    deleteTodo: Function;
    completeTodo: Function;
    cancelTodo: Function;
}) {
    return (
        <div className="TodoItem">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="content">{content}</div>
            <div className="operations">
                <button
                    onClick={() => {
                        deleteTodo(id);
                    }}
                >
                    삭제
                </button>
                {isDone ? (
                    <button
                        onClick={() => {
                            cancelTodo(id);
                        }}
                    >
                        취소
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            completeTodo(id);
                        }}
                    >
                        완료
                    </button>
                )}
            </div>
        </div>
    );
}

export default TodoItem;
