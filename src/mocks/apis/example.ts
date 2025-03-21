// mocks/apis/example.js
import { http, HttpResponse } from "msw";

export const example = http.get("/user", () => {
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      status: 200,
      message: "사용 가능한 이메일",
      data: {
        id: "12345",
        name: "John Doe",
      },
    }
  );
});
