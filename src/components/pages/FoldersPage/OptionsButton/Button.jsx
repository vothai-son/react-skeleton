var React = require('react');

var Button = React.createClass({

  render: function () {
    var style = {

    };

    return (
      <button className="btn dropdown_button mvn mrn" onClick={this.props.handleClick}>
        <ul className="inline_list">
        <li className="icon sprite_actionbar_eyeball">
        </li>
          <li><span className="toggle"><b className="arrow"></b></span></li>
        </ul>
      </button>
    );
  }

});

module.exports = Button;
