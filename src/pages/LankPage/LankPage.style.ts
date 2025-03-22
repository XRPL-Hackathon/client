import styled from "styled-components";

export const StyledLankPage = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100vh;
  margin: 40px 16px;
  gap: 16px;
`;

export const LankDescription = styled.div`
  border-radius: 16px;
  border: 1px solid #dee1e6;
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  .maintitle {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #636ae8;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
    margin-bottom: 30px;
    margin-left: 16px;
  }

  .subtitle {
    color: #323743;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 157.143% */
  }

  .description {
    color: #323743;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    margin-top: 8px;
    margin-left: 16px;
    margin-bottom: 30px;
  }
`;

export const Lank = styled.div`
  border-radius: 16px;
  border: 1px solid #dee1e6;
  background: #fff;
`;
