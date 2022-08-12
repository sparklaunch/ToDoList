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
        <div
            className="TodoItem"
            style={
                isDone
                    ? {
                          background:
                              "linear-gradient(to right, #dd3e54, #6be585)"
                      }
                    : {}
            }
        >
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
                        className="cancel-button"
                        onClick={() => {
                            cancelTodo(id);
                        }}
                    >
                        취소
                    </button>
                ) : (
                    <button
                        className="complete-button"
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
