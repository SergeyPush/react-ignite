import GlobalStyles from "./components/GlobalSyles";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
