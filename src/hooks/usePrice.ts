import API from "@/api/index";
import { useEffect, useState } from "react";

export const usePriceSale = (documentId: string, price: number) => {
  const [user, setUser] = useState({
    user_id: "",
    nickname: "",
    level_title: "",
    point: 0.0,
    total_revenue: 0.0,
    xrp_balance: 0.0,
    rlusd_balance: 0.0,
  });
  const [newPrice, setPrice] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/users");
        console.log(response); // API 응답 확인
        setUser(response.data); // 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData(); // API 호출 실행
  }, [documentId]);

  if (user.level_title === "platinum") {
    setPrice(price * 0.2);
  } else if (user.level_title === "silver") {
    setPrice(price * 0.05);
  } else if (user.level_title === "gold") {
    setPrice(price * 0.1);
  } else {
    setPrice(price);
  }

  return newPrice;
};

export const usePriceFee = (price: number) => {
  const [user, setUser] = useState({
    user_id: "",
    nickname: "",
    level_title: "",
    point: 0.0,
    total_revenue: 0.0,
    xrp_balance: 0.0,
    rlusd_balance: 0.0,
  });
  const [newPrice, setPrice] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/users");
        console.log(response); // API 응답 확인
        setUser(response.data); // 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData(); // API 호출 실행
  }, []);

  const fee = price * 0.1; // 수수료는 가격의 10%

  if (user.level_title === "platinum") {
    setPrice(fee * 0.85);
  } else if (user.level_title === "silver") {
    setPrice(fee * 0.95);
  } else if (user.level_title === "gold") {
    setPrice(fee * 0.9);
  } else {
    setPrice(fee);
  }

  return newPrice;
};
