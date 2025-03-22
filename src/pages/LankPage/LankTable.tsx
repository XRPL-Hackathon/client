import React, { useState } from "react";
import * as S from "@/pages/LankPage/LankTable.style";

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
      <div>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          ◁
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          ▷
        </button>
      </div>
    </S.StyledLankPage>
  );
};

export default Table;
