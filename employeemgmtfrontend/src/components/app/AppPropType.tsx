import { addUserAction, deleteUserAction } from "../redux/types/actionCreatorTypes";
import { user } from "../redux/types/storeTypes";

interface AppPropType{
    users: user[],
    deleteUser: deleteUserAction,
    addUser:addUserAction,
}
export default AppPropType;