import React from "react";
import { Button, Page, Text, useNavigate } from "zmp-ui";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Page className="page home">
      <Text className="header">Chào mừng đến với ZALO MINI APP</Text>
      <h2>Ứng dụng</h2>
      <h1 style={{ color: "green" }}> quản lý người dùng</h1>
      <Button className="start" onClick={() => navigate("/drag")}>
        BẮT ĐẦU
      </Button>
    </Page>
  );
};

export default HomePage;
