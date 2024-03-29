import React, { useEffect, useState } from "react";
import { List, Icon, useNavigate, Text, Page } from "zmp-ui";

import UserCard from "../../components/user-card";
import { getUserInfo } from "zmp-sdk";
import LoadingPage from "../../components/utils/loadingPage";
import { useRecoilValue } from "recoil";
import { displayNameState } from "../../state";

export default function UserPage() {
  const [data, setData] = useState({
    id: "",
    name: "",
    avatar: "",
    idByOA: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [{ _, displayName }, setNameState] = useState(
    useRecoilValue(displayNameState)
  );
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userInfo } = await getUserInfo({});
        // Kiểm tra xem userInfo có thay đổi trước khi gọi setData
        if (
          userInfo.id !== data.id ||
          userInfo.name !== data.name ||
          userInfo.avatar !== data.avatar ||
          userInfo.idByOA !== data.idByOA
        ) {
          setIsLoading(true);
          setData(userInfo);
        }
      } catch (error) {
        console.log("Lỗi khi getUserInfo: ", error);
      }
    };

    fetchData();
  }, [data]);

  useEffect(() => {
    setData((pre) => ({ ...pre, ["name"]: displayName }));
  }, []);

  const navigate = useNavigate();
  return (
    <Page>
      {isLoading ? (
        <>
          <div className="section-container">
            <UserCard user={data || data.userInfo} />
          </div>
          <div className="section-container">
            <List>
              <List.Item
                onClick={() => navigate("/user-detail")}
                suffix={<Icon icon="zi-arrow-right" />}
              >
                <Text>About</Text>
              </List.Item>
              <List.Item
                onClick={() => navigate("/form")}
                suffix={<Icon icon="zi-arrow-right" />}
              >
                <Text>Form Update</Text>
              </List.Item>
            </List>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </Page>
  );
}
