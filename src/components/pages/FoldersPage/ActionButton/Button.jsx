var React = require('react');

var Button = React.createClass({

  render: function () {
    var dropdownStyle = {
      display: this.props.hasDropdown ? '' : 'none'
    };

    return (
      <button id="upload_button" 
              className="btn btn-primary dropdown_button mvn" 
              onClick={this.props.onClick}>
          <ul className="inline_list">
            <li className="actionbar-upload">{this.props.text}</li>
            <li style={dropdownStyle}><span className="toggle"><b className="arrow"></b></span></li>
          </ul>
      </button>
    );
  }

});

module.exports = Button;
