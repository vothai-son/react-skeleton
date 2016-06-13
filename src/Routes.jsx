var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.hashHistory;

//var History = require('history');

  //var _History = new History.CreateHistory({
  //  queryKey: false
  //});

var BasePage = require('./components/pages/BasePage.jsx');
var HomePage = require('./components/pages/HomePage.jsx');
var FoldersPage = require('./components/pages/FoldersPage.jsx');
var SettingsPage = require('./components/pages/SettingsPage.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />      
      <Route path="/settings" component={SettingsPage} />
      <Route path="/folders/:folderId" component={FoldersPage} />   
    </Route>
  </Router>
);

module.exports = Routes;
