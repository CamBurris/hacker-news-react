import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import styles from "./app.module.css";
import Story from "./pages/story";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/story/:storyId" component={Story} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
