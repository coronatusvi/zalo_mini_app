import React from "react";
import { Button, Page, Text, useNavigate } from "zmp-ui";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Page className="page home">
      <Text className="header">Chào mừng đến với ZALO MINI APP</Text>
      <Button className="start" onClick={() => navigate("/list")}>
        BẮT ĐẦU
      </Button>
    </Page>
  );
};

export default HomePage;
