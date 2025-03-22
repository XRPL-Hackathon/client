import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/MainPage/MainPage.style";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import search from "@/assets/image/Search.svg";
import frontArrow from "@/assets/image/frontArrow.svg";
import backArrow from "@/assets/image/backArrow.svg";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 한 페이지에 보여줄 아이템 수
  const users = [
    { name: "홍길동", rank: 1, points: 5000 },
    { name: "김철수", rank: 2, points: 4500 },
    { name: "박영희", rank: 3, points: 3000 },
  ];

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

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

  useEffect(() => {
    const fetchedData = [
      // 더미 데이터
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
      {
        id: 9,
        name: "React로 배우는 프론트엔드",
        category: "시험자료",
        image: "image1.jpg",
      },
      {
        id: 10,
        name: "JavaScript 핵심 문법",
        category: "이력서",
        image: "image2.jpg",
      },
      {
        id: 11,
        name: "HTML5 & CSS3 마스터",
        category: "레포트",
        image: "image3.jpg",
      },
      {
        id: 12,
        name: "웹 개발의 기초",
        category: "이력서",
        image: "image4.jpg",
      },
      {
        id: 13,
        name: "Node.js 기초부터 실전까지",
        category: "시험자료",
        image: "image5.jpg",
      },
      {
        id: 14,
        name: "디자인 패턴과 아키텍처",
        category: "레포트",
        image: "image6.jpg",
      },
      {
        id: 15,
        name: "Git으로 협업하는 방법",
        category: "이력서",
        image: "image7.jpg",
      },
    ];

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
          <S.CategoryWrapper>
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

            <S.LankDiv>
              <S.RankWrapper>
                <S.RankContent>
                  {users.map((user, index) => (
                    <S.RankItem
                      key={index}
                      onClick={() => {
                        navigate("/lank");
                      }}
                    >
                      <S.StyledLankLabel rank={user.rank}>
                        {user.rank}위
                      </S.StyledLankLabel>
                      {user.name} ({user.points}점)
                    </S.RankItem>
                  ))}
                </S.RankContent>
              </S.RankWrapper>
            </S.LankDiv>
          </S.CategoryWrapper>
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
        </S.SearchDiv>

        <S.MainContent>
          <div className="title">모든 자료</div>
          <hr />
          <S.FileItemList>
            {currentData.map((item) => (
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
      </S.StyledDiv>
    </>
  );
};

export default MainPage;
