import React, { useEffect } from "react";
import routes from "./route/routes";

import { MainBody } from "./styles/body_style";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./Utils/topNavbar";
import { GlobalStyle } from "./styles/gloablstyle";
import { useSelector, useDispatch } from "react-redux";
import { RenderRoute } from "./route/renderRoute";
import { RootState } from "./components/redux/store/store";
import cookie from "react-cookies";
import { changeLogin } from "./components/redux/action";
import Modal from "./Utils/modal";
const App: React.FC = () => {
  const { login } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookie.load("user") && cookie.load("user")["signed"]) {
      dispatch(changeLogin(true));
    }
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <div>
        <Router>
          <NavBar />
          <Modal />
          <MainBody>
            <Routes>{routes.map((el) => RenderRoute(el, login))}</Routes>
          </MainBody>
        </Router>
      </div>
    </>
  );
};

export default App;
