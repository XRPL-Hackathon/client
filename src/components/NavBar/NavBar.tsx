import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "@/components/NavBar/NavBar.style";
import logo from "@/assets/image/logo.svg";
import doc from "@/assets/image/doc.svg";
import lank from "@/assets/image/lank.svg";
import add from "@/assets/image/add.svg";
import logout from "@/assets/image/logout.svg";
import API from "@/api/index";

const NavBar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_id: "",
    nickname: "",
    level_title: "",
    point: 0.0,
    total_revenue: 0.0,
  });

  useEffect(() => {
    API.get("/users").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <S.NavBar>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={() => navigate("/main")} />
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
                <span className="user-name">{user.nickname} 님</span>
              </span>
              <hr className="dropdown-hr" />
              <S.StyledLankLabel rank="골드">
                {user.level_title}
              </S.StyledLankLabel>
              <div className="content">포인트: {user.point}</div>
              <div className="content">누적수익: {user.total_revenue}</div>
              <hr className="dropdown-hr" />
              <a href="/fileask">
                <img src={doc} alt="Doc" />
                문서 요청하기
              </a>
              <a href="/mypage">
                <img src={lank} alt="Lank" />
                랭킹 페이지
              </a>
              <hr className="dropdown-hr" />

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
