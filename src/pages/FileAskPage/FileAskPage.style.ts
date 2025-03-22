import styled from "styled-components";

export const FileAskPageWrapper = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 20px; /* NavBar 아래 여백 */
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px; /* 기존보다 더 넓게 설정 */
  padding: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left; /* 왼쪽 정렬 */
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 18px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 16px; /* 제목 입력 필드와 동일 */
  font-size: 18px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  appearance: none; /* 기본 화살표 제거 (스타일 커스텀 가능) */
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 16px;
  font-size: 18px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const PriceBox = styled.div`
  margin-top: 20px;
  font-size: 18px;

  p {
    margin: 8px 0;
  }
`;

export const TotalAmount = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #6366f1;
  color: white;
  padding: 18px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #4f46e5;
  }
`;
