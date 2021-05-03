import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../src/pages/home'
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {AddEntry} from "./pages/AddEntry";
import {SingleEntry} from "./pages/SingleEntry";
import 'fontsource-roboto';
import {Header} from "./components/Header";
import {ModifyEntry} from "./pages/modifyEntry";
import {useSelector} from "react-redux";
import {AUTH_TOKEN} from "./constants";
import {makeStyles} from "@material-ui/core";





function App() {
    const user = localStorage.getItem(AUTH_TOKEN);
    console.log(user);


  return (
      <div>
<BrowserRouter>
    <Header user={user}/>
    <Switch>

        {user ?
            <>
                <Route path='/Home' component={Home}/>
                <Route path='/Add' component={AddEntry}/>
                <Route path='/Single/:id' component={SingleEntry}/>
                <Route path='/Modify/:id' component={ModifyEntry}/>
            </>
            :
            <>
            <Route path='/Register' component={Register}/>
            <Route path='/' exact component={Login} />
            </>
        }
    </Switch>
</BrowserRouter>
      </div>

  );
}

export default App;

