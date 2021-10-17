import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CreateAccount from './CreateAccount/CreateAccount';
import TransferAmount from './TransferAmount/TransferAmount';
import Balance from './Balance/Balance';
function App() {
  return (
    <Router>
           <div className="App">
           <table>
              
             <tr align="center">
               <td>
                <Link to="/CreateAccount">Create Account         </Link>
               </td>
               <td>
               <Link to="/TransferAmount"> | Transfer Amounts    </Link>
               </td>

               <td>
               <Link to="/Balance"> | Retreive Balance  </Link>
               </td>
               </tr>
              </table>
            <Switch>
             
              <Route exact path='/CreateAccount' component={CreateAccount}></Route>
              <Route exact path='/TransferAmount' component={TransferAmount}></Route>
              <Route exact path='/Balance' component={Balance}></Route>
            </Switch>
          </div>
       </Router>
  );
}

export default App;
