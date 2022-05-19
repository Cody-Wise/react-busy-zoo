import './App.css';
import AnimalParade from './AnimalParade';
import OpenandClosed from './OpenandClosed';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Admin from './Admin';
import ZooPage from './ZooPage';

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [unicornSize, setunicornSize] = useState(10);
  const [lionSize, setlionSize] = useState(6);
  const [animals, setAnimals] = useState(['frog', 'bird', 'alligator']);

  const sizeModifier = 1;

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Zoo</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <ZooPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
