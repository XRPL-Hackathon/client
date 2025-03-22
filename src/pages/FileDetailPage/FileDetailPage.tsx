import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import RLUSD from "@/assets/image/RLUSD.svg";
import { useLocation, useNavigate } from "react-router-dom";

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

const FileDetailPage: React.FC = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const documentData: Document = location.state as Document;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // 날짜만 반환 (YYYY-MM-DD)
  };

  return (
    <>
      <NavBar />

      {/* 배경 설정 */}
      <div
        style={{
          backgroundColor: "lightgray",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 흰색 직사각형 */}
        <div
          style={{
            width: "65vw", // 기존 70vw → 65vw로 너비 줄여서 양옆 마진 추가
            height: "70vh",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // 세로로 중앙 정렬
            alignItems: "center", // 가로로 중앙 정렬
            padding: "20px 30px",
            position: "relative",
          }}
        >
          {/* 컨텐츠 컨테이너 */}
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            {/* 문서 이미지 컨테이너 */}
            <div
              style={{
                width: "600px",
                height: "50vh",
                backgroundColor: "lightgrey",
                borderRadius: "6px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px", // 기존보다 위쪽 마진 추가하여 아래로 내림
              }}
            >
              <img
                src={documentData.document_image_url}
                alt={documentData.document_name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* 문서 정보 컨테이너 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* 문서 제목 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span
                  style={{
                    color: "#E74C3C",
                    marginRight: "8px",
                    fontSize: "18px",
                  }}
                >
                  📕
                </span>
                <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
                  {documentData.document_name}
                </h2>
              </div>

              {/* 문서 통계 정보 */}
              <div
                style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
              >
                {[
                  { label: "평점", value: documentData.rating },
                  { label: "다운로드", value: documentData.downloads },
                  { label: "페이지", value: documentData.pageNumber },
                  {
                    label: "등록",
                    value: formatDate(documentData.upload_date),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {item.value}
                    </span>
                    <span style={{ fontSize: "12px", color: "#777" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 판매자 정보 */}
              <div style={{ marginBottom: "15px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#777",
                    marginRight: "8px",
                  }}
                >
                  판매자
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#2ECC71",
                    fontWeight: "bold",
                  }}
                >
                  {documentData.uploader}
                </span>
              </div>

              {/* 소개글 */}
              <div style={{ marginBottom: "10px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#777",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  소개글
                </span>
                <div
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "12px",
                    borderRadius: "5px",
                    fontSize: "13px",
                    lineHeight: "1.4",
                    minHeight: "60px",
                  }}
                >
                  {documentData.introduction}
                </div>
              </div>

              {/* 가격 정보 */}
              <div style={{ marginBottom: "15px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  가격
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={RLUSD}
                    alt="RLUSD Icon"
                    width="20"
                    height="20"
                    style={{ verticalAlign: "middle" }}
                  />
                  <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                    {documentData.price}
                  </span>
                  <span style={{ fontSize: "16px", color: "#999" }}>
                    {documentData.price === 0 ? "무료" : "RLUSD"}
                  </span>
                </div>
              </div>

              {/* 구매 버튼 */}
              <button
                style={{
                  backgroundColor: "#6c70c9",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 0",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() =>
                  navigator("/payment/${documentData.document_id}", {
                    state: documentData,
                  })
                }
              >
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileDetailPage;
