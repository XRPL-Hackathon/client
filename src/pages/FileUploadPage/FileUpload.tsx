import * as S from "@/pages/FileUploadPage/FileUpload.style";
import { ChangeEvent, useCallback, useRef, useState, useEffect } from "react";
import upload from "@/assets/image/upload.svg";
import remove from "@/assets/image/remove.svg";
import axios from "axios";

interface FileFormat {
  id: number;
  content: File;
}

const Upload = () => {
  const [files, setFiles] = useState<FileFormat[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const fileId = useRef<number>(0);

  // 파일 상태 업데이트 함수
  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: FileFormat[] = [];

      e.type === "drop"
        ? (selectFiles = e.dataTransfer.files)
        : (selectFiles = e.target.files);

      // 새로운 파일을 하나만 추가
      const file = selectFiles[0];
      if (file) {
        tempFiles = [
          {
            id: fileId.current++,
            content: file,
          },
        ];
        setFiles(tempFiles);
      }
    },
    []
  );

  const handleLabelClick = (e: any) => {
    e.preventDefault();
  };

  // 파일 삭제 처리
  const handleDeleteFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: FileFormat) => file.id !== id));
    },
    [files]
  );

  // 드래그 이벤트 처리
  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  // 드래그 이벤트 초기화
  useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  // 서버로 파일을 업로드하는 함수
  const uploadFile = async () => {
    if (files.length === 0) {
      alert("파일이 없습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("file", files[0].content); // 첫 번째 파일을 전송
    console.log("파일 업로드 시작: ", files[0].content, formData);
    try {
      const response = await axios.post(
        "http://13.124.96.218:8000/files",
        { file: files[0].content },
        {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      console.log("파일 업로드 성공:", response.data);
      localStorage.setItem("fileId", response.data.file_id);
    } catch (error) {
      console.error("파일 업로드 실패:", error);
    }
  };

  return (
    <S.UploadWrapper>
      <div
        className={`${isDragging ? "UploadWrapperActive" : "UploadWrapper"}`}
      >
        <label
          className="UploadArea"
          htmlFor="fileUpload"
          ref={dragRef}
          onClick={handleLabelClick}
        >
          {files.length === 0 ? (
            <div className="desdiv">
              <img src={upload} alt="upload" />
              <span className="text">파일을 드래그 하여 업로드</span>
            </div>
          ) : (
            ""
          )}
        </label>
      </div>

      <div className="FileContainer">
        {files.length > 0 &&
          files.map((file: FileFormat) => {
            const {
              id,
              content: { name },
            } = file;

            return (
              <div className="UploadFile" key={id}>
                <div className="Filename">{name} </div>
                <div className="DeleteBtn" onClick={() => handleDeleteFile(id)}>
                  <img src={remove} alt="remove" />
                </div>
              </div>
            );
          })}
      </div>
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        onChange={onChangeFiles} // 하나의 파일만 추가
      />
      <button onClick={uploadFile} style={{ margin: "20px 0px" }}>
        파일 업로드
      </button>
    </S.UploadWrapper>
  );
};

export default Upload;
