import styled from "styled-components";

export const LankTable = styled.table`
  border-radius: 16px;
  border: 1px solid #dee1e6;
  background: rgba(0, 0, 0, 0);
  width: 55vw;
  border-collapse: separate;
  text-align: center;

  .header {
    border-bottom: 1px solid #dee1e6;
    background: #fafafb;
    padding: 10px;
  }
  .td {
    padding: 10px;
  }
  .tr:nth-child(2n + 0) {
    border: 0px solid #dee1e6;
    background: #fafafb;
  }
`;

export const StyledLankPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 16px;
  gap: 16px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
`;

export const PageButton = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  background-color: ${({ active }) => (active ? "#636ae8" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#9095A1")};
  border-radius: 16px;
  border: 1px solid ${({ active }) => (active ? "#636ae8" : "#dee1e6")};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#636ae8" : "#f0f0f0")};
    border-color: #636ae8; /* hover 시 border 색상 변경 */
  }
`;

export const ArrowButton = styled.button`
  padding: 8px;
  background-color: #fff;
  color: #636ae8;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #fff; /* 화살표 버튼에는 hover 배경색을 없애거나 투명하게 */
  }
`;

export const Ellipsis = styled.span`
  color: #636ae8;
`;
