var React = require('react');
var Button = require('./OptionsButton/Button.jsx');
var OptionsDropup = require('./OptionsButton/OptionsDropup.jsx');

var OptionsButton = React.createClass({
  getInitialState: function(){
    return { showDropup: false };
  },

  componentWillUpdate: function (nextProps, nextState) {
    var self = this;
    if (nextState.showDropup) {
      $('html').one('click', function () {
        self.setState({ showDropup: false });
      });
    }
  },

  toggleDropup: function(e){
    this.setState({ showDropup: !this.state.showDropup });
  },

  

  render: function () {
    var style = {
    };

    return (
      <div >
        <Button handleClick={this.toggleDropup}/>
        <OptionsDropup show={this.state.showDropup} />
      </div>
    );
  }

});

module.exports = OptionsButton;
