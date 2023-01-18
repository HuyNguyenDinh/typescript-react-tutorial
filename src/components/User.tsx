import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const User = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    if(userContext) {
      userContext.setUser({
        name: 'Huy',
        email: 'huyn27316@gmail.com'
      })
    }
  }

  const handleLogout = () => {
    if(userContext){
      userContext.setUser(null)
    }
  }
  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>Username is {userContext.user?.name}</h2>
      <h2>User email is {userContext.user?.email}</h2>
    </div>
  )
}