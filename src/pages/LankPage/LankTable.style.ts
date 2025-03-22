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
    align-items: center;
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

export const StyledLankLabel = styled.div<{ rank: string }>`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  background-color: ${({ rank }) =>
    rank === "브론즈"
      ? "#FFF5F0"
      : rank === "실버"
      ? "#F4F6FB"
      : rank === "골드"
      ? "#FEF9EE"
      : "#EFFCFA"};
  color: ${({ rank }) =>
    rank === "브론즈"
      ? "#672700"
      : rank === "실버"
      ? "#263F6D"
      : rank === "골드"
      ? "#98690C"
      : "#147567"};
  border-radius: 18px;
  width: 80px;
  font-size: 14px;
  text-align: center; /* 텍스트 가운데 정렬 */
  width: 100%; /* 셀의 너비 전체를 사용 */
`;
