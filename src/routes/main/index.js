import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Loading from "../../containers/loading";

const Home = lazy(() => import("../../containers/app"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
    </Switch>
  </Suspense>
);

export default App;
