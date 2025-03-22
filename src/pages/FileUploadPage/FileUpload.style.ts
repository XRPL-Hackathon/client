import styled from "styled-components";

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55vh;
  height: 330px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0px solid #9095a1;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(23, 26, 31, 0.12),
    0px 4px 9px 0px rgba(23, 26, 31, 0.11);

  .desdiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    height: 200px;
    gap: 20%;
  }

  .text {
    color: #379ae6;
    text-align: center;
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
  }

  .UploadWrapperActive {
    background: #0000000f;
    width: 400px;
    height: 200px;
    border: 2px dotted black;
    opacity: 0.7;
  }

  .UploadArea {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .FileContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-top: 10px;
    gap: 2px;
  }

  .UploadFile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
    background-color: #0000000f;
    border-radius: 5px;
  }

  .Filename {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .DeleteBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: center;
  }

  .DeleteBtn:hover {
    cursor: pointer;
  }
`;
