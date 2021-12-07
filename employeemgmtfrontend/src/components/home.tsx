import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store/store";
import {
  deleteuserActionCreator,
  getListOfEmployees,
} from "./redux/action/index";
import { Table, TableHolder } from "../styles/tablestyle";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListOfEmployees(0));
  }, []);

  const onDelete = (_id: string) => {
    dispatch(deleteuserActionCreator(_id));
  };
  return (
    <TableHolder>
      <Table>
        <caption>List OF EMPLOYEES</caption>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Date OF Birth(M/D/Y)</th>
            <th scope="col">Salary</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td data-label="No">{index + 1}</td>
                <td data-label="Name">{user.Name.toUpperCase()}</td>
                <td data-label="Gender">{user.gender.toUpperCase()}</td>
                <td data-label="Date OF Birth(M/D/Y)">
                  {new Date(
                    user.dateOfBirth ? user.dateOfBirth : "dec 2020-12-02"
                  ).toLocaleDateString()}
                </td>
                <td data-label="Salary">{user.salary}</td>
                <td data-label="">
                  <button
                    className="button button2"
                    onClick={() => {
                      navigate("/edit", {
                        state: user,
                      });
                      // /edit
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td data-label="">
                  <button
                    onClick={() => {
                      onDelete(user._id);
                    }}
                    className="button button3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableHolder>
  );
};
export default Home;
