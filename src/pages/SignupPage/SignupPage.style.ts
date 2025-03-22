import styled from 'styled-components';

// 전체 컨테이너
export const AppContainer = styled.div`
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

// 헤더 스타일
export const Header = styled.header`
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const BookLogo = styled.img`
  height: 24px;
  width: auto;
  margin-right: 10px;
`;

export const HeaderLogo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

// 메인 섹션
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 60px);
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-self: stretch;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #888;
  
  &:focus {
    outline: none;
  }
`;

export const Indicators = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 1rem;
`;

export interface DotProps {
  active: boolean;
}

export const Dot = styled.div<DotProps>`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${props => props.active ? '#7C7E83' : '#DEE1E6'};
`;

export const SignupContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #171A1F;
  text-align: center;
  font-family: Archivo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  color: #323842;
  text-align: center;
  font-family: Archivo;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f5f5f5;
  
  &:focus {
    outline: none;
    border-color: #5165f6;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const ToggleVisibility = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #5165f6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    background-color: #4050d0;
  }
`;

export const ForgotPassword = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export const ForgotLink = styled.a`
  color: #5165f6;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding-top:2rem;
  padding-bottom:1rem;
`;

export const WalletButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const WalletButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #565E6D;
  background: #FFF;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  box-sizing: border-box;
`;

export const SuccessMessage = styled.h1`
  color: #171A1F;
font-family: Archivo;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 150% */
`;