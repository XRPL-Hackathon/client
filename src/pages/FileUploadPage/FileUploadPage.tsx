import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/FileUploadPage/FileUploadPage.style";
import Upload from "./FileUpload";
import { useState, useEffect } from "react";
import API from "@/api/index";

const FileUploadPage = () => {
  // 상태 선언
  const [fileName, setFileName] = useState("");
  const [fileCategory, setFileCategory] = useState("0");
  const [filePrice, setFilePrice] = useState<number>(0); // 가격을 number로 처리
  const [fileDescription, setFileDescription] = useState("");

  // form 제출 시 데이터 출력
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // API 요청을 위한 useEffect를 handleSubmit 내에서 실행하는 것은 비효율적이므로
    // useEffect를 handleSubmit 밖에서 실행하여 요청만 보내도록 변경

    const fetchData = async () => {
      try {
        const response = await API.post("/documents", {
          file_id: localStorage.getItem("fileId"),
          document_name: fileName,
          introduction: fileDescription,
          price: filePrice, // 가격을 float로 처리
          category: fileCategory,
        });
        console.log(response); // API 응답 확인
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData(); // API 호출 실행
  };

  // 가격 값 처리 (number로 처리)
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || !isNaN(Number(value))) {
      setFilePrice(Number(value)); // 가격을 숫자 타입으로 저장
    }
  };

  return (
    <>
      <NavBar />
      <S.StyledFileUploadPage>
        <div className="title">새 자료 업로드</div>
        <S.FileUploadContent>
          <Upload />
          <S.FileUploadDescription>
            <form onSubmit={handleSubmit}>
              <ul className="ul">
                <li className="li">
                  <label htmlFor="fileName" className="title">
                    자료명
                  </label>
                  <input
                    type="text"
                    id="fileName"
                    className="name_input"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                  />
                </li>
                <li className="li">
                  <label htmlFor="fileCategory" className="title">
                    카테고리
                  </label>
                  <select
                    id="fileCategory"
                    className="select"
                    value={fileCategory}
                    onChange={(e) => setFileCategory(e.target.value)}
                  >
                    <option value="0">카테고리 선택</option>
                    <option value="1">시험 자료</option>
                    <option value="2">자소서</option>
                    <option value="3">이력서</option>
                    <option value="4">레포트</option>
                    <option value="5">악보</option>
                    <option value="6">기타</option>
                  </select>
                </li>
                <li className="li">
                  <label htmlFor="filePrice" className="title price">
                    가격
                  </label>
                  <div className="div">
                    <input
                      type="number"
                      id="filePrice"
                      className="price_input"
                      value={filePrice}
                      onChange={handlePriceChange} // 가격 변경 핸들러
                    />
                    &nbsp;XRP
                  </div>
                </li>
                <li className="li">
                  <label htmlFor="fileDes" className="title">
                    자료 설명
                  </label>
                  <textarea
                    id="fileDes"
                    className="textarea"
                    value={fileDescription}
                    onChange={(e) => setFileDescription(e.target.value)}
                  />
                </li>
              </ul>
              <hr />
              <button className="button" type="submit">
                자료 업로드
              </button>
            </form>
          </S.FileUploadDescription>
        </S.FileUploadContent>
      </S.StyledFileUploadPage>
      <S.MarginDiv></S.MarginDiv>
    </>
  );
};

export default FileUploadPage;
