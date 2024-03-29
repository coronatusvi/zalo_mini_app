import React, { useEffect, useState } from "react";
import { List, Icon, useNavigate, Text, Page } from "zmp-ui";

import UserCard from "../../components/user-card";
import { getUserInfo } from "zmp-sdk";
import LoadingPage from "../../components/utils/loadingPage";

export default function UserPage() {
  const [data, setData] = useState({
    id: "",
    name: "",
    avatar: "",
    idByOA: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userInfo } = await getUserInfo({});
        setData(userInfo);
        if (data) {
          // console.log("Data đã được cập nhật:", data);
          setIsLoading(true);
        }
      } catch (error) {
        console.log("Lối khi getUserInfo: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      // console.log("Data đã được cập nhật:", data);
      setIsLoading(true);
    }
  }, [data]);

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
