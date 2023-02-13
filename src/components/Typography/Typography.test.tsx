import { screen, render } from "@testing-library/react";
import Typography from ".";

describe("<Typography />", () => {
  it("Render Typography Component", () => {
    // arrange
    render(<Typography />);
  });

  // it("Text Props Debuging", () => {
  //   render(<Typography text="Hello" />);

  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug(); // DOM 트리를 console에 출력해 디버깅 가능
  // });

  it("Text Props Test", () => {
    render(<Typography text="Hello" />);

    // act
    const titleElement = screen.getByText("Hello");

    // assert
    expect(titleElement).toBeInTheDocument();
  });
});
