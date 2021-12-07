import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../styles/Button_styles";
import { CreateAccount, SignUpLink } from "../styles/createAcountText_style";
import { Form } from "../styles/form_style";
import { H1Style } from "../styles/h1styles";
import { TextField } from "../Utils/TextField";
import * as Joi from "@hapi/joi";
import { signUpUser } from "../data/auth";
import { ErrorSpan } from "../styles/Textfield_style";
// import 'joi-extract-type'

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
  }>({ firstName: "", lastName: "", userName: "", password: "" });
  const [userErrors, setUserErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });
  const [serverError, setServerError] = useState<null>();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setUserErrors({ ...userErrors, [name]: "" });
    console.log(name, ":", value);
  };

  function validateUser() {
    const userSchema = Joi.object({
      firstName: Joi.string().min(3).required().label("First Name"),
      lastName: Joi.string().min(3).required().label("Last Name"),
      userName: Joi.string().min(5).required().label("User Name"),
      password: Joi.string().min(4).required().label("Password"),
    });
    const options = { abortEarly: false };
    return userSchema.validate(user, options); //Joi.validate(user, userSchema);
  }
  const formValidate = async () => {
    const { error: errors } = validateUser();
    let temperror = { firstName: "", lastName: "", userName: "", password: "" };
    if (errors) {
      for (const key in errors.details) {
        switch (errors.details[key]["path"][0]) {
          case "firstName":
            temperror.firstName = errors.details[key]["message"].replace(
              /"/g,
              ""
            );
            break;
          case "lastName":
            temperror.lastName = errors.details[key]["message"].replace(
              /"/g,
              ""
            );
            break;
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
      let register = await signUpUser({ ...user, role: "manager" });
      if (register !== undefined && register["register"]) {
        console.log("inside");
        setServerError(null);
        console.log(register);
        navigate("/signin");
      } else {
        setServerError(register);
        console.log(register);
      }
      console.log(register);
      setUserErrors({ ...temperror });
    }

    // console.log(userErrors);
  };
  return (
    <div>
      <H1Style>SignUp Page</H1Style>
      <Form>
        <TextField
          name="firstName"
          type="text"
          placeHolder="First Name"
          handleChange={onChangeHandler}
          error={userErrors.firstName}
        />
        <TextField
          name="lastName"
          type="text"
          placeHolder="Last Name"
          handleChange={onChangeHandler}
          error={userErrors.lastName}
        />
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
          onClick={() => {
            formValidate();
          }}
        >
          SignUp
        </Button>
        <CreateAccount>
          <span>Already have account</span>
          <Link to="/signin">
            <SignUpLink>SignIn</SignUpLink>
          </Link>
        </CreateAccount>
      </Form>
    </div>
  );
};
