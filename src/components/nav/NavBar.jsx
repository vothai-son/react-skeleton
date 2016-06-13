var React = require('react');
var NavItem = require('./NavItem.jsx');

var NavBar = React.createClass({
  createLinkItem: function (item, index) {
    return (
      <NavItem key={item.title + index} href={item.href} title={item.title} className={item.className} />
        );
  },

  render: function () {
    //var createLinkItem = function (item, index) {
    //  return (
    //    <NavItem key={item.title + index} href={item.href} title={item.title} className={item.className}/>
    //    );
    //}


    var styleTable = {
      height: '100%', border: 0, cellpadding: 0, cellspacing: 0
    };

    var styleTd = {
      height: '100%', valign: "middle",
    };

    var hidden = {
      display: 'none'
    };

    return (
        <div id="box_head" data-resin-page="boxheader" className="head mw-976">
            <div id="header-container" className="header-nav" data-resin-component="header">
              <div id="mod-header" className="header" role="navigation" data-module="header">
                <div className="page">
                  <div className="line nav files_view icon_nav my_files">
                    <div className="unit logo_cntr logo_unit" id="box_logo_section">
                      <table style={styleTable}>
                      <tbody>
                      <tr>
                      <td className="" style={styleTd}>
                        <a href="https://app.box.com/"><span id="themed_main_logo" style={hidden}></span><div id="default_main_logo" className="img logo standard_logo"></div></a>
                      </td>
                      </tr>
                      </tbody>
                      </table>
                    </div>
                    <div id="search_unit" className="search_unit_left">
                      <form id="search_files_form" className="search_form nav_content" role="search" action="" method="POST" name="search_form" data-type="search-form" data-resin-feature="search">
                        <input name="search" id="search" className="search_field needs_hover" autocomplete="off" placeholder="Search Files" data-type="search-keyword-input" type="text" />
                        <button className="search_field search_button" data-type="search-btn" type="submit"></button>
                      </form>
                    </div> <ul className="unit_ext sham-header menu-wrapper tabs_unit">
                      <li id="current_user_tab" className="nav-icon mrn" data-admin-view="false" aria-haspopup="true">
                        <strong className="user_name" data-type="menu-toggle-button" data-resin-feature="none" data-resin-target="profilemenu"><a href="#" className="ellipsis ellipsis_170 sham-user-public-name">vo thaison</a></strong>

                        <menu className="menu is-right-aligned sham-user-menu" data-resin-component="header|profilemenu">
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

                      </li>
                    </ul>

                    <ul className="unit_ext current_user_name_unit" data-resin-feature="upgrade">
                      <li id="upgrade_button" className="nav_icon_drop_link phm mrn upgrade_button">
                        <a id="upgrade_button_link" href="https://app.box.com/ref/upgrade_header_upgrade" data-resin-target="upgrade"><span className="nav_icon">Upgrade</span></a>
                      </li>
                    </ul>

                    <ul className="unit_ext allow_right_click tabs_unit" data-resin-feature="navigation"> 
                      {this.props.navData.map(this.createLinkItem)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
        );
  }
});

module.exports = NavBar;