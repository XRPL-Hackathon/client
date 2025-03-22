import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 50px;
  width: 75vw;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const SearchItemDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  margin-top: 13px;
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
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid #dee1e6;
  background: #fff;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
