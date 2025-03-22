import { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import {
  FileAskPageWrapper,
  Content,
  Title,
  Input,
  Select,
  TextArea,
  PriceBox,
  TotalAmount,
  SubmitButton,
} from "./FileAskPage.style";

const FileAskPage = () => {
  const [xrpPrice, setXrpPrice] = useState(10); // XRP 가격 상태
  const [rlusdPrice, setRlusdPrice] = useState(2); // RLUSD 수수료 상태

  // 💡 가격(XRP) + 수수료(RLUSD)의 합을 계산
  const totalPrice = xrpPrice + rlusdPrice;

  return (
    <>
      <NavBar />
      <FileAskPageWrapper>
        <Content>
          <Title>자료 요청하기</Title>

          <label>제목</label>
          <Input type="text" placeholder="제목 입력" />

          <label>카테고리</label>
          <Select>
            <option>모든 자료</option>
            <option>시험 자료</option>
            <option>자소서</option>
            <option>이력서</option>
            <option>레포트</option>
            <option>악보</option>
            <option>기타</option>
          </Select>

          <label>세부 내용 설명</label>
          <TextArea placeholder="자료 설명하세요"></TextArea>

          <PriceBox>
            <p>
              가격:
              <Input
                type="number"
                value={xrpPrice}
                onChange={(e) => setXrpPrice(Number(e.target.value))}
              />
              (내 보유 RLUSD: 100 RLUSD)
            </p>
            <p>
              수수료:
              <Input
                type="number"
                value={rlusdPrice}
                onChange={(e) => setRlusdPrice(Number(e.target.value))}
              />
              (내 보유 RLUSD: 100 RLUSD)
            </p>
          </PriceBox>

          <TotalAmount>
            결제 금액: <strong>{totalPrice} RLUSD</strong>
          </TotalAmount>

          <SubmitButton>자료 요청하기</SubmitButton>
        </Content>
      </FileAskPageWrapper>
    </>
  );
};

export default FileAskPage;
