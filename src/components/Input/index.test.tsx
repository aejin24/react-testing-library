import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import Input from ".";
import { inputAtom } from "../../recoil/form";
import RecoilObserver from "../RecoilObserver";

describe("The form state should", () => {
  test("change when the user enters a name.", () => {
    const onChange = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={inputAtom} onChange={onChange} />
        <Input />
      </RecoilRoot>
    );

    const component = screen.getByTestId("test");

    userEvent.type(component, "Test");

    expect(onChange).toHaveBeenCalledWith("Test2");
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
