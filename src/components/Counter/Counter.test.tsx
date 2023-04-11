import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import Counter from ".";
import { counterAtom } from "../../recoil/counter";
import RecoilObserver from "../RecoilObserver";

describe("<Counter />", () => {
  it("should set init number(0) in screen", () => {
    const onChange = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={counterAtom} onChange={onChange} />
        <Counter />
      </RecoilRoot>
    );

    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("should add number when click plus button", () => {
    const onChange = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={counterAtom} onChange={onChange} />
        <Counter />
      </RecoilRoot>
    );

    const plusButton = screen.getByRole("button", { name: "+" });

    userEvent.click(plusButton);
    userEvent.click(plusButton);

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("should minus number when click minus button", () => {
    const onChange = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={counterAtom} onChange={onChange} />
        <Counter />
      </RecoilRoot>
    );

    const minusButton = screen.getByRole("button", { name: "-" });
    userEvent.click(minusButton);

    expect(onChange).toHaveBeenCalledWith(-1);
  });
});
