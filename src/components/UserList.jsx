import { useEffect, useContext } from "react";

//* UseContext
import UserContext from "../context/user/UserContext";

const UserList = () => {

  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (  
    <div className="list-group h-100">
      { users.map(user => {
        const { id, first_name, last_name, avatar } = user;
        return (
          <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" 
            key={id}
            href="#!"
            onClick={() => getProfile(id)}
          >
            <img className="img-fluid mr-4 rounded-circle" width="70px"
              src={avatar} 
              alt={`${first_name} ${last_name}`} 
            />
            <p>{first_name} {last_name}</p>
          </a>
        )
      }) }
    </div>
  );
}
 
export default UserList;