var React = require('react');

var NavbarButton = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
			  <a id="upgrade_button_link" href="#" data-resin-target="upgrade">
          <span className="nav_icon">{this.props.text}</span>
			  </a>
		  );
  }

});

module.exports = NavbarButton;
