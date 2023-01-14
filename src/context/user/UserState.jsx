//* Se define el estado y las funciones que modificaran el estado
import { useReducer } from "react";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

import axios from "axios";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: {} 
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);
  
  //* Obtiene una lista de usuarios
  const getUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      dispatch({
        type: 'GET_USERS',
        payload: response.data.data
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  //* Obtiene un usuario
  const getProfile = async (id) => {
    try {
      const response = await axios.get("https://reqres.in/api/users/" + id);
      dispatch({
        type: 'GET_PROFILE',
        payload: response.data.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider 
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;