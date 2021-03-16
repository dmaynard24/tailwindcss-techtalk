import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';
import './App.css';
import Controls from './components/Controls/Controls';

const App = () => {
  return (
    <div className="min-h-screen flex items-center">
      <Router>
        <div className="container mx-auto py-24 px-4">
          <Switch>
            {routes.map((route, i) => (
              <Route key={route.id} exact={i === 0} path={route.path}>
                {route.component}
              </Route>
            ))}
          </Switch>
        </div>
        <Controls />
      </Router>
    </div>
  );
}

export default App;
