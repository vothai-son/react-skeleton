var React = require('react');

var Popup = React.createClass({

  render: function () {
    var style = {
      minHeight: '504px'
    };

    return (
      <div className="popup_overlay popup_open" id="box_popup_overlay"></div>
    );
  }

});

module.exports = Popup;
