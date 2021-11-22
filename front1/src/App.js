
import './App.css'

import { Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import About from "./components/Aboutpage/About";
import Contact from "./components/Contactpage/Contact";
import Register from "./components/Signup/Register";
import Ownerdetails from './components/ownerdetails/Ownerdetails';
import Studentpage from './components/student/Studentpage';

function App() {
  return (
<Switch>
  <Route exact path="/" component={Homepage} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Contact" component={Contact} />
  <Route exact path="/Register" component={Register} /> 
  <Route exact path="/Ownerdetails" component={Ownerdetails} /> 
  <Route exact path="/Studentpage" component={Studentpage} /> 
</Switch>
  );
}

export default App;
