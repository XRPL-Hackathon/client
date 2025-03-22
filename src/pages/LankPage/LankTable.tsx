import { useState } from "react";
import * as S from "@/pages/LankPage/LankTable.style";
import frontArrow from "@/assets/image/frontArrow.svg";
import backArrow from "@/assets/image/backArrow.svg";

interface TableData {
  no: number;
  name: string;
  points: number;
  ranking: string;
}

const Table = () => {
  // 더미 데이터 (실제로는 API로 데이터를 받으면 됩니다)
  const data: TableData[] = [
    { no: 1, name: "오은진", points: 3200, ranking: "플래티넘" },
    { no: 2, name: "김초련", points: 2100, ranking: "플래티넘" },
    { no: 3, name: "이유진", points: 2020, ranking: "플래티넘" },
    { no: 4, name: "신현수", points: 1500, ranking: "플래티넘" },
    { no: 5, name: "박문기", points: 1324, ranking: "골드" },
    { no: 6, name: "최세연", points: 1293, ranking: "골드" },
    { no: 7, name: "임서연", points: 1140, ranking: "골드" },
    { no: 8, name: "일등가", points: 961, ranking: "골드" },
    { no: 9, name: "우리가", points: 753, ranking: "골드" },
    { no: 10, name: "삼순이", points: 570, ranking: "골드" },
    { no: 11, name: "마크곤", points: 480, ranking: "골드" },
    { no: 12, name: "광운대", points: 370, ranking: "골드" },
    { no: 13, name: "블로체인", points: 330, ranking: "실버" },
    { no: 14, name: "엑스얼피", points: 300, ranking: "실버" },
    { no: 15, name: "해커톤", points: 280, ranking: "실버" },
    { no: 16, name: "밤샘작", points: 240, ranking: "실버" },
    { no: 17, name: "힘들어", points: 120, ranking: "실버" },
    { no: 18, name: "위스콘", points: 100, ranking: "실버" },
    { no: 19, name: "펩시콜", points: 92, ranking: "브론즈" },
    { no: 20, name: "제로제로", points: 78, ranking: "브론즈" },
    { no: 21, name: "리플", points: 68, ranking: "브론즈" },
    { no: 22, name: "핑크옷", points: 52, ranking: "브론즈" },
    { no: 23, name: "집갈래", points: 49, ranking: "브론즈" },
    { no: 24, name: "둥근해", points: 43, ranking: "브론즈" },
    { no: 25, name: "미친것", points: 31, ranking: "브론즈" },
    { no: 26, name: "또오오", points: 23, ranking: "브론즈" },
    { no: 27, name: "떴어어", points: 12, ranking: "브론즈" },
    { no: 28, name: "생수병", points: 10, ranking: "브론즈" },
    { no: 29, name: "치즈벅", points: 0, ranking: "브론즈" },
    { no: 30, name: "나무목", points: 0, ranking: "브론즈" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

  // 현재 페이지에 해당하는 데이터만 필터링
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지네이션 처리
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 페이지 버튼 생성 함수
  const createPageButtons = () => {
    const pageButtons = [];
    const range = 2; // "현재 페이지"를 기준으로 보여줄 범위

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pageButtons.push(i);
    }

    return pageButtons;
  };

  return (
    <S.StyledLankPage>
      <S.LankTable>
        <thead>
          <tr>
            <th className="header">NO</th>
            <th className="header">NAME</th>
            <th className="header">포인트</th>
            <th className="header">랭킹</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.no} className="tr">
              <td className="td">{item.no}</td>
              <td className="td">{item.name}</td>
              <td className="td">{item.points}</td>
              <td className="td">
                <S.StyledLankLabel rank={item.ranking}>
                  {item.ranking}
                </S.StyledLankLabel>
              </td>
            </tr>
          ))}
        </tbody>
      </S.LankTable>
      {/* 페이지네이션 */}
      <S.PaginationWrapper>
        <S.ArrowButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          <img src={backArrow} alt="◁" />
        </S.ArrowButton>
        {createPageButtons().map((page: number) => (
          <S.PageButton
            key={page}
            onClick={() => setCurrentPage(page)}
            active={page === currentPage}
          >
            {page}
          </S.PageButton>
        ))}
        {currentPage + 2 < totalPages && <S.Ellipsis>...</S.Ellipsis>}
        <S.ArrowButton
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          <img src={frontArrow} alt="▷" />
        </S.ArrowButton>
      </S.PaginationWrapper>
    </S.StyledLankPage>
  );
};

export default Table;
