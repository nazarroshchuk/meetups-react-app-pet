import React from "react";
import {Redirect, Route, Switch} from "react-router";
import { AllMeetups } from "./components/pages/AllMeetups";
import { Favorites } from "./components/pages/Favorites";
import { NewMeetups } from "./components/pages/NewMeetups";
import { Layout } from "./components/layout/Layout";
import { FavoritesContextProvider } from "./context/favorites.context";


function App() {
  return (
      <FavoritesContextProvider>
          <Layout>
              <Switch>
                  <Route exact path={'/'} component={AllMeetups}/>
                  <Route path={'/favorites'} component={Favorites}/>
                  <Route pash={'/new-meetup'} component={NewMeetups}/>
                  <Redirect to={'/'} />
              </Switch>
          </Layout>
      </FavoritesContextProvider>
    )
}

export default App;
