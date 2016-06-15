var React = require('react');
var NavDropMenu = require('./NavDropMenu.jsx');

var NavbarButton = React.createClass({
  getInitialState: function () {
    return { showDropdown: false };
  },

  toggleShowDropdown: function (reactEvent) {
    var self = this;

    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });

      $('html').one('click', {reactEvent: reactEvent}, function (e) {
        if (e.data.reactEvent.target !== e.target) {
          self.setState({ showDropdown: false });
        }        
      });
    }
  },

  render: function () {
    return (
        <ul ref='clickTarget' className="unit_ext sham-header menu-wrapper tabs_unit" show={this.state.showDropdown} onClick={this.toggleShowDropdown}>
          <li className="nav-icon mrn">
            <strong className="user_name">
              <a href="javascript:void(0)" className="ellipsis ellipsis_170 sham-user-public-name">{this.props.text}</a>
            </strong>
            <NavDropMenu show={this.state.showDropdown} />
          </li>
        </ul>
      );
  }

});

module.exports = NavbarButton;
