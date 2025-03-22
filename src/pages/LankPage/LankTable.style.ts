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
