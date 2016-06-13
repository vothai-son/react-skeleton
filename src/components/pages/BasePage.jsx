var React = require('react');
var NavBar = require('../nav/NavBar.jsx');

var navLinks = [
  { title: "Settings", href: '/settings', className: 'sprite-header-settings' },
  { title: "Files", href: '/folders/list', className: 'sprite-header-folder' },
  { title: "Home", href: '/', className: 'sprite-header-home' },  
];

var BasePage = React.createClass({

  render: function () {
    return (
      <div>
        <NavBar navData={navLinks} />
        { this.props.children }
      </div>
    );
  }

});

module.exports = BasePage;
