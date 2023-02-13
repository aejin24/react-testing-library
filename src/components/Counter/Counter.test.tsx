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
  it("Render Counter Component", () => {
    render(<Counter />); // 테스트를 위해 컴포넌트를 jsdom에 렌더링
  });

  it("Click Plus Button", () => {
    render(<Counter />);

    const plusButton = screen.getByRole("button", { name: "+" }); // name(TextMatch)

    userEvent.click(plusButton);
    userEvent.click(plusButton);

    // text가 여러 개일 때는 testid를 찾아서 가져오거나 해야하나?
    // 다른 방법으로 선택하지 못할 때 사용하는 방법, querySelector로도 가져올 수 있으나 차라리 data-testid 로 설정
    const countText = screen.getByTestId("count");

    expect(countText).toHaveTextContent("2"); // jest-dom의 확장 matcher 사용
  });

  it("Click Minus Button", () => {
    render(<Counter />);

    const minusButton = screen.getByRole("button", { name: "-" });
    userEvent.click(minusButton);

    const countText = screen.getByTestId("count");

    expect(countText).toHaveTextContent("-1");
  });
});
