import 'bootstrap/dist/css/bootstrap.css';
import Formcomponent from '../src/components/formcomponent';
import MainPage from './components/MainPage';
import ShowFields from './components/showfields';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/showFields' component={ShowFields}/>
      <Route exact path='/AddFields' component={MainPage}/>

      </Router>
    </div>
  );
}
export default App;
