// App.tsx
import React from 'react';
import LoginIllustration from '../../assets/login-illustration.svg';
import BookVector from '../../assets/book_vector.svg'
import { useNavigate } from 'react-router-dom';

// Styled Components
import {
  AppContainer, Header, HeaderContent, BookLogo, HeaderLogo, 
  Main, ContentContainer, ImageSection, FormSection, 
  WelcomeText, Form, InputGroup, Input, PasswordInput, 
  EyeIcon, RememberSection, CheckboxLabel, Checkbox, 
  ForgotPassword, LoginButton, RegisterSection, RegisterLink 
} from './LoginPage.style';

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
