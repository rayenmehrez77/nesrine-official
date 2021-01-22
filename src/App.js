import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App({ match }) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path={`${match.path}/:topicId`} component={CategoryPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(App);
