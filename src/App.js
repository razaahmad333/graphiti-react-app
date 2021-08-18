import Home from "./components/Homepage/home";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ArtWork from "./components/Artworks/artworks";
import Blog from "./components/Blogs/blogs";
import Contest from "./components/Contests/contest";
import Forum from "./components/Forums/forums";
import Navigation from "./components/Navbar/navibar";
import DropdownContent from "./components/DropdownContent/dropdownContent";
import GFooter from "./components/Footer/gFooter";
import E404 from "./components/Errors/404/404";
import AccountPage from "./components/AccountPage/accountPage";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artworks">
          <ArtWork />
        </Route>
        <Route exact path="/blogs">
          <E404 />
        </Route>
        <Route path="/accountPage">
          <AccountPage />
        </Route>
        <Route exact path="/contests">
          <Contest />
        </Route>
        <Route exact path="/forums">
          <E404 />
        </Route>
      </Switch>

      <div id="navDropdownContainer"></div>
      <div id="dropdownSkillContainer"></div>
      <div id="dropdownTimeContainer"></div>
      <GFooter />

      <DropdownContent />
    </Router>
  );
}

export default App;
