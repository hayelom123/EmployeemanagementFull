import { SignIn } from "../components/signin";
import IRoute from "./routeInterface";
import { SignUp } from "./../components/signup";
import Home from "../components/home";
import Register from "../components/pages/register";
import Edit from "../components/pages/edit";
const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/signin",
    name: "SignIn page",
    component: SignIn,
    exact: true,
  },
  {
    path: "/signup",
    name: "SignUp page",
    component: SignUp,
    exact: false,
  },
  {
    path: "/register",
    name: "Register page",
    component: Register,
    exact: false,
  },
  {
    path: "/edit",
    name: "Edit page",
    component: Edit,
    exact: false,
  },
]; //Edit
export default routes;
