import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import Admin from './pages/admin';

class App extends Component {

    render(){
        return (
            //将store提供给<Provider></Provider>包裹的组件
            <Provider store={store}>
                <BrowserRouter>
                    <div>

                        <Route path='/admin' exact component={Admin}></Route>

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }

}



export default App;
