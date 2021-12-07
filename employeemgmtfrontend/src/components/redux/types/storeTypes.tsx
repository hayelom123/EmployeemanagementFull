export type user = {
  Name: string;
  dateOfBirth?: string;
  gender: string;
  salary: number;
  _id: string;
};
export type error = {
  message: string;
  id: string;
  failed: boolean;
  open: boolean;
};
interface storeType {
  users: user[];
  login: boolean;
  error: error;
}
export default storeType;
