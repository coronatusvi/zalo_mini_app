import React, { useEffect, useState } from "react";
import { List, Icon, useNavigate, Text, Page } from "zmp-ui";
import UserCard from "../../components/user-card";
import LoadingPage from "../../components/utils/loadingPage";
import { useRecoilValue } from "recoil";
import { displayNameState } from "../../state";
import { fetchUserData } from "../../apis/userDataCall";

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
    fetchUserData(displayName, setData, setIsLoading);
    setData((pre) => ({ ...pre, name: displayName }));
    setIsLoading(true); // Gọi hàm fetchUserData
  }, [displayName]);

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
                onClick={() => navigate("/picker")}
                suffix={<Icon icon="zi-arrow-right" />}
              >
                <Text>Picker</Text>
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
