import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route to='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
