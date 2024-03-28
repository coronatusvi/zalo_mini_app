import React, { useEffect, useState } from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { displayNameState } from "../../state";
import { getUserInfo } from "zmp-sdk";

const UserDetailPage = () => {
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
    // console.log("Data đã được cập nhật:", data);
    setuser(data);
  }, [data]);

  // const { userInfo: user } = useRecoilValue(userState);
  const displayName = useRecoilValue(displayNameState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Box
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Avatar
            story="default"
            size={96}
            online
            src={data.avatar.startsWith("http") ? data.avatar : undefined}
          >
            {data.avatar}
          </Avatar>
        </Box>
        <Box flex flexDirection="row" alignItems="center" ml={8}>
          <Box>
            <Text.Title>{displayName || data.name}</Text.Title>
          </Box>
          <Box ml={4}>
            <Button
              onClick={() => {
                navigate("/form");
              }}
              size="small"
              icon={<Icon icon="zi-edit" />}
            />
          </Box>
        </Box>
      </Box>
      <Box m={0} p={0} mt={4}>
        <div className="section-container">
          <List>
            <List.Item title="Name" subTitle={data.name} />
            <List.Item title="Display Name" subTitle={displayName} />
            <List.Item title="ID" subTitle={data.id} />
          </List>
        </div>
      </Box>
    </Page>
  );
};

export default UserDetailPage;
