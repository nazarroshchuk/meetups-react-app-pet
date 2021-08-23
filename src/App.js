import React from "react";
import {Redirect, Route, Switch} from "react-router";
import { AllMeetups } from "./components/pages/AllMeetups";
import { Favorites } from "./components/pages/Favorites";
import { NewMeetups } from "./components/pages/NewMeetups";
import { Layout } from "./components/layout/Layout";
import { Shield } from "./components/errors/Shield";
import { Internal } from "./components/errors/Internal";
import {NotFound} from "./components/errors/NotFound";
import {Forbidden} from "./components/errors/Forbidden";


function App() {
  return (
      <Shield>
          <Layout>
              <Switch>
                  <Route exact path={'/'} component={AllMeetups} />
                  <Route path={'/favorites'} component={Favorites} />
                  <Route path={'/new-meetup'} component={NewMeetups} />
                  <Route path={'/forbidden'} component={Forbidden} />
                  <Route path={'/notFound'} component={NotFound} />
                  <Route path={'/internal'} component={Internal} />
                  <Redirect to={'/'} />
              </Switch>
          </Layout>
      </Shield>
    )
}

export default App;
