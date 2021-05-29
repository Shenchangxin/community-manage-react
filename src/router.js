import React from 'react';
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import {Provider} from "react-redux";
import store from "./store";
import Index from "./pages/index";
import Community from "./pages/community";
import UpdateCommunity from "./pages/community/updateCommunity";
import AddCommunity from "./pages/community/AddCommunity";

export default class  IRouter extends React.Component {
    render() {
        return(

            <Provider store={store}>
                <BrowserRouter>
                        <App>
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/index" component={Index} />
                            <Route path="/admin" render={()=>
                                <Admin>

                                    <Switch>

                                        <Route exact path="/admin/community" component={Community} />

                                        <Route exact path="/admin/community/addCommunity" component={AddCommunity} />

                                    </Switch>
                                </Admin>
                            } />
                        </App>
                </BrowserRouter>
            </Provider>
        )
    }
}