import React, { useState } from "react";
import { BottomNavigation, Icon, Page, useNavigate } from "zmp-ui";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("me");
  const { title } = props;
  const navigate = useNavigate();
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
    >
      <BottomNavigation.Item
        onClick={() => navigate("/list")}
        label="Danh sách"
        key="list"
        icon={<Icon icon="zi-list-1" />}
        activeIcon={<Icon icon="zi-list-2" />}
      />
      <BottomNavigation.Item
        onClick={() => navigate("/home")}
        label="Khám phá"
        key="discovery"
        icon={<Icon icon="zi-more-grid" />}
        activeIcon={<Icon icon="zi-more-grid-solid" />}
      />
      <BottomNavigation.Item
        onClick={() => navigate("/item")}
        key="timeline"
        label="Ảnh"
        icon={<Icon icon="zi-gallery" />}
        activeIcon={<Icon icon="zi-photo" />}
      />
      <BottomNavigation.Item
        onClick={() => navigate("/")}
        key="me"
        label="Cá nhân"
        icon={<Icon icon="zi-user" />}
        activeIcon={<Icon icon="zi-user-solid" />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationPage;
