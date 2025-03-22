import BookVector from '../../assets/book_vector.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletIcon from '../../assets/wallet_icon.svg';
import ConnectIcon from '../../assets/connect_icon.svg'

import {
  AppContainer, Header, HeaderContent, BookLogo, HeaderLogo, 
  Main, ProgressBarContainer, Navigation, NavButton, Indicators, 
  Dot, SignupContainer, Title, Subtitle, FormGroup, Label, Input,
  PasswordContainer, ToggleVisibility, SubmitButton, ForgotPassword, 
  ForgotLink, WalletButton, WalletButtonContainer, WalletContainer
} from './SignupPage.style';

// Component Interfaces
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, onPrevious, onNext }) => {
  return (
    <ProgressBarContainer>
      <Navigation>
        <NavButton onClick={onPrevious}>&lt;</NavButton>
        <Indicators>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <Dot key={index} active={index === currentStep - 1} />
          ))}
        </Indicators>
        <NavButton onClick={onNext}>&gt;</NavButton>
      </Navigation>
    </ProgressBarContainer>
  );
};

const SignupForm: React.FC = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <Subtitle>회원 정보 입력</Subtitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input 
            type="text" 
            id="name" 
            name="name"
            placeholder="이름을 입력해주세요."
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input 
            type="email" 
            id="email" 
            name="email"
            placeholder="이메일을 입력해주세요."
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <PasswordContainer>
            <Input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              name="password"
              placeholder="비밀번호를 입력해주세요."
              value={formData.password}
              onChange={handleChange}
            />
          </PasswordContainer>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <PasswordContainer>
            <Input 
              type={showPassword ? "text" : "password"} 
              id="confirmPassword" 
              name="confirmPassword"
              placeholder="비밀번호를 입력해주세요."
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <ToggleVisibility 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </ToggleVisibility>
          </PasswordContainer>
        </FormGroup>
        
        <SubmitButton type="submit" >다음</SubmitButton>
      </form>
      
      <ForgotPassword>
        이미 계정이 있으신가요?<ForgotLink onClick={() => navigate('/')}>로그인</ForgotLink>
      </ForgotPassword>
    </SignupContainer>
  );
};

const WalletForm: React.FC = () => {
  let navigate = useNavigate();

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <Subtitle>XRP 지갑 연동하기</Subtitle>
      
      <form>
        <div style={{ marginBottom: '20px' }}>
          <WalletContainer>
            <img src={WalletIcon}></img>
            <WalletButtonContainer>
              <div>XRP 지갑이 있다면,</div>
              <WalletButton>지갑 연동하기</WalletButton>
            </WalletButtonContainer>
          </WalletContainer>

        </div>
        <div style={{ marginBottom: '20px' }}>
          <WalletContainer>
            <img src={ConnectIcon}></img>
            <WalletButtonContainer>
              <div>XRP 지갑이 없다면,</div>
              <WalletButton>지갑 발급하기</WalletButton>
            </WalletButtonContainer>
          </WalletContainer>
        </div>
        
      </form>
      
      <ForgotPassword>
        이미 계정이 있으신가요?<ForgotLink onClick={() => navigate('/')}>로그인</ForgotLink>
      </ForgotPassword>
    </SignupContainer>
  );
};

// Main Component
const SignupPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <BookLogo src={BookVector} alt="Book Logo" />
          <HeaderLogo>XRPedia</HeaderLogo>
        </HeaderContent>
      </Header>
      <Main>
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={totalSteps}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
          {/* <SignupForm /> */}
          <WalletForm />
          
      </Main>
    </AppContainer>
  );
};

export default SignupPage;