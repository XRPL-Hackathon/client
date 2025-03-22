import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/MainPage/MainPage.style";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import search from "@/assets/image/Search.svg";
import frontArrow from "@/assets/image/frontArrow.svg";
import backArrow from "@/assets/image/backArrow.svg";
import API from "@/api/index";

interface Document {
  document_id: string; // document_id는 문자열
  file_id: string; // file_id도 문자열
  document_name: string; // document_name은 문자열
  document_image_url: string; // URL은 문자열로 처리
  introduction: string; // introduction은 문자열
  downloads: number; // 다운로드 수는 숫자
  pageNumber: number; // 페이지 수는 숫자
  upload_date: string; // 업로드 날짜는 문자열 (ISO 8601 포맷)
  uploader: string; // 업로더 ID는 문자열 (UUID 형식)
  price: number; // 가격은 숫자
  category: string; // 카테고리는 문자열 (예: "category_piano")
  rating: number; // 평점은 숫자
}

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const [data, setData] = useState<Document[]>([]);
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
    const fetchData = async () => {
      try {
        const response = await API.get("/documents");
        console.log(response); // API 응답 확인
        setData(response.data); // 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData(); // API 호출 실행
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
            {currentData.map((item, index) => (
              <S.FileItem
                key={index}
                onClick={() => navigate(`/filedetail/${item.document_id}`)}
              >
                <S.FileImage>
                  <img src={item.document_image_url} alt={item.document_name} />
                </S.FileImage>
                <S.FileInfo>
                  <S.FileLabel>{item.category}</S.FileLabel>
                  <S.FileDescription>{item.document_name}</S.FileDescription>
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
