import { useEffect, useState } from "react";
import { getTodayVisitorCount, trackVisitor } from "../apis/visitorApi";

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // 방문자 추적
        await trackVisitor();

        // 방문자 수 조회
        const count = await getTodayVisitorCount();
        setVisitorCount(count);
      } catch (error) {
        console.error("방문자 수 로딩 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();

    // 1분마다 방문자 수 갱신
    const interval = setInterval(fetchVisitorCount, 60000);

    return () => clearInterval(interval);
  }, []);

  return { visitorCount, isLoading };
};
