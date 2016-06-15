var React = require('react');

var MenuPopupItem = React.createClass({
  getInitialState: function(){
    return { hover: false };
  },
  onMouseOver: function () {
    this.setState({ hover: true });
  },
  onMouseOut: function () {
    this.setState({ hover: false });
  },

  render: function () {
    var uploadMenuStyle = {
      position: 'absolute',
      display: this.props.show ? 'block' : 'none',
      visibility: 'visible',
      position: 'absolute',
      top: '34px'
    };

    var classIcon = '';

    if (this.props.type === 'file') {
      classIcon = 'sprite_16x16 sprite_doc_16_16-boxnote list_img';
    }

    if (this.props.type === 'folder') {
      classIcon = 'sprite_16x16_small_typed_folder list_img';
    }

    var classLi = 'ui-menu-item';
    if (this.state.hover) {
      classLi += ' hover';
    }

    return (
         <li onMouseOver={this.onMouseOver} 
             onMouseOut={this.onMouseOut}
             onClick={this.props.handleClick} 
             className={classLi} >

            <span className="new_item_new_folder_link">
            <span className={classIcon}></span>
              {this.props.text}
            </span>
        </li>
    );
  }

});

module.exports = MenuPopupItem;
