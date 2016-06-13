var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavItem = React.createClass({
  getInitialState: function(){
    return { hover: false };
  },

  mouseOver: function(e){
    this.setState({ hover: true });
  },

  mouseOut: function(e){
    this.setState({ hover: false });
  },

  render: function () {

    var styleTable = {
      height: '100%', border: 0, cellpadding: 0, cellspacing: 0
    };

    var liClassName = '';
    var active = this.state.hover ? '-active' : '';
    var aClassName = 'sham-header-button' + ' ' + this.props.className + active;
    
    return (
      <li id="updates_tab" className="nav-icon current" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Link id="updates_tab_link" to={this.props.href} className={aClassName} title={this.props.title} data-resin-target="updates">
        </Link>
      </li>
    );
  }
});

module.exports = NavItem;