import './App.css';
import Login from './components/login';
import Registration from './components/registration';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Header from './components/header';
import NotFound from './components/not-found/not-found';
import Footer from './components/footer';
import AsideNav from './components/aside-nav';
import Profile from './components/profile';
import AddStory from './components/add-story';
import News from './components/news';
import Test from './components/test';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Registration} />
          <Route exact from="/not-found" component={NotFound} />
          <Route exact from="/test" component={Test} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>

    </BrowserRouter>

  );
}




const DefaultContainer = () => (
  <>

    <div className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed" style={{ "--kt-toolbar-height": "55px", "--kt-toolbar-height-tablet-and-mobile": "55px" }} >
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">

          <AsideNav />

          <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

            <Header />
            <Switch>
              <Route exact from="/" component={Dashboard} />
              <Route exact from="/profile" component={Profile} />
              <Route exact from="/add-story" component={AddStory} />
              <Route exact from="/news" component={News} />
              <Route from="*" ><Redirect to="/not-found" /> </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default App;