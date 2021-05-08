import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MatchPage } from './pages/MatchPage';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year"  component={MatchPage}/>
          <Route path="/teams/:teamName" component={TeamPage}/>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
