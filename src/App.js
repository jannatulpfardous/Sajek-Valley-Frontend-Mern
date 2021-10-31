
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./header/Header"
import FullDetails from "./fullDetails/FullDetails"
import Form from "./components/form/Form"
import Admin from "./components/admin/newadmin/NewAdmin"
import Navbar from "./components/navbar/Navbar"
import Login from "./Login/Login"
import Private from "./Login/PrivateRouter"
import Card from "./components/card/Card"
import Footer from './components/Footer/Footer';
import Facilities from "./components/Facilities/Facilities";



function App() {
  return (
    <div className="App">
      




       <Router>
      <div>

       <Navbar></Navbar>
        <Switch>


          <Route exact path="/">
            <Header />
          </Route>
          <Private exact path="/form">
            <Form />
          </Private>

           <Private exact path="/admin">
            <Admin/>
          </Private>
           <Route exact path="/login">
            <Login />
          </Route>
          <Private exact path="/card">
            <Card />
          </Private>
          <Route exact path="/facilities">
            <Facilities />
          </Route>
          
           <Private exact path="/fulldetails/:id">
            <FullDetails />
          </Private>


        </Switch>
         <Footer></Footer>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
