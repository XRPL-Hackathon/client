import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletIcon from "../../assets/wallet_icon.svg";
import ConnectIcon from "../../assets/connect_icon.svg";
import SuccessIcon from "../../assets/succes.svg";
import logo from "../../assets/image/logo.svg";
import { signUp } from "@/hooks/uaeSignup";

import {
  AppContainer,
  Header,
  Main,
  ProgressBarContainer,
  Navigation,
  NavButton,
  Indicators,
  Dot,
  SignupContainer,
  Title,
  Subtitle,
  FormGroup,
  Label,
  Input,
  PasswordContainer,
  ToggleVisibility,
  SubmitButton,
  ForgotPassword,
  ForgotLink,
  WalletButton,
  WalletButtonContainer,
  WalletContainer,
  SuccessMessage,
} from "./SignupPage.style";

// Component Interfaces
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <ProgressBarContainer>
      <Navigation>
        <NavButton>&lt;</NavButton>
        <Indicators>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <Dot key={index} active={index === currentStep - 1} />
          ))}
        </Indicators>
        <NavButton>&gt;</NavButton>
      </Navigation>
    </ProgressBarContainer>
  );
};

const SignupForm: React.FC<{
  handleNext: () => void;
  formData: any;
  setFormData: any;
}> = ({ handleNext, formData, setFormData }) => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value })); // 부모 컴포넌트의 상태 업데이트
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

        <SubmitButton
          type="button"
          onClick={() => {
            handleNext();
          }}
        >
          다음
        </SubmitButton>
      </form>

      <ForgotPassword>
        이미 계정이 있으신가요?
        <ForgotLink onClick={() => navigate("/")}>로그인</ForgotLink>
      </ForgotPassword>
    </SignupContainer>
  );
};

const WalletForm: React.FC<{ handleNext: () => void }> = ({ handleNext }) => {
  let navigate = useNavigate();

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <Subtitle>XRP 지갑 연동하기</Subtitle>

      <form>
        <div style={{ marginBottom: "20px" }}>
          <WalletContainer>
            <img src={WalletIcon}></img>
            <WalletButtonContainer>
              <div>XRP 지갑이 있다면,</div>
              <WalletButton>지갑 연동하기</WalletButton>
            </WalletButtonContainer>
          </WalletContainer>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <WalletContainer>
            <img src={ConnectIcon}></img>
            <WalletButtonContainer>
              <div>XRP 지갑이 없다면,</div>
              <WalletButton>지갑 발급하기</WalletButton>
            </WalletButtonContainer>
          </WalletContainer>
        </div>
      </form>

      {/* 임의로 넣은 버튼임 */}
      <SubmitButton type="button" onClick={handleNext}>
        다음
      </SubmitButton>

      <ForgotPassword>
        이미 계정이 있으신가요?
        <ForgotLink onClick={() => navigate("/")}>로그인</ForgotLink>
      </ForgotPassword>
    </SignupContainer>
  );
};

const SuccessForm: React.FC<{ formData: any }> = ({ formData }) => {
  let navigate = useNavigate();

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <Subtitle>XRP 지갑 연동하기</Subtitle>

      <div style={{ marginBottom: "20px" }}>
        <WalletContainer>
          <img src={SuccessIcon}></img>
          <WalletButtonContainer>
            <SuccessMessage>
              {formData.name}님의 지갑이 <br></br>
              연동 완료되었습니다!
            </SuccessMessage>
          </WalletButtonContainer>
        </WalletContainer>
      </div>

      <SubmitButton type="button">회원가입</SubmitButton>

      <ForgotPassword>
        이미 계정이 있으신가요?
        <ForgotLink onClick={() => navigate("/")}>로그인</ForgotLink>
      </ForgotPassword>
    </SignupContainer>
  );
};

// Main Component
const SignupPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = async (): Promise<void> => {
    console.log("handleNext 호출됨! 현재 단계:", currentStep);
    console.log("현재 formData 상태:", formData);

    try {
      // 회원가입 요청을 await로 처리
      const resultMessage = await signUp({
        Username: formData.name,
        Password: formData.password,
        Email: formData.email,
      });

      console.log(resultMessage);

      // 요청이 성공했으면 다음 단계로 진행
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      }
    } catch (error: any) {
      // 오류 처리
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <AppContainer>
      <Header>
        <img src={logo} alt="Book Logo" />
      </Header>
      <Main>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        {currentStep === 1 && (
          <SignupForm
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 2 && <WalletForm handleNext={handleNext} />}
        {currentStep === 3 && <SuccessForm formData={formData} />}
      </Main>
    </AppContainer>
  );
};

export default SignupPage;
