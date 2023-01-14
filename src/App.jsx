import { Fragment } from "react";
// Components
import Profile from "./components/Profile";
import UserList from "./components/UserList";

// Context
import UserState from "./context/user/UserState";

const App = () => {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App
