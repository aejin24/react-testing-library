import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from ".";
import { TODO_LIST } from "../../data/todo";

describe("<Todo />", () => {
  it("should render todo list of 3 todos", () => {
    render(<Todo list={TODO_LIST} />);

    const todoList = screen.getByRole("list");
    const todos = within(todoList).getAllByRole("listitem");

    expect(todos).toHaveLength(3);
  });

  it("should add todo when add button click", () => {
    render(<Todo list={TODO_LIST} />);

    const titleElement = screen.getByPlaceholderText("제목을 입력해주세요.");
    const contentElement = screen.getByPlaceholderText("내용을 입력해주세요.");

    userEvent.type(titleElement, "aejin");
    userEvent.type(contentElement, "aezing");

    const addButton = screen.getByRole("button", { name: /추가/ });

    userEvent.click(addButton);

    const todoList = screen.getByRole("list");
    const todos = within(todoList).getAllByRole("listitem");
    const lastItem = within(todos[3]);

    expect(lastItem.getByText(/aejin/)).toBeTruthy();
    expect(lastItem.getByText(/aezing/)).toBeTruthy();
    expect(todos).toHaveLength(4);

    userEvent.clear(titleElement);
    userEvent.clear(contentElement);

    expect(titleElement).toHaveTextContent("");
    expect(contentElement).toHaveTextContent("");
  });

  it("should delete todo with id 2 when delete button click", () => {
    render(<Todo list={TODO_LIST} />);

    const deleteButton = screen.getByRole("button", { name: /2/ }); //aria-label로 체크

    userEvent.click(deleteButton);

    const todoList = screen.getByRole("list");
    const todos = within(todoList).getAllByRole("listitem");

    expect(todos).not.toBeNull();
    expect(todos).toHaveLength(2);
  });
});
