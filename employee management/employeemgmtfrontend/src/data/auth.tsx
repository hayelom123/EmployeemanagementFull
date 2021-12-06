import axios from "axios";
import { HOST } from "../url";
interface user {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  role: string;
}
export const signUpUser = async (user: user) => {
  let me;
  await axios
    .post(HOST + "/sign-up", {
      ...user,
    })
    .then((response) => {
      console.log(response.data);
      me = response.data;
    })
    .catch((error) => {
      // 1st type of error
      if (error.response) {
        if (error.response.data.err.code === 11000) {
          me = {
            register: false,
            msg: "user name already exist",
          };
        } else {
          me = { register: false, ...error.response.data };
        }

        //    console.log(error.response.data.err);
      }
      // 2nd type of error
      else if (error.request) {
        me = {
          msg: "could n't connect to server",
          register: false,
        };
      }
      // any other type of error
      else {
        // handle error
        me = {
          msg: "something went wrong",
          register: false,
        };
      }
    });
  return me;
};
export const signInUser = async (userName: string, password: string) => {
  let me;
  await axios
    .post(HOST + "/sign-in", { userName, password })
    .then((response) => {
      // console.log(response.data);
      me = response.data;
    })
    .catch((error) => {
      // 1st type of error
      if (error.response) {
        console.log(error.response);
        me = {
          ...error.response.data,
        };
      }
      // 2nd type of error
      else if (error.request) {
        me = {
          msg: "could n't connect to server",
          signed: false,
        };
      }
      // any other type of error
      else {
        // handle error
        me = {
          msg: "something went wrong",
          signed: false,
        };
      }
    });
  return me;
};
/*
1.Server responded with erroneous status. 
In this case axios has sent the request and received a response that does
 not fall in the range of 200-299 HTTP status range.
 When this error occurs the error object will have a response property
 2.No response received. Such error is thrown when axios sent the request to the
  server but did not receive any response.
  In this case error object will have request property
  3.Any other unhandled error occured.
*/
