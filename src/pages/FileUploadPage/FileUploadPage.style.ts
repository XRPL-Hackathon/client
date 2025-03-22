import styled from "styled-components";

export const MarginDiv = styled.div`
  height: 50px;
`;

export const StyledFileUploadPage = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  .title {
    color: #171a1f;
    font-family: Archivo;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 150% */
    text-align: start;
  }
`;

export const FileUploadContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 30px;
`;

export const FileUploadDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 16px;
  margin-left: 16px;

  .ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .li {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-bottom: 20px;
  }

  .title {
    color: #424856;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 155.556% */
    margin-bottom: 5px;
  }

  .name_input {
    padding: 10px;
    width: 40vw;
    border-radius: 6px 6px 0px 0px;
    border: 0px solid rgba(0, 0, 0, 0);
    background: #fff;
    color: #171a1f;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }

  .price_input {
    padding: 10px;
    width: 20vw;
    border-radius: 6px 6px 0px 0px;
    border: 0px solid rgba(0, 0, 0, 0);
    background: #fff;
    color: #171a1f;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }

  .div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .textarea {
    color: #171a1f;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    padding: 10px;
    width: 40vw;
    border-radius: 6px 6px 0px 0px;
    border: 0px solid rgba(0, 0, 0, 0);
    background: #fff;
  }

  .select {
    color: #171a1f;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    padding: 10px;
    width: 40vw;
    border-radius: 6px 6px 0px 0px;
    border: 0px solid rgba(0, 0, 0, 0);
    background: #fff;
  }

  .description {
    color: #323743;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    line-height: 22px;
    margin-top: 8px;
    margin-bottom: 30px;
  }

  hr {
    stroke-width: 1px;
    stroke: #bdc1ca;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .button {
    display: flex;
    width: 513px;
    padding: 12px 216px 12px 209px;
    align-items: center;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0);
    background: #636ae8;
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }

  .button:hover {
    background: #4f55c1;
  }
`;
