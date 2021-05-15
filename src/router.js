import React from 'react';
import {BrowserRouter, Route,Switch,} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./pages/admin";
import AddCommunity from "./pages/community/addCommunity";
import DeleteCommunity from "./pages/community/deleteCommunity";
import UpdateCommunity from "./pages/community/updateCommunity";
import FindCommunity from "./pages/community/findCommunity";
import {Provider} from "react-redux";
import store from "./store";
import NoMatch from "./nomatch";
import Home from "./pages/home";

export default class  IRouter extends React.Component {
    render() {
        return(
            //  <HashRouter>
            //     <App>
            //         <Route path="/login" component={Login} />
            //         <Route path="/admin" render={()=>
            //             <Admin>
            //
            //                 <Route path="/admin/community/addCommunity" component={AddCommunity} />
            //                 <Route path="/admin/community/deleteCommunity" component={DeleteCommunity} />
            //                 <Route path="/admin/community/updateCommunity" component={UpdateCommunity} />
            //                 <Route path="/admin/community/findCommunity" component={FindCommunity} />
            //                 <Route component={NoMatch}/>
            //             </Admin>
            //         } />
            //     </App>
            // </HashRouter>
            <Provider store={store}>
                <BrowserRouter>
                        <App>
                            <Route path="/login" component={Login} />
                            <Route path="/admin" render={()=>
                                <Admin>
                                    <Home/>
                                    <switch>
                                        <Route path="/admin/community/addCommunity" component={AddCommunity} />
                                        <Route path="/admin/community/deleteCommunity" component={DeleteCommunity} />
                                        <Route path="/admin/community/updateCommunity" component={UpdateCommunity} />
                                        <Route path="/admin/community/findCommunity" component={FindCommunity} />

                                    </switch>
                                </Admin>
                            } />
                        </App>
                </BrowserRouter>
            </Provider>
        )
    }
}