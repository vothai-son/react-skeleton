var React = require('react');
var ActionBar = require('./ActionBar.jsx');
var Files = require('./Files.jsx');
var RightColumn = require('./RightColumn.jsx');

var PageBody = React.createClass({

  render: function () {
    var bodyStyle = {
      minHeight: '504px'
    };

    return (
      <div style={bodyStyle} className="body disable_48x48_sprites disable_sprite_46x46 disable_sprite_18x18">
        <div className="page">
          <RightColumn />
          <ActionBar />
          <Files />
        </div>
      </div>
    );
  }

});

module.exports = PageBody;
