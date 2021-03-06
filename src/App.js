
import './App.css';
import Profile from "./Components/Profile/Profile";
import UserList from "./Components/UserList/UserList";
import { Route ,Switch} from "react-router-dom";

function App() {
  return (
  <div className="App">
      
<Switch> 
<Route exact path="/" render={() => <UserList />} />   
<Route exact path="/user/:id" render={(props) => <Profile {...props} />} />
</Switch>  

  </div>
  
  );
}

export default App;
