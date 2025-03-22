import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/FileUploadPage/FileUploadPage.style";
import Upload from "./FileUpload";
import { useState } from "react";

const FileUploadPage = () => {
  // 상태 선언
  const [fileName, setFileName] = useState("");
  const [fileCategory, setFileCategory] = useState("0");
  const [filePrice, setFilePrice] = useState("");
  const [fileDescription, setFileDescription] = useState("");

  // form 제출 시 데이터 출력
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    console.log("자료명:", fileName);
    console.log("카테고리:", fileCategory);
    console.log("가격:", filePrice);
    console.log("자료 설명:", fileDescription);
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
                      onChange={(e) => setFilePrice(e.target.value)}
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
    </>
  );
};

export default FileUploadPage;
