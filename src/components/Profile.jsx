import { useContext } from "react";

import UserContext from "../context/user/UserContext";

const Profile = () => {

  const { selectedUser } = useContext(UserContext)

  if(Object.entries(selectedUser).length === 0) {
    return <h2>No User Selected</h2>;
  }

  const { first_name, last_name, avatar, email } = selectedUser;

  return (
    <div className="card card-body text-center">
      <img className="card-img-top rounded-circle m-auto img-fluid"
        style={{
          width: "180px"
        }}
        src={avatar} 
        alt={`${first_name} ${last_name}`} 
      />
      <h1>{first_name} {last_name}</h1>
      <h3>Email: {email}</h3>
    </div>
  )
}
 
export default Profile;