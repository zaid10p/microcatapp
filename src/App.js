import React from "react";
import { Router, Route, Link,Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';
import store from "./redux/store";

import GreetingCat from "./components/GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";

const defaultHistory = createBrowserHistory();

// const getComponent = (path) => {
//   if(path == "/test1"){
//     return <Test1 />
//   }else if(path == "/test2"){
//     return <Test2 />
//   }else{
//     return <h2>Default </h2>
//   }
// }


//MICROFRONTEND APP 
function App({ history = defaultHistory }) {
  console.log("FE-App history loc >> ", history.location);
  
  return (
    <Provider store={store}>
     
      <Router history={history}>
      <Switch>
          <Route exact path="/cat/" component={RandomCat} />
        <Route exact path="/cat/test1" component={Test1} />
        <Route exact path="/cat/test2" component={Test2} />
      </Switch>
        {/* <button onClick={() => history.push("/test1")}>click </button> */}
        

        {/* <Route exact path="/cat/:greeting" component={GreetingCat} /> */}
      </Router>
     </Provider>
  );
}

export default App;
