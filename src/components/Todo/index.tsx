import { useState } from "react";

type Props = {
  list: {
    id: number;
    title: string;
    content: string;
  }[];
};

export default function Todo({ list }: Props) {
  const [todoList, setTodoList] = useState(list);
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleClick = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        ...todo,
      },
    ]);

    setTodo({
      title: "",
      content: "",
    });
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
          value={todo.title}
          onChange={handleChange}
          style={{ width: "300px", height: "30px", marginRight: "8px" }}
        />
        <textarea
          name="content"
          placeholder="내용을 입력해주세요."
          value={todo.content}
          onChange={handleChange}
          style={{ width: "300px", height: "30px", marginRight: "8px" }}
        />
        <button type="button" onClick={handleClick}>
          추가
        </button>
      </div>

      <hr />

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <div>
              {todo.content}
              <button
                aria-label={String(todo.id)}
                style={{ marginLeft: "8px" }}
                type="button"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
