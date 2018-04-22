var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Login = require('./Login');
//var NavigationBar = require('./NavigationBar');

class App extends React.Component {
    render() {
        return (
            <ReactRouter.BrowserRouter>
                <div className='container'>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/' component={Login} />
                        <Route render={function () {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </ReactRouter.BrowserRouter>
        )
    }
}

export default App;