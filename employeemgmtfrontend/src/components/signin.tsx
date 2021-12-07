import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button_styles";
import { CreateAccount, SignUpLink } from "../styles/createAcountText_style";
import { Form } from "../styles/form_style";
import { H1Style } from "../styles/h1styles";
import { TextField } from "../Utils/TextField";
import * as Joi from "@hapi/joi";
import { signInUser } from "../data/auth";
import { useNavigate } from "react-router-dom";
import { ErrorSpan } from "../styles/Textfield_style";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { changeLogin } from "./redux/action";
import { RootState } from "./redux/store/store";
// changeLogin;
export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useSelector((state: RootState) => state.users);
  const [user, setUser] = useState<{ userName: string; password: string }>({
    userName: "",
    password: "",
  });
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  });
  const [userErrors, setUserErrors] = useState({ userName: "", password: "" });
  const [serverError, setServerError] = useState<null>();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setUserErrors({ ...userErrors, [name]: "" });
  };

  function validateUser() {
    const userSchema = Joi.object({
      userName: Joi.string().required().label("User Name"),
      password: Joi.string().required().label("Password"),
    });
    const options = { abortEarly: false };
    return userSchema.validate(user, options); //Joi.validate(user, userSchema);
  }
  const formValidate = async () => {
    const { error: errors } = validateUser();
    let temperror = { userName: "", password: "" };
    if (errors) {
      for (const key in errors.details) {
        switch (errors.details[key]["path"][0]) {
          case "userName":
            temperror.userName = errors.details[key]["message"].replace(
              /"/g,
              ""
            );
            break;
          case "password":
            temperror.password = errors.details[key]["message"].replace(
              /"/g,
              ""
            );
            break;
          default:
            break;
        }
      }
      setUserErrors({ ...temperror });
    } else {
      setUserErrors({ ...temperror });
      let signed = await signInUser(user.userName, user.password);
      if (signed !== undefined && signed["signed"]) {
        console.log("inside");
        setServerError(null);
        console.log(signed);
        cookie.save("user", signed, { maxAge: 24 * 60 * 60 });
        dispatch(changeLogin(true));
        navigate("/");
      } else {
        setServerError(signed);
        console.log(signed);
      }
      // console.log(signed);
    }
  };

  return (
    <div>
      <H1Style>SignIn Page</H1Style>
      <Form>
        <TextField
          name="userName"
          type="text"
          placeHolder="user name"
          handleChange={onChangeHandler}
          error={userErrors.userName}
        />
        <TextField
          name="password"
          type="password"
          placeHolder="password"
          handleChange={onChangeHandler}
          error={userErrors.password}
        />
        {serverError && (
          <ErrorSpan style={{ textAlign: "center" }}>
            {serverError["msg"]}
          </ErrorSpan>
        )}
        <Button
          onClick={(e) => {
            formValidate();
            // for(const key in userErrors)
          }}
        >
          login
        </Button>
        <CreateAccount>
          <span>I don't have account</span>
          <Link to="/signup">
            <SignUpLink>SignUp</SignUpLink>
          </Link>
        </CreateAccount>
      </Form>
    </div>
  );
};
