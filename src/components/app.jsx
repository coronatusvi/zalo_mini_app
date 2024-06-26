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
import AboutPage from "../pages/user/aboutUser";
import FormPage from "../pages/user/formPage";
import UserDetailPage from "../pages/user/userDetailPage";
import UserPage from "../pages/user/userPage";
import BottomNavigationPage from "../pages/buttomNavigation";
import ExamplePage from "../pages/product/listUserPage";
import ItemPage from "../pages/product/listIemImage";
import DemoDragNdrop from "../pages/dragNdrop";
import PagePicker from "../pages/newTech/pickerScreen";
import BarcodeScanner from "../pages/react-qr-barcode-scanner";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Page className="page">
              <AnimationRoutes direction="left">
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                <Route
                  path="/list"
                  element={<ExamplePage></ExamplePage>}
                ></Route>
                <Route path="/item" element={<ItemPage></ItemPage>}></Route>
                <Route
                  path="/drag"
                  element={<DemoDragNdrop></DemoDragNdrop>}
                ></Route>
                <Route
                  path="/picker"
                  element={<PagePicker></PagePicker>}
                ></Route>

                <Route path="/" element={<UserPage></UserPage>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/form" element={<FormPage></FormPage>}></Route>
                <Route
                  path="/user-detail"
                  element={<UserDetailPage></UserDetailPage>}
                ></Route>
                {/* react-qr-barcode-scanner */}
                <Route
                  path="/react-qr-barcode-scanner"
                  element={<BarcodeScanner></BarcodeScanner>}
                ></Route>
              </AnimationRoutes>
            </Page>
            <React.Fragment>
              <BottomNavigationPage />
            </React.Fragment>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
