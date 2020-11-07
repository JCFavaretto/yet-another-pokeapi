import Pokemones from "components/Pokemones";
import Pokemon from "components/Pokemon";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Pokemones} />
        <Route path="/pokemon/:pokemon" exact component={Pokemon} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
