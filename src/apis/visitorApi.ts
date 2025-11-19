import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

// 방문자 추적 (페이지 접속 시 호출)
export const trackVisitor = async (): Promise<void> => {
  try {
    if (API_BASE_URL) {
      await axios.post(`${API_BASE_URL}/api/visitors/track`, {
        timestamp: new Date().toISOString(),
      });
    } else {
      // 백엔드 API가 없을 경우 로컬 스토리지 사용 (개발용)
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem("lastVisit");
      
      if (lastVisit !== today) {
        const todayVisitors = parseInt(
          localStorage.getItem("todayVisitors") || "0"
        );
        localStorage.setItem("todayVisitors", String(todayVisitors + 1));
        localStorage.setItem("lastVisit", today);
      }
    }
  } catch (error) {
    console.error("방문자 추적 실패:", error);
  }
};

// 오늘 방문자 수 조회
export const getTodayVisitorCount = async (): Promise<number> => {
  try {
    if (API_BASE_URL) {
      const response = await axios.get(`${API_BASE_URL}/api/visitors/today`);
      return response.data.count || 0;
    } else {
      // 백엔드 API가 없을 경우 로컬 스토리지 사용 (개발용)
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem("lastVisit");
      
      if (lastVisit === today) {
        return parseInt(localStorage.getItem("todayVisitors") || "0");
      } else {
        return 0;
      }
    }
  } catch (error) {
    console.error("방문자 수 조회 실패:", error);
    return 0;
  }
};

