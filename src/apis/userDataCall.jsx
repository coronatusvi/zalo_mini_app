// fetchUserData.js
import { getUserInfo } from "zmp-sdk";

export const fetchUserData = async (displayName, setData, setIsLoading) => {
  try {
    const { userInfo } = await getUserInfo({});

    // Kiểm tra xem userInfo có thay đổi trước khi gọi setData
    if (!userInfo.id) {
      userInfo.name = displayName;
      setIsLoading(true);
      setData(userInfo);
    }
  } catch (error) {
    console.log("Lỗi khi getUserInfo: ", error);
  }
};
