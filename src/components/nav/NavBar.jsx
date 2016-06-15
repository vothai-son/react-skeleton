var React = require('react');
var NavItem = require('./NavItem.jsx');
var NavbarButton = require('./NavbarButton.jsx');
var NavbarDropdownButton = require('./NavbarDropdownButton.jsx');

var NavBar = React.createClass({
  createLinkItem: function (item, index) {
    return (
      <NavItem key={item.title + index} href={item.href} title={item.title} className={item.className} />
        );
  },

  render: function () {

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

                    <div className="search_unit_left">
                      <form id="search_files_form" className="search_form nav_content" role="search" action="" method="POST" name="search_form" data-type="search-form" data-resin-feature="search">
                        <input name="search" id="search" className="search_field needs_hover" autocomplete="off" placeholder="Search Files" data-type="search-keyword-input" type="text" />
                        <button className="search_field search_button" data-type="search-btn" type="submit"></button>
                      </form>
                    </div> 

                    <NavbarDropdownButton text="vothaison" />
                    

                    <ul className="unit_ext current_user_name_unit" data-resin-feature="upgrade">
                      <li id="upgrade_button" className="nav_icon_drop_link phm mrn upgrade_button">
                        <NavbarButton text="Upgrage" />
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