import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { CityProvider } from "./context";
import HomePage from "./pages/HomePage/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import "./App.css";
import { AuthProvider } from "./context/UserContext";

const App = withRouter(({ location }) => {
  return (
    <AuthProvider>
      <div className="app">
        {location.pathname !== "/signin" && <Header />}
        <Switch>
          <CityProvider>
            <Route exact path="/" component={HomePage} />
            <Route path="/:city_name/restaurants" component={RestaurantsPage} />
          </CityProvider>
        </Switch>
        <Route exact path="/signin" component={SignInSignUpPage} />
      </div>
    </AuthProvider>
  );
});

export default App;
