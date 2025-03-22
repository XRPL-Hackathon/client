import NavBar from "@/components/NavBar/NavBar";
import {
  AppContainer, Main, ContentContainer,OrderTitleContainer, 
  OrderContentContainer, InfoSection, Container, TextInfoArea,
  InfoRow, InfoLabel, InfoValue, ImagePlaceholder, ImagePreviewArea,
  PriceTag, PriceLabel, PriceValue, Divider, PriceSection, PriceRow,
  PriceTitle, TotalPriceLabel, TotalPriceRow, TotalPriceValue,
  RludsInfo, Stroke, ModalContainer, ModalOverlay, ModalTitle, CloseButton,
  Checkbox, CheckboxContainer, CheckboxLabel, CancelButton, ButtonContainer, ConfirmButton,
  DownloadButton
} from './PaymentPage.style';
import { useState } from "react";

interface FileInfo {
  title: string;
  author: string;
  page: number;
  uploadDate: string;
  documentType: string;
  price: number;
}

interface RludsInfo {
  discount: number;
}

interface PaymentConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PaymentConfirmModal: React.FC<PaymentConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>결제 확인</ModalTitle>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <CheckboxContainer>
          <Checkbox 
            type="checkbox" 
            id="confirmCheckbox" 
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <CheckboxLabel htmlFor="confirmCheckbox">
            결제 이후에는 교환, 환불이 불가능합니다.
          </CheckboxLabel>
        </CheckboxContainer>
        
        <ButtonContainer>
          <CancelButton onClick={onClose}>결제 취소</CancelButton>
          <ConfirmButton 
            onClick={onConfirm}
            disabled={!isChecked}
            style={{ opacity: isChecked ? 1 : 0.6 }}
          >
            결제하기
          </ConfirmButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

interface FileContainerProps {
  fileInfo: FileInfo;
  totalPrice: number;
  onPurchase: () => void;
  isCompleted?: boolean;
  rludsInfo?: RludsInfo;
}

// FileContainer Component
const FileContainer: React.FC<FileContainerProps> = ({ fileInfo, totalPrice, onPurchase, isCompleted = false }) => {
  return (
    <Container>
      <InfoSection>
        <TextInfoArea>
          <InfoRow>
            <InfoLabel>상품명</InfoLabel>
            <InfoValue>{fileInfo.title}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>판매자</InfoLabel>
            <InfoValue>{fileInfo.author}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>페이지</InfoLabel>
            <InfoValue>{fileInfo.page}페이지</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>등록일</InfoLabel>
            <InfoValue>{fileInfo.uploadDate}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>문서 종류</InfoLabel>
            <InfoValue>{fileInfo.documentType}</InfoValue>
          </InfoRow>
        </TextInfoArea>
        
        <ImagePreviewArea>
          <ImagePlaceholder>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </ImagePlaceholder>
          <PriceTag>
            <PriceLabel>영화음악의 역사 중간고사 정리본</PriceLabel>
            <PriceValue>{fileInfo.price} RLUSD</PriceValue>
          </PriceTag>
        </ImagePreviewArea>
      </InfoSection>
      
      {!isCompleted && (
        <>
          <Divider />
          <PriceSection>
            <PriceRow>
              <PriceTitle>가격</PriceTitle>
              <InfoValue>{fileInfo.price} RLUSD (내 보유 RLUSD: 100 RLUSD)</InfoValue>
            </PriceRow>
            
            <PriceRow>
              <PriceTitle>할인 가격</PriceTitle>
              <RludsInfo>
                1 RLUSD
              </RludsInfo>
            </PriceRow>
            
            <TotalPriceRow>
              <TotalPriceLabel>결제 금액</TotalPriceLabel>
              <TotalPriceValue>{totalPrice} RLUSD</TotalPriceValue>
            </TotalPriceRow>
          </PriceSection>
        </>
      )}
      
      {!isCompleted ? (
        <DownloadButton onClick={onPurchase}>결제하기</DownloadButton>
      ) : (
        <DownloadButton>파일 다운로드</DownloadButton>
      )}
    </Container>
  );
};

interface PaymentCompletedContainerProps {
  fileInfo: FileInfo;
}

const PaymentCompletedContainer: React.FC<PaymentCompletedContainerProps> = ({ fileInfo }) => {
  const handleDownload = () => {
    console.log("파일 다운로드를 시작합니다.");
    // Add download logic here
  };

  return (
    <Container>
      <InfoSection>
        <TextInfoArea>
          <InfoRow>
            <InfoLabel>상품명</InfoLabel>
            <InfoValue>{fileInfo.title}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>판매자</InfoLabel>
            <InfoValue>{fileInfo.author}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>페이지</InfoLabel>
            <InfoValue>{fileInfo.page}페이지</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>등록일</InfoLabel>
            <InfoValue>{fileInfo.uploadDate}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>문서 종류</InfoLabel>
            <InfoValue>레포트</InfoValue>
          </InfoRow>
        </TextInfoArea>
        
        <ImagePreviewArea>
          <ImagePlaceholder>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </ImagePlaceholder>
          <PriceTag>
            <PriceLabel>영화음악역사 역사 중간고사 정리본</PriceLabel>
            <PriceValue>10 XRP</PriceValue>
          </PriceTag>
        </ImagePreviewArea>
      </InfoSection>
      
      <DownloadButton onClick={handleDownload}>파일 다운로드</DownloadButton>
    </Container>
  );
};

const PaymentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  
  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmPayment = () => {
    // 결제 처리 로직
    console.log("결제가 완료되었습니다.");
    setIsModalOpen(false);
    setIsPaymentCompleted(true);
  };

  const fileInfo = {
    title: '영화음악의 역사 중간고사 정리본',
    author: '제우스',
    page: 25,
    uploadDate: '2025.03.18',
    documentType: '레포트',
    price: 10
  };

  const rludsInfo = {
    discount: 1
  };

  const totalPrice = fileInfo.price - rludsInfo.discount;
  return (
    <AppContainer>
      <NavBar/>
      <Main>
      <ContentContainer>
          <OrderTitleContainer>
            {isPaymentCompleted ? "결제 완료!" : "주문서"}
          </OrderTitleContainer>
          <OrderContentContainer>
            {isPaymentCompleted ? (
              <>
                <PaymentCompletedContainer fileInfo={fileInfo} />
              </>
            ) : (
              <FileContainer 
                fileInfo={fileInfo}
                rludsInfo={rludsInfo}
                totalPrice={totalPrice}
                onPurchase={handlePurchaseClick}
              />
            )}
            <Stroke/>
          </OrderContentContainer>
        </ContentContainer>
      </Main>

      <PaymentConfirmModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmPayment}
      />

    </AppContainer>
  );
};

export default PaymentPage;
