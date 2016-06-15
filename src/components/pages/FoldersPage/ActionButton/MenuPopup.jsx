var React = require('react');
var MenuPopupItem = require('./MenuPopupItem.jsx');

var MenuPopup = React.createClass({
  render: function () {
    var self = this;

    function createMenuItem(item, index) {
      return (<MenuPopupItem key={index} text={item.text} type={item.type} handleClick={item.handleClick}/>);
    }

    var uploadMenuStyle = {
      position: 'absolute',
      display: this.props.show ? 'block' : 'none',
      visibility: 'visible',
      position: 'absolute',
      top: '34px'
    };

    return (
      <div className="box-menu drop_down_ext handle_menu_events" style={uploadMenuStyle}>
        <ul className="list_menu hover_list">
          {this.props.menuItems.map(createMenuItem)}
        </ul>
      </div>
    );
  }

});

module.exports = MenuPopup;
