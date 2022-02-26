
// import './App.css';
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/Login/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './Pages/Login/Register/Register';
import Authprovider from './context/authprovider/Authprovider';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Switch>
            <Route path="/appoinment">
              <Appoinment></Appoinment>
            </Route>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
