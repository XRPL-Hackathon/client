import { useNavigate, useLocation } from "react-router-dom";
import * as S from "@/components/NavBar/NavBar.style";
import logo from "@/assets/image/logo.svg";
import doc from "@/assets/image/doc.svg";
import lank from "@/assets/image/lank.svg";
import add from "@/assets/image/add.svg";
import myPage from "@/assets/image/myPage.svg";
import logout from "@/assets/image/logout.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 특정 경로가 현재 경로와 일치하면 해당 스타일을 적용
  const isActive = (path: string) => location.pathname === path;

  return (
    <S.NavBar>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={() => navigate("/main")} />
        </div>
        <div className="nav-items">
          <div
            className={isActive("/lank") ? "active" : "nav-item"}
            onClick={() => navigate("/lank")}
          >
            <img src={lank} alt="Lank" />
            <a>랭킹 페이지</a>
          </div>
          <div
            className={isActive("/fileask") ? "active" : "nav-item"}
            onClick={() => navigate("/fileask")}
          >
            <img src={doc} alt="Doc" />
            <a>문서 요청하기</a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="nav-button" onClick={() => navigate("/fileupload")}>
          <img src={add} alt="add" />
          <a>자료 올리기</a>
        </div>
        <div className="dropdown">
          <div className="profile">
            <img
              className="profile-img"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
            />

            <div className="dropdown-content">
              <span className="dropdown-user">
                <img
                  className="profile-img"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="Profile"
                />
                <span className="user-name">사용자 이름</span>
              </span>
              <hr className="dropdown-hr" />
              <a href="/mypage">
                <img src={myPage} alt="MyPage" />
                마이페이지
              </a>
              <a href="/logout">
                <img src={logout} alt="logout" />
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </div>
    </S.NavBar>
  );
};

export default NavBar;
