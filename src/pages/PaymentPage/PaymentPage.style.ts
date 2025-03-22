import styled from 'styled-components';

// 전체 컨테이너
export const AppContainer = styled.div`
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OrderTitleContainer = styled.div`
align-self: stretch;
color: #171A1F;

font-family: Archivo;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 150% */
`;

export const OrderContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
`;

export const Stroke = styled.hr`
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 0;
`;

export const PriceContainer = styled.div`
`;

// Styled Components for FileContainer
export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;
`;

export const TextInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
  align-items: center;
`;

export const InfoLabel = styled.span`
  color: #333;
  font-size: 16px;
`;

export const InfoValue = styled.span`
  color: #333;
  font-size: 16px;
  text-align: left;
`;

export const ImagePreviewArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  height: 100%;
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const PriceTag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const PriceLabel = styled.span`
  font-size: 16px;
  color: #555;
  margin-left: 20px;
  width: 150px; /* 고정된 너비 설정 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; /* 긴 단어가 있을 경우 줄바꿈 */
  white-space: normal; /* 공백과 줄바꿈을 정상적으로 처리 */
`;

export const PriceValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px; 
  margin-right: 20px; 
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Updated price rows to use grid for better alignment
export const PriceRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  align-items: center;
`;

export const PriceTitle = styled.span`
  font-size: 16px;
  color: #333;
`;

export const RludsInfo = styled.div`
  font-size: 16px;
  color: #666;
  text-align: left;
`;

export const TotalPriceRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const TotalPriceLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const TotalPriceValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #5165f6;
  text-align: left;
`;

export const PurchaseButton = styled.button`
  background-color: #5165f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #171A1F;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #555;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #e0e0e0;
  color: #333;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #5165f6;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const DownloadButton = styled.button`
  background-color: #5165f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;