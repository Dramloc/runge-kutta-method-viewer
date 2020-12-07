/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import tw, { GlobalStyles } from "twin.macro";
import {
  RungeKuttaMethodCompare,
  RungeKuttaMethodGraph,
  RungeKuttaMethodList,
} from "./RungeKuttaMethod";
import { Tab, Tabs } from "./shared/Tabs";

const Header = () => {
  const { search } = useLocation();
  return (
    <header tw="border-b border-gray-200 bg-white">
      <Tabs tw="px-4">
        <Tab to={`/runge-kutta-methods/compare${search}`}>Comparison</Tab>
        <Tab to={`/runge-kutta-methods/graph${search}`}>Graph</Tab>
      </Tabs>
    </header>
  );
};

const Sidebar = (props) => {
  return (
    <aside
      tw="border-b sm:(border-b-0 border-r) border-gray-200 bg-white h-full overflow-y-auto"
      {...props}
    />
  );
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Global
        styles={{
          body: tw`font-sans antialiased`,
          "body, #root": tw`min-h-screen sm:(h-screen overflow-hidden)`,
          "#root": tw`flex flex-col sm:(flex-row) bg-gray-100`,
        }}
      />
      <Router>
        <Switch>
          <Route path="/runge-kutta-methods">
            <Sidebar>
              <RungeKuttaMethodList />
            </Sidebar>
            <div tw="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main
                tw="flex-1 relative overflow-y-auto focus:outline-none"
                tabindex="0"
              >
                <Switch>
                  <Route
                    path="/runge-kutta-methods/compare"
                    component={RungeKuttaMethodCompare}
                  />
                  <Route
                    path="/runge-kutta-methods/graph"
                    component={RungeKuttaMethodGraph}
                  />
                  <Route path="*">
                    <Redirect to="/runge-kutta-methods/compare" />
                  </Route>
                </Switch>
              </main>
            </div>
          </Route>
          <Route path="*">
            <Redirect to="/runge-kutta-methods" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
