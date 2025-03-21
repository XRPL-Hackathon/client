// src/mocks/handlers.js
import { example } from "@/mocks/apis/example";
import { delay, http } from "msw";

export const handlers = [
  http.all("*", async () => {
    await delay(100);
  }),
  example, // 추가된 핸들러
];
