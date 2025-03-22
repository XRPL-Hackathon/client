import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 30px;
  width: 75vw;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .title {
    color: #424856;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 155.556% */

    margin-top: 10px;
    border-bottom: 1px solid #dee1e6;
    align-items: left;
    width: 100%;
    padding-bottom: 20px;
  }
`;
export const SearchItemDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 6px;
  width: 100%;
  padding: 15px 12px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #bdc1ca;
  background: #fff;
`;

export const StyledInput = styled.input`
  width: 95%;
  height: 90%;
  border: none;
  &::placeholder {
    color: #b3b3b3;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchItemList = styled.div`
  position: absolute;
  top: 100%; /* 검색창 바로 아래에 위치 */
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 5px;
  max-height: 200px;
  overflow-y: auto;
  border: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 4px 8px rgba(109, 108, 108, 0.1);
`;

export const SearchItem = styled.button`
  padding: 10px;
  cursor: pointer;
  display: flex;
  border: none;
  textsize: 10px;
  background-color: transparent;
  border-radius: 8px;
  font-size: 12px;
  align-items: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CategoryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CategoryItem = styled.button`
  display: inline-flex;
  padding: 7px 14px 7px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #9095a1;
  background: #fff;

  color: #9095a1;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  &:hover {
    background-color: #f5f5f5;
  }
`;

// StyledDiv (전체 컨테이너)
export const MainContent = styled.div`
  padding: 20px;
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid #dee1e6;
  background: #fff;
  flex-direction: column;
`;

// SearchItemList (아이템 리스트)
export const FileItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 배치 */
  gap: 20px;
  width: 100%;
  max-width: 1200px; /* 최대 너비 설정 */
`;

// SearchItem (각 카드 아이템)
export const FileItem = styled.div`
  border-radius: 16px;
  border: 1px solid #dee1e6;
  background: #fff;
  box-shadow: 0 4px 8px rgba(109, 108, 108, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Image (이미지 영역)
export const FileImage = styled.div`
  height: 120px;
  width: 70px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

// Info (정보 영역)
export const FileInfo = styled.div`
  padding: 10px;
`;

// Label (자료 레이블)
export const FileLabel = styled.div`
  display: flex;

  padding: 7px 16px 7px 12px;
  align-items: center;
  flex-shrink: 0;
  display: inline-block;
  border-radius: 18px;
  background: #f3f4f6;
  padding: 5px 10px;
  font-size: 14px;
  margin-bottom: 5px;
`;

// Description (자료 설명)
export const FileDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin-left: 10px;
  margin-bottom: 0px;
  margin-top: 0px;
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
  margin-bottom: 50px;
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

export const StyledLankLabel = styled.div<{ rank: number }>`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  \
  color: ${({ rank }) =>
    rank === 1
      ? "#D5A11E"
      : rank === 2
      ? "#A3A3A3"
      : rank === 3
      ? "#CD7F32"
      : "#9095A1"};
  border-radius: 18px;
  padding: 5px 10px;
  font-size: 16px;
`;
export const LankDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
`;
export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px; /* 충분히 높이를 키워서 애니메이션이 보이게 설정 */
  overflow: hidden;
  margin-bottom: 10px;
`;

export const RankContent = styled.div`
  display: flex;
  flex-direction: column; /* 수직으로 배치 */
  animation: slide 9s infinite; /* 슬라이드 애니메이션 */

  @keyframes slide {
    0% {
      transform: translateY(40px);
    }
    33.33% {
      transform: translateY(0px); /* 첫 번째 아이템이 위로 이동 */
    }
    66.66% {
      transform: translateY(-40px); /* 두 번째 아이템이 위로 이동 */
    }
    100% {
      transform: translateY(40px); /* 다시 원위치 */
    }
  }
`;

export const RankItem = styled.div`
  flex: 0 0 30px; /* 고정된 크기로 설정 */
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0 10px;
  border-radius: 8px;
`;
