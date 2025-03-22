import React, { useState } from "react";
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
    { no: 1, name: "홍길동", points: 5000, ranking: "플래티넘" },
    { no: 2, name: "홍길동", points: 5000, ranking: "플래티넘" },
    { no: 3, name: "홍길동", points: 5000, ranking: "골드" },
    { no: 4, name: "홍길동", points: 5000, ranking: "골드" },
    { no: 5, name: "홍길동", points: 5000, ranking: "실버" },
    { no: 6, name: "홍길동", points: 2000, ranking: "실버" },
    { no: 7, name: "홍길동", points: 2000, ranking: "실버" },
    { no: 8, name: "홍길동", points: 2000, ranking: "브론즈" },
    { no: 9, name: "홍길동", points: 2000, ranking: "브론즈" },
    { no: 10, name: "홍길동", points: 2000, ranking: "브론즈" },
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
              <td className="td">{item.ranking}</td>
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
