import React, { useEffect, useState } from "react";
import { Button } from "../../styles/Button_styles";
import { TextField } from "../../Utils/TextField";
import { useDispatch } from "react-redux";

import { edituserActionCreator } from "../redux/action/index";
import { Form } from "../../styles/form_style";

import { useLocation } from "react-router-dom";
import * as Joi from "@hapi/joi";

const Edit: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<{
    Name: string;
    dateOfBirth: string;
    gender: string;
    salary: number;
    _id: string;
  }>({ Name: "", dateOfBirth: "", gender: "", salary: 0, _id: "" });
  useEffect(() => {
    const { Name, dateOfBirth, gender, salary, _id } = location.state;
    setUser({ Name, dateOfBirth, gender, salary, _id });
  }, []);
  const [userErrors, setUserErrors] = useState({
    Name: "",
    dateOfBirth: "",
    gender: "",
    salary: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setUserErrors({ ...userErrors, [name]: "" });
  };
  function validateUser() {
    const userSchema = Joi.object({
      Name: Joi.string().required().label(" Name"),
      dateOfBirth: Joi.date().required().label("Date OF Birth"),
      gender: Joi.string().required().label("Gender"),
      salary: Joi.number().min(5).required().label("Salary"),
      _id: Joi.string().required(),
    });
    const options = { abortEarly: false };
    return userSchema.validate(user, options); //Joi.validate(user, userSchema);
  }
  const formValidate = async () => {
    const { error: errors } = validateUser();
    let temperror = { Name: "", dateOfBirth: "", gender: "", salary: "" };
    if (errors) {
      for (const key in errors.details) {
        switch (errors.details[key]["path"][0]) {
          case "Name":
            temperror.Name = errors.details[key]["message"].replace(/"/g, "");
            break;
          case "dateOfBirth":
            temperror.dateOfBirth = errors.details[key]["message"].replace(
              /"/g,
              ""
            );
            break;
          case "gender":
            temperror.gender = errors.details[key]["message"].replace(/"/g, "");
            break;
          case "salary":
            temperror.salary = errors.details[key]["message"].replace(/"/g, "");
            break;
          default:
            break;
        }
      }
      setUserErrors({ ...temperror });
    } else {
      dispatch(edituserActionCreator({ ...user }));
      setUserErrors({ ...temperror });
    }
  };
  return (
    <div>
      <Form>
        <TextField
          name="Name"
          type="text"
          placeHolder="Name"
          handleChange={onChangeHandler}
          error={userErrors.Name}
          value={user.Name}
        />
        <TextField
          name="dateOfBirth"
          type="date"
          placeHolder="Date Of Birth"
          handleChange={onChangeHandler}
          error={userErrors.dateOfBirth}
          value={user.dateOfBirth}
        />
        <TextField
          name="salary"
          type="number"
          placeHolder="Salary"
          handleChange={onChangeHandler}
          error={userErrors.salary}
          value={user.salary}
        />
        <div
          className="menu"
          style={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",

            padding: "10px",
            margin: "10px",
          }}
        >
          <span style={{ fontWeight: "600", fontSize: "18px" }}>Gender</span>
          <select
            style={{
              display: "block",
              margin: "5px",
              padding: "5px",
              outline: "none",
              border: " 2px solid rgba(100, 100, 100, 0.3)",
              fontSize: "18px",
            }}
            value={user.gender}
            onChange={(e) => {
              setUser({ ...user, gender: e.target.value });
            }}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            formValidate();
          }}
        >
          Save
        </Button>
      </Form>
    </div>
  );
};
export default Edit;
