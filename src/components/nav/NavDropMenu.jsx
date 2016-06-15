var React = require('react');

var NavDropMenu = React.createClass({
  getInitialState: function () {
    return {show: this.props.show};
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({ show: nextProps.show });    
  },

  render: function () {

    var style = {};    
    
    if (this.state.show) {
      style = {
        display: 'block',
        opacity: 1,
        transform: 'rotateY(0deg) rotateX(0deg)'
      };
    } else {
      style = {
        display: 'none',
        opacity: 0,
        transform: 'rotateY(-10deg) rotateX(-10deg)'
      };
    }


    return (
      <menu className="menu is-right-aligned sham-user-menu" style={style}>
        <li className="sham-user-menu-profile" data-resin-feature="none">
          <img src="img/box_user_avatar_small-QaPHWb.png" alt="" className="profile-image" />
          <a href="https://app.box.com/profile" className="menu-option" data-resin-target="profile">vo thaison <br /> View Profile</a>
        </li>

        <hr className="menu-divider" />
        <li className="sham-user-menu-settings" data-resin-feature="none">
          <a href="https://app.box.com/settings" className="menu-option" data-resin-target="accountsettings"> Account Settings</a>
        </li>
        <li className="sham-user-menu-collaborators" data-resin-feature="collab">
          <a href="https://app.box.com/contacts" className="menu-option" data-resin-target="collaborators"> Collaborators</a>
        </li>
        <li className="sham-user-menu-apps" data-resin-feature="none">
          <a href="https://app.box.com/apps" className="menu-option" data-resin-target="apps"> Apps</a>
        </li>
        <li className="sham-user-menu-trash" data-resin-feature="none">
          <a href="https://app.box.com/trash" className="menu-option" data-resin-target="trash"> Trash</a>
        </li>
        <li className="sham-user-menu-help" data-resin-feature="none">
          <a href="https://app.box.com/help" target="_blank" className="menu-option" data-resin-target="help"> Help</a>
        </li>
        <li className="sham-user-menu-sync" data-resin-feature="none">
          <a href="https://app.box.com/settings/sync" className="menu-option" data-resin-target="getboxsync"> Get Box Sync</a>
        </li>
        <li className="sham-user-menu-logout" data-resin-feature="none">
          <a href="https://app.box.com/logout" className="menu-option" data-resin-target="logout"> Log Out</a>
        </li>
      </menu>

      );
  }

});

module.exports = NavDropMenu;
