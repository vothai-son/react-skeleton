var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({

  render: function () {
    return (
      <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/folders" > Folders </Link>
          <br />
          <Link to="/folders/123"> Folders 123</Link>
          <br />
          <Link to="/folders/456"> Folders 456</Link>
        </li>
        <li>
          <Link to="/settings"> Settings </Link>
        </li>
      </ul>
      </div>
		);
  }

});

module.exports = HomePage;
