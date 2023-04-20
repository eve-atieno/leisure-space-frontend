import { Route, Switch } from "react-router";
import Header from "./Header";
import WorkOutList from "./WorkOutList";
import WorkOutForm from "./WorkOutForm";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <WorkOutList />
        </Route>
        <Route exact path="/new">
          <WorkOutForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;