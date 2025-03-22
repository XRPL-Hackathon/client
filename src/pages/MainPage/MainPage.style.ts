import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 45%;
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
  padding: 20px 10px;
  cursor: pointer;
  display: flex;
  border: none;
  textsize: 10px;
  background-color: transparent;
  border-radius: 8px;
  align-items: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;
