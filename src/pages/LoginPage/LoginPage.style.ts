import styled from "styled-components";

// 전체 컨테이너
export const AppContainer = styled.div`
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FormSection = styled.div`
  flex: 1;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const WelcomeText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f8f8f8;

  &:focus {
    outline: none;
    border-color: #4a7bff;
  }
`;

export const PasswordInput = styled(InputGroup)`
  position: relative;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
`;

export const RememberSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  font-size: 14px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
  color: #555;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ForgotPassword = styled.a`
  font-size: 13px;
  color: #555;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  background-color: #4a7bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 10px 0;

  &:hover {
    background-color: #3a6ae8;
  }
`;

export const RegisterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  font-size: 13px;
`;

export const RegisterLink = styled.a`
  color: #4a7bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
