import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </>
  );
}

export default App;
