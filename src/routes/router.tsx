import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileDetailPage from "@/pages/FileDetailPage/FileDetailPage";
import FileUploadPage from "@/pages/FileUploadPage/FileUploadPage";
import MainPage from "@/pages/MainPage/MainPage";
import LankPage from "@/pages/LankPage/LankPage";
import MyPage from "@/pages/MyPage/MyPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import PaymentPage from "@/pages/PaymentPage/PaymentPage";
import SearchPage from "@/pages/SearchPage/SearchPage";
import SignupPage from "@/pages/SignupPage/SignupPage";
import FileAskListPage from "@/pages/FileAskListPage/FileAskListPage";
import FileAskPage from "@/pages/FileAskPage/FileAskPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
        <Route path="/lank" element={<LankPage />} />
        <Route path="/fileupload" element={<FileUploadPage />} />
        <Route path="/filedetail/:id" element={<FileDetailPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/fileasklist" element={<FileAskListPage />} />
        <Route path="/fileask" element={<FileAskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
