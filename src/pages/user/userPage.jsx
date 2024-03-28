import React, { useEffect, useState } from "react";
import { List, Icon, useNavigate, Text } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";

import UserCard from "../../components/user-card";

export default function UserPage() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   // Thực hiện các hoạt động có thể gây cập nhật trạng thái ở đây
  //   // Ví dụ: Gọi API, thực hiện các thao tác bất đồng bộ
  //   fetchData();
  // }, []); // Chúng ta sử dụng một mảng rỗng ở đây để chỉ thực hiện hiệu ứng này một lần khi component được mount

  // const fetchData = async () => {
  //   try {
  //     setData(useRecoilValue(userState));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
}
