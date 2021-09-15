import Sidebar from "./layout/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Whitepage from "./components/Whitepage";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Content>
            <Switch>
              <Route exact path="/">
                <Whitepage />
              </Route>
            </Switch>
          </Content>
        </div>
      </div>
    </Router>
  );
}

export default App;
