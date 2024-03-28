import React, { useEffect, useState } from "react";
import { List, Icon, useNavigate, Text } from "zmp-ui";

import UserCard from "../../components/user-card";
import { getUserInfo } from "zmp-sdk";

export default function UserPage() {
  const [data, setData] = useState({
    id: "",
    name: "",
    avatar: "",
    idByOA: "",
  });
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userInfo } = await getUserInfo({});
        setData(userInfo);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Data đã được cập nhật:", data);
    setuser(data);
  }, [data]);

  const navigate = useNavigate();
  return (
    <>
      <div className="section-container">
        <UserCard user={user || data.userInfo} />
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
  );
}
