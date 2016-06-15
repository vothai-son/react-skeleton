var React = require('react');
var Button = require('./ActionButton/Button.jsx');
var MenuPopup = require('./ActionButton/MenuPopup.jsx');

var ActionButton = React.createClass({

  getInitialState: function () {
    console.log('this.props.hasDropdown ', this.props.hasDropdown)
    return { showDropdown: false, hasDropdown: this.props.hasDropdown };
  },

  componentWillUpdate: function (nextProps, nextState) {
    var self = this;
    if (nextState.showDropdown) {
      $('html').one('click', function () {
        self.setState({ showDropdown: false });
      });
    }
  },

  buttonClick: function (e) {
    e.stopPropagation();
    var self = this;   

    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });
    }

  },

  render: function () {
    var dropdownStyle = {
      display: this.props.hasDropdown ? '' : 'none'
    };

    

    return (
      <div>
        <Button text={this.props.text} hasDropdown={this.state.hasDropdown} onClick={this.buttonClick}/>
        <MenuPopup show={this.state.showDropdown} menuItems={this.props.menuItems}/>
      </div>
    );
  }

});

module.exports = ActionButton;
