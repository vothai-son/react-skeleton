var React = require('react');

var breakcrumbLinks = [
  { id: 1, text: 'All Files' },
  { id: 2, text: 'Music' },
  { id: 3, text: '127 Hours - A. R. Rahman' },
  { id: 4, text: 'Favorites' },
];

var SubHeader = React.createClass({

  createBreakcrumbLink: function (item, index) {
    return (
      <li key={index} class="breadcrumb_item">
          <a data-type="path-link" className="allow_right_click breadcrumb_item_link" href="/files/0/f/8329063737/127_Hours_-_A._R._Rahman">
            <div className="breadcrumb_item_icon float_left sprite_16x16_subheader_folder"> </div>
            <span className="breadcrumb_item_title">{item.text}</span>
          </a>
      </li>
    );
  },

  render: function () {
    return (
          <div role="navigation" data-module="subheader-breadcrumb" className="subheader mw-976" id="mod-subheader-breadcrumb">
            <div className="breadcrumb_wrapper">
              <ul className="breadcrumb_items inline_list_icon_aligned man single_line" id="main_path">

                {breakcrumbLinks.map(this.createBreakcrumbLink)}

              </ul>
            </div>
          </div>

        );
  }
});

module.exports = SubHeader;