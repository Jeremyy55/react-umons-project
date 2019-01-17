import React from "react";
import { Route, Router } from "react-router-dom";
import Intro from "./Intro";
import Auth from "./Auth/Auth";
import history from "./history";
import Callback from "./Callback/Callback";
//labo
import Lempi from "./Lempi";
import Pierre from "./Pierre";
import NewKot from "./NewKot";
import Catalogue from "./Catalogue";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history} /*component={Intro}*/>
      <div>
        <Route
          exact
          path="/"
          component={props => <Intro auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route path="/newKot" component={NewKot} />
        <Route path="/Lempi" component={Lempi} />
        <Route path="/Pierre" component={Pierre} />
        <Route path="/catalogue" component={Catalogue} />
      </div>
    </Router>
  );
};

/*
 */
