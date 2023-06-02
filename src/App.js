import {Route,withRouter ,Switch} from 'react-router-dom'
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import './App.css';

const App = () =>{
  return(
    <Switch>
      <Route exact path="/shows/:id" component={withRouter(MovieDetails)} />
      <Route exact path="/" component={withRouter(Home)} />
    </Switch>
  )
}

export default App;
