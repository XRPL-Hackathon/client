import { useParams } from "react-router-dom";

const FileDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // id 파라미터를 가져옵니다.

  return (
    <div>
      <h1>File Detail for ID: {id}</h1>
      {/* 파일 세부 정보를 id에 따라 불러오는 로직을 추가할 수 있습니다. */}
    </div>
  );
};

export default FileDetailPage;
