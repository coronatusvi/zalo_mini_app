import React from "react";
import { Button, Page, Text, useNavigate } from "zmp-ui";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Page className="page home">
      <Text className="header">Chào mừng đến với ZALO MINI APP</Text>
      <h2>Ứng dụng</h2>
      <h1 style={{ color: "green" }}> quản lý người dùng</h1>
      <h3 className="header">BẮT ĐẦU</h3>
      <p className="header">vs</p>
      <Button className="start" onClick={() => navigate("/drag")}>
        Todo Smart
      </Button>
      <hr />
      <Button
        className="start"
        onClick={() => navigate("/react-qr-barcode-scanner")}
      >
        Next
      </Button>
    </Page>
  );
};

export default HomePage;
