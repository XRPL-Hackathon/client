import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed; /* 상단에 고정 */
  top: 0; /* 상단에 위치 */
  left: 0; /* 왼쪽으로 정렬 */
  width: 97%; /* 너비 설정 */
  height: 72px; /* 높이 설정 */
  display: flex; /* flexbox 레이아웃 사용 */
  justify-content: space-between; /* 좌우 간격을 동일하게 */
  align-items: center; /* 세로 가운데 정렬 */
  padding: 0 20px; /* 좌우 20px 여백 */
  background-color: #fff; /* 배경색 흰색 */
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.1); /* 그림자 */
  border-bottom: solid 2px #ddd; /* 하단 테두리 */
  z-index: 1000; /* 다른 요소들보다 위에 위치하도록 설정 */

  .left {
    display: flex;
    align-items: center;
    gap: 26px; /* 로고와 메뉴 간 간격 */
  }

  .right {
    display: flex;
    align-items: center;
    gap: 18px; /* 로고와 메뉴 간 간격 */
  }

  /* 로고 스타일 */
  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  /* 메뉴 항목 스타일 */
  .nav-items {
    display: flex;
    gap: 20px; /* 메뉴 간 간격 */
  }

  .nav-item {
    display: flex;
    padding: 24px 23.75px 24px 17.75px;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
  }

  .nav-items a {
    color: #565d6d;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }

  .nav-item:hover {
    border-bottom: 2px solid #636ae8;
  }

  .active {
    display: flex;
    padding: 24px 23.75px 24px 17.75px;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-bottom: 2px solid #636ae8;
  }

  .nav-button {
    display: inline-flex;
    padding: 7px 17px 7px 12px;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0);
    background: #636ae8;
  }

  .nav-button:hover {
    background: #3e4291; /* 호버 시 색상 변화 */
  }

  .nav-button a {
    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }

  .nav-profile {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    cursor: pointer;
  }

  .profile {
    position: relative;
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  /* 드롭다운 메뉴 기본 스타일 */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* 드롭다운 메뉴 내용 (기본 숨김) */
  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%; /* 프로필 이미지 아래에 배치 */
    right: 30%;
    flex-shrink: 0;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 5px;
    z-index: 1;
  }

  /* 드롭다운 아이템 스타일 */
  .dropdown-content a {
    display: flex;
    width: 244px;
    height: 40px;
    padding: 8px 16px;
    justify-content: start;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
    color: #565d6d;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }

  .dropdown-content a:hover {
    background-color: #f4f4f4;
  }

  /* 드롭다운 메뉴가 표시될 때 */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-user {
    display: flex;
    align-items: center;

    gap: 20px;
    padding: 16px 20px;
  }

  .dropdown-hr {
    width: 256px;
    height: 1px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #dee1e6;
  }

  .user-name {
    color: #171a1f;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }

  /* 작은 화면에서 메뉴가 세로로 나열되도록 */
  @media (max-width: 768px) {
    .nav-items {
      display: flex;
      flex-direction: column; /* 메뉴 항목들이 세로로 배치됨 */
      align-items: center; /* 가운데 정렬 */
      width: 100%; /* 너비를 100%로 설정 */
      gap: 10px; /* 세로 메뉴 항목 간 간격 */
    }

    .nav-items a {
      font-size: 14px; /* 작은 화면에서 글자 크기 줄이기 */
    }
  }

  /* 더 작은 화면에서 메뉴 항목 크기 조정 */
  @media (max-width: 480px) {
    .logo {
      font-size: 18px; /* 로고 크기 줄이기 */
    }

    .nav-items a {
      font-size: 12px; /* 메뉴 항목 크기 줄이기 */
      gap: 8px; /* 세로 간격 좁히기 */
    }
  }
`;
