import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/MainPage/MainPage.style";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
import { useNavigate } from "react-router";
import search from "@/assets/image/search.svg";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  // 더미 데이터
  const searchData = [
    { id: 1, name: "React로 배우는 프론트엔드" },
    { id: 2, name: "JavaScript 핵심 문법" },
    { id: 3, name: "HTML5 & CSS3 마스터" },
    { id: 4, name: "웹 개발의 기초" },
    { id: 5, name: "Node.js 기초부터 실전까지" },
    { id: 6, name: "디자인 패턴과 아키텍처" },
    { id: 7, name: "Git으로 협업하는 방법" },
    { id: 8, name: "Typescript 완벽 가이드" },
    { id: 9, name: "Docker와 Kubernetes 배우기" },
    { id: 10, name: "GraphQL 완전 정복" },
  ];

  return (
    <>
      <NavBar />
      <S.SearchDiv>
        <S.StyledDiv>
          <S.StyledForm>
            <img src={search} alt="search" />
            <S.StyledInput
              type="text"
              placeholder="원하는 자료를 검색해보세요!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.StyledForm>
        </S.StyledDiv>
        <S.StyledDiv>
          {debouncedSearchTerm && (
            <S.SearchItemList>
              {searchData
                .filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(debouncedSearchTerm.toLowerCase())
                )
                .map((item) => (
                  <S.SearchItem
                    key={item.id}
                    onClick={() => alert(`${item.name} 상세페이지로 이동`)}
                  >
                    {item.name}
                  </S.SearchItem>
                ))}
            </S.SearchItemList>
          )}
        </S.StyledDiv>
      </S.SearchDiv>
    </>
  );
};

export default MainPage;
