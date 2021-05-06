import React,{ Component } from 'react';
import Header from "./common/header";
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import Home from './pages/home';

class App extends Component {

    render(){
        return (
            //将store提供给呗<Provider></Provider>包裹的组件
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path='/' exact component={Home}></Route>

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }

}



export default App;
