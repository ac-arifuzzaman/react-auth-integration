import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Placeorder from './Components/Placeorder/Placeorder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <Route path="/login"><Login></Login></Route>
            <Route path="/register"><Register></Register></Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/Placeorder">
              <Placeorder></Placeorder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
