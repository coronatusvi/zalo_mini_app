import React from "react";
import { List, Icon, useNavigate, Text, Page } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";

import UserCard from "../../components/user-card";

export default function UserPage() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page>
      <div className="section-container">
        <UserCard user={user.userInfo} />
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
    </Page>
  );
}
