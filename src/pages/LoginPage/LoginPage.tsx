// App.tsx
import React from 'react';
import styled from 'styled-components';
import LoginIllustration from '../../assets/login-illustration.svg';
import BookVector from '../../assets/book_vector.svg'
import { useNavigate } from 'react-router-dom';

// Styled Components
const AppContainer = styled.div`
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  `;

const Header = styled.header`
  padding: 15px 20px;
  //border-bottom: 1px solid #e1e1e1;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const BookLogo = styled.img`
  height: 24px;
  width: auto;
  margin-right: 10px;
`;

const HeaderLogo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  //border: 1px solid #2ecc71;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormSection = styled.div`
  flex: 1;
  //border: 1px solid #2ecc71;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const WelcomeText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
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

const PasswordInput = styled(InputGroup)`
  position: relative;
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
`;

const RememberSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  font-size: 14px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
  color: #555;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  font-size: 13px;
  color: #555;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
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

const RegisterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  font-size: 13px;
`;

const RegisterLink = styled.a`
  color: #4a7bff;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage: React.FC = () => {
  let navigate = useNavigate();

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <BookLogo src={BookVector} alt="Book Logo" />
          <HeaderLogo>XRPedia</HeaderLogo>
        </HeaderContent>
      </Header>
      
      <Main>
        <ContentContainer>
          <ImageSection>
            <img 
              src={LoginIllustration} 
              alt="Woman interacting with documents" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </ImageSection>
          
          <FormSection>
            <WelcomeText>
              XRPedia에 온 것을 환영해요! 👋
            </WelcomeText>
            
            <Form>
              <InputGroup>
                <Input type="email" placeholder="e-mail" />
              </InputGroup>
              
              <PasswordInput>
                <Input type="password" placeholder="password" />
                <EyeIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </EyeIcon>
              </PasswordInput>
              
              <RememberSection>
                <CheckboxLabel>
                  <Checkbox type="checkbox" />
                  로그인 상태 유지
                </CheckboxLabel>
                
                <ForgotPassword href="#">비밀번호 찾기</ForgotPassword>
              </RememberSection>
              
              <LoginButton type="submit">로그인</LoginButton>
            </Form>
            
            <RegisterSection>
              <span>계정이 없으신가요?</span>
              <RegisterLink onClick={() => navigate('/signup')}>회원가입</RegisterLink>
            </RegisterSection>
          </FormSection>
        </ContentContainer>
      </Main>
    </AppContainer>
  );
};

export default LoginPage;
