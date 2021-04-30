import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../src/pages/home'
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {AddEntry} from "./pages/AddEntry";
import {SingleEntry} from "./pages/SingleEntry";
import 'fontsource-roboto';
import {Header} from "./components/Header";
import {useSelector} from "react-redux";
import {AUTH_USER} from "./constants";





function App() {


/*

  return (
      <div>
<BrowserRouter>
    <Header/>
    <Switch>

        {user ?
            <>
                <Route path='/Home' component={Home}/>
                <Route path='/Add' component={AddEntry}/>
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
*/

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>

                            <Route path='/Home' component={Home}/>
                            <Route path='/Add' component={AddEntry}/>

                            <Route path='/Register' component={Register}/>
                            <Route path='/' exact component={Login} />
                </Switch>
            </BrowserRouter>
        </div>

    );
}

export default App;
