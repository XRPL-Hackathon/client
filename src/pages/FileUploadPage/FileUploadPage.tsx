import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/FileUploadPage/FileUploadPage.style";
import upload from "@/assets/image/upload.svg";

const FileUploadPage = () => {
  return (
    <>
      <NavBar />
      <S.StyledFileUploadPage>
        <div className="title">새 자료 업로드</div>
        <S.FileUploadContent>
          <S.FileUpload>
            <img src={upload} alt="upload" />
            <span className="text">클릭하거나 파일을 드래그 하여 업로드</span>
          </S.FileUpload>
          <S.FileUploadDescription>
            <form>
              <ul className="ul">
                <li className="li">
                  <label htmlFor="fileName" className="title">
                    자료명
                  </label>
                  <input type="text" id="fileName" className="name_input" />
                </li>
                <li className="li">
                  <label htmlFor="fileCategory" className="title">
                    카테고리
                  </label>
                  <select id="fileCategory" className="select">
                    <option value="0">카테고리 선택</option>
                    <option value="1">카테고리1</option>
                    <option value="2">카테고리2</option>
                    <option value="3">카테고리3</option>
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
                    />
                    &nbsp;XRP
                  </div>
                </li>
                <li className="li">
                  <label htmlFor="fileDes" className="title">
                    자료 설명
                  </label>
                  <textarea id="fileDes" className="textarea" />
                </li>
              </ul>
              <hr />
              <button className="button"> 자료 업로드</button>
            </form>
          </S.FileUploadDescription>
        </S.FileUploadContent>
      </S.StyledFileUploadPage>
    </>
  );
};

export default FileUploadPage;
