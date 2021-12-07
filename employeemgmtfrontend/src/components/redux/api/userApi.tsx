import axios from "axios";
import { HOST } from "../../../url";

const userApi = axios.create({
  baseURL: HOST,
});

export default userApi;
