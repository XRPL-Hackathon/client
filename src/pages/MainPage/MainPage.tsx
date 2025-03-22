import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/MainPage/MainPage.style";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import search from "@/assets/image/search.svg";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  // 데이터를 저장할 상태 선언
  const [data, setData] = useState<any[]>([]);

  // 컴포넌트 마운트 시 데이터를 가져오는 useEffect
  useEffect(() => {
    // JSON 데이터를 서버에서 받는다고 가정 (여기서는 직접 정의)
    const fetchedData = [
      {
        id: 1,
        name: "React로 배우는 프론트엔드",
        category: "시험자료",
        image: "image1.jpg",
      },
      {
        id: 2,
        name: "JavaScript 핵심 문법",
        category: "이력서",
        image: "image2.jpg",
      },
      {
        id: 3,
        name: "HTML5 & CSS3 마스터",
        category: "레포트",
        image: "image3.jpg",
      },
      {
        id: 4,
        name: "웹 개발의 기초",
        category: "이력서",
        image: "image4.jpg",
      },
      {
        id: 5,
        name: "Node.js 기초부터 실전까지",
        category: "시험자료",
        image: "image5.jpg",
      },
      {
        id: 6,
        name: "디자인 패턴과 아키텍처",
        category: "레포트",
        image: "image6.jpg",
      },
      {
        id: 7,
        name: "Git으로 협업하는 방법",
        category: "이력서",
        image: "image7.jpg",
      },
      {
        id: 8,
        name: "Typescript 완벽 가이드",
        category: "시험자료",
        image: "image8.jpg",
      },
    ];

    // 데이터를 상태에 저장
    setData(fetchedData);
  }, []);

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
      <S.StyledDiv>
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
          <S.SearchItemDiv>
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
          </S.SearchItemDiv>
          <S.CategoryDiv>
            <S.CategoryItem onClick={() => navigate("/search")}>
              모든자료
            </S.CategoryItem>
            <S.CategoryItem onClick={() => navigate("/search")}>
              시험 자료
            </S.CategoryItem>
            <S.CategoryItem onClick={() => navigate("/search")}>
              자소서
            </S.CategoryItem>
            <S.CategoryItem onClick={() => navigate("/search")}>
              이력서
            </S.CategoryItem>
            <S.CategoryItem onClick={() => navigate("/search")}>
              레포트
            </S.CategoryItem>
            <S.CategoryItem onClick={() => navigate("/search")}>
              악보
            </S.CategoryItem>
            <S.CategoryItem onClick={() => navigate("/search")}>
              기타
            </S.CategoryItem>
          </S.CategoryDiv>
        </S.SearchDiv>
        <S.MainContent>
          <S.FileItemList>
            {data.map((item) => (
              <S.FileItem key={item.id}>
                <S.FileImage>
                  <img src={item.image} alt={item.name} />
                </S.FileImage>
                <S.FileInfo>
                  <S.FileLabel>{item.category}</S.FileLabel>
                  <S.FileDescription>{item.name}</S.FileDescription>
                </S.FileInfo>
              </S.FileItem>
            ))}
          </S.FileItemList>
        </S.MainContent>
      </S.StyledDiv>
    </>
  );
};

export default MainPage;
