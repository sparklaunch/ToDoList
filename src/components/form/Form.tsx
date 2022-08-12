import { useState, ChangeEvent, FormEvent } from "react";
import "./Form.css";

function Form({ postTodo }: { postTodo: Function }) {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        postTodo({ title, content });
        setTitle("");
        setContent("");
        event.preventDefault();
    };
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <div className="Form-fields">
                    <div className="Form-field">
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="Form-field">
                        <label htmlFor="content">내용</label>
                        <input
                            type="text"
                            id="content"
                            value={content}
                            onChange={handleContentChange}
                        />
                    </div>
                </div>
                <button type="submit" className="Form-submit">
                    등록
                </button>
            </form>
        </div>
    );
}

export default Form;
