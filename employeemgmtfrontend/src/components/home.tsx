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
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Date OF Birth(M/D/Y)</th>
            <th>Salary</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.Name}</td>
                <td>{user.gender}</td>
                <td>
                  {new Date(
                    user.dateOfBirth ? user.dateOfBirth : "dec 2020-12-02"
                  ).toLocaleDateString()}
                </td>
                <td>{user.salary}</td>
                <td>
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
                <td>
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
