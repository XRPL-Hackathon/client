import { useState } from "react";
import LoginIllustration from "../../assets/login-illustration.svg";
import logo from "../../assets/image/logo.svg";
import { useNavigate } from "react-router-dom";
import signIn from "@/hooks/usrLogin";

// Styled Components
import {
  AppContainer,
  Header,
  Main,
  ContentContainer,
  ImageSection,
  FormSection,
  WelcomeText,
  Form,
  InputGroup,
  Input,
  PasswordInput,
  EyeIcon,
  RememberSection,
  CheckboxLabel,
  Checkbox,
  ForgotPassword,
  LoginButton,
  RegisterSection,
  RegisterLink,
} from "./LoginPage.style";

const LoginPage: React.FC = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  // 이메일, 비밀번호 입력값 상태 업데이트 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    if (!formData.email || !formData.password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      // 로그인 API 호출
      await signIn(formData.email, formData.password);

      if (
        localStorage.getItem(
          "CognitoIdentityServiceProvider.7j09fmn00udb6fpt8hhij1jlqk.e4089d5c-d0f1-7074-6b70-a4fcc7bae68c.accessToken"
        )
      ) {
        // 로그인 성공 시, 대시보드로 이동
        navigate("/main");
      } else {
        setError("로그인 실패. 이메일 또는 비밀번호를 확인해주세요.");
      }
    } catch (err: any) {
      console.error("로그인 중 오류 발생:", err);
      setError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <AppContainer>
      <Header>
        <img src={logo} alt="Book Logo" />
      </Header>

      <Main>
        <ContentContainer>
          <ImageSection>
            <img
              src={LoginIllustration}
              alt="Woman interacting with documents"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </ImageSection>

          <FormSection>
            <WelcomeText>XRPedia에 온 것을 환영해요! 👋</WelcomeText>

            <Form onSubmit={handleLogin}>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </InputGroup>

              <PasswordInput>
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <EyeIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
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
              <RegisterLink onClick={() => navigate("/signup")}>
                회원가입
              </RegisterLink>
            </RegisterSection>
          </FormSection>
        </ContentContainer>
      </Main>
    </AppContainer>
  );
};

export default LoginPage;
