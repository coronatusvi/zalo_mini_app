import React from "react";
import { Route } from "react-router-dom";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Page,
} from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import AboutPage from "../pages/aboutUser";
import BottomNavigationPage from "../pages/buttomNavigation";
import FormPage from "../pages/formPage";
import UserDetailPage from "../pages/userDetailPage";
import UserPage from "../pages/userPage";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Page className="page">
              <AnimationRoutes direction="left">
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/user" element={<UserPage></UserPage>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/form" element={<FormPage></FormPage>}></Route>
                <Route
                  path="/user-detail"
                  element={<UserDetailPage></UserDetailPage>}
                ></Route>
              </AnimationRoutes>
              <React.Fragment>
                <BottomNavigationPage />
              </React.Fragment>
            </Page>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
