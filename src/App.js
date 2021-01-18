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
        <Route exact="/" component={HomePage} />
        <Route exact="/about" component={AboutPage} />
        <Route exact="/services" component={ServicesPage} />
        <Route exact="/blog" component={BlogPage} />
        <Route exact="/contact" component={ContactPage} />
      </Switch>
    </>
  );
}

export default App;
