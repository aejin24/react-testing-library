import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

/**
 * Query 렌더링 된 DOM 노드에 접근하여 엘리먼트를 가져오는 메서드
 *
 * query type
 * get - sync, 타겟을 찾지 못할 시 throw error
 * find - async, 타겟을 찾지 못할 시 throw error
 * query - sync, 타겟 찾지 못할시 return null
 */

// describe - 같은 맥락 테스트 그룹화

describe("<Counter />", () => {
  // it - 개별 테스트 수행 (test 메서드와 동일)
  it("should set init number(0) in screen", () => {
    render(<Counter />); // 테스트를 위해 컴포넌트를 jsdom에 렌더링

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should add number when click plus button", () => {
    render(<Counter />);

    const plusButton = screen.getByRole("button", { name: "+" }); // name(TextMatch)

    userEvent.click(plusButton);
    userEvent.click(plusButton);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should minus number when click minus button", () => {
    render(<Counter />);

    const minusButton = screen.getByRole("button", { name: "-" });
    userEvent.click(minusButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
