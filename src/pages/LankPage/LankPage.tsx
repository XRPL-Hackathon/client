import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/LankPage/LankPage.style";
import info from "@/assets/image/info.svg";
import Table from "@/pages/LankPage/LankTable";

const LankPage = () => {
  return (
    <>
      <NavBar />
      <S.StyledLankPage>
        <S.LankDescription>
          <div className="maintitle">
            <img src={info} alt="info" />
            랭킹 기준과 혜택
          </div>
          <div className="subtitle">랭킹 등급 기준</div>
          <div className="description">
            브론즈: 제한 없음 <br />
            실버: 500포인트 이상인 상위 40% 유저 <br />
            골드: 1000포인트 이상인 상위 10% 유저 <br />
            플래티넘: 1500포인트 이상인 상위 3% 유저
          </div>
          <div className="subtitle">랭킹별 혜택</div>
          <div className="description">
            브론즈: 없음
            <br />
            실버: 30 RLUSD, 자료구매시 5% RLUSD 결제, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자료 요청 수수료 5% 할인
            <br />
            골드: 120 RLUSD, 자료구매시 10% RLUSD 결제, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자료 요청 수수료 10% 할인
            <br />
            플래티넘: 400 RLUSD, 자료구매시 20% RLUSD 결제, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자료 요청 수수료 15% 할인
          </div>
          <div className="subtitle">포인트 획득 방식</div>
          <div className="description">
            자료 업로드: 100 포인트
            <br />
            파일 다운로드수: 10 포인트
            <br />
            파일 리뷰 3.5 이상: 50 포인트
            <br />
            4.5 이상인 리뷰 개수: 20 포인트
            <br />
            리뷰 작성: 5 포인트
            <br />
            자료 요청 응답: 50 포인트
            <br />
            요청글 등록: 10 포인트
            <br />
          </div>
        </S.LankDescription>
        <S.Lank>
          <Table />
        </S.Lank>
      </S.StyledLankPage>
      <S.MarginDiv></S.MarginDiv>
    </>
  );
};

export default LankPage;
