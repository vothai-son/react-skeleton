var React = require('react');

var OptionsDropup = React.createClass({

  getInitialState: function(){
    return { show: false };
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({ show: nextProps.show });
  },

  render: function () {
    var style = {

    };

    var optionMenuStyle = {
      position: 'absolute',
      maxWidth: '250px',
      width: 'auto',
      top: '-73px',
      left: '0.5px',
      display: this.state.show ? 'block' : 'none'
    };

    return (
      <ul data-type="view-options-menu" className="view-options-menu list_menu ui-menu ui-widget ui-widget-content ui-corner-all" style={optionMenuStyle} data-resin-feature="none" id="ui-id-10" role="menu" tabindex="0" aria-activedescendant="ui-id-15">
          <li className="ui-menu-label sort-label pts">Sort by</li>
          <li data-type="sort" data-sort="name" className="ui-menu-item" role="presentation"><a href="#" data-resin-target="sortname" id="ui-id-11" className="ui-corner-all" tabindex="-1" role="menuitem"><span className="arrow"></span>Name</a></li>
          <li data-type="sort" data-sort="date" className="selected ui-menu-item" role="presentation"><a href="#" data-resin-target="sortdate" id="ui-id-12" className="ui-corner-all" tabindex="-1" role="menuitem"><span className="arrow menu_arrow_down"></span>Date</a></li>
          <li data-type="sort" data-sort="size" className="ui-menu-item" role="presentation"><a href="#" data-resin-target="sortsize" id="ui-id-13" className="ui-corner-all" tabindex="-1" role="menuitem"><span className="arrow"></span>Size</a></li>
          <li className="display-divider mvs ui-widget-content ui-menu-divider">-</li>
          <li className="ui-menu-label display-label">Display as</li>
          <li data-type="display" data-display="list" className="selected ui-menu-item" role="presentation"><a href="#" data-resin-target="displaylist" id="ui-id-14" className="ui-corner-all" tabindex="-1" role="menuitem"><span className="icon mrm sprite_menus_list_view"></span>List View</a></li>
          <li data-type="display" data-display="icon" className="ui-menu-item" role="presentation">
          <a href="#" data-resin-target="displayicon" id="ui-id-15" className="ui-corner-all" tabindex="-1" role="menuitem"><span className="icon mrm sprite_menus_icon_view"></span>Icon View</a>
          </li>
     </ul>
    );
  }

});

module.exports = OptionsDropup;
