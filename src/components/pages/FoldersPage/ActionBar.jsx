var React = require('react');
var AddItemDialog = require('./AddItemDialog.jsx');
var ActionButton = require('./ActionButton.jsx');
var ButtonIcon = require('./ButtonIcon.jsx');
var OptionsButton = require('./OptionsButton.jsx');


var ActionBar = React.createClass({

  getInitialState: function () {
    return {
      modalIsOpen: false,
      newFolderName: ''
    };
  },

  openModal: function () {
    this.setState({ modalIsOpen: true });
  },

  saveItem: function (name) {
    console.log('Save this name : ', name)
  },

  render: function () {

    var displayNone = {
      display: 'none'
    };

    var new_box_edit_word_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/box_edit_word_favicon-aQQRdg.png);"'
    };

    var new_word_online_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/box_edit_word_favicon-aQQRdg.png);"'
    };

    var new_box_edit_powerpoint_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/box_edit_powerpoint_favicon-Nut1pV.png);"'
    };

    var new_box_edit_excel_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/box_edit_excel_favicon-GYXZvj.png);"'
    };

    var new_powerpoint_online_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/box_edit_powerpoint_favicon-Nut1pV.png);"'
    };

    var new_excel_online_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/box_edit_excel_favicon-GYXZvj.png);"'
    };
    var new_gsheetapps_link = {
      backgroundImage: 'url(https://cdn01.boxcdn.net/_assets/img/gsheet_favicon-jRHrOX.gif);"'
    };
    var new_gdocapps_link = {
      backgroundImage: 'url(https://app.box.com/index.php?rm=pic_storage_auth&amp;pic=euks!pac3kv01!FUz06iLrysq2g2_SOHMwH_JS0unYFvEUK44kaIOwe0A9oM0CllE3XCe9q9PDeBOdt6NR7agK4Qrjl57XqsjZ-foWHOJr31bgMeAGBZ3PY6XkvWFgx1upNBT5WATIDgXEsOkAfxd3dPnHD1AdILfwOzgW01o7mkjBjIVeitEKvA68Am7aEwL6MzPVZ_ti0HyPK1opitUXc8BMC6o7_VAqXW2xTycuGQHfYCoEanBG0KTgzMOZEqH0iwUyPyidWFkvBVlHJY0bU-z2hk7KX-ofM9igtlHd5S4SWxyc-B7Hv8EYyw6JTrfLgEWmlu3fEeZvqa8IF-IprAWhuJYNftuM7cEZEF4GwJLzkXFa3Cnc-g..);"'
    };



    var menuItems = [
      {
        text: "File", type: "file",
        handleClick: function () {
          console.log('click on file');

        }.bind(this)
      },
      {
        text: "Folder", type: "folder",
        handleClick: function () {
          console.log('click on folder');
          this.openModal();
        }.bind(this)
      }
    ];

    var displayNone = {
      display: 'none'
    };

    var displayInlineBlock = {
      display: 'inline-block'
    };

    return (
      <div id="actionbar-stalking-wrapper" className="multiple-rows">
        <AddItemDialog modalIsOpen={this.state.modalIsOpen}
                       clickSave={this.saveItem}
                       initialInputText="Clear me" />

        <div>
          <div style={displayInlineBlock} className="actionbar ptn man">
            <ul className="actionbar_buttons">
              <li className="actionbar_button_wrapper">
                <ActionButton text="New" hasDropdown={true} menuItems={menuItems} />
              </li>
              <li className="actionbar_button_wrapper" data-resin-feature="boxnotes">
                <ButtonIcon />
              </li>
            </ul>
          </div>


          <div className="view_options ptn man">
            <ul className="actionbar_buttons mbn">
              <li className="actionbar_button_wrapper">
                <OptionsButton />
              </li>
              <li className="actionbar_button_wrapper">
                <div>
                  <div className="box-menu handle_menu_events" style={displayNone}>
                  <div className="cntr drop_down_ext scrollable ignore_mousedown">
                    <ul className="list_menu hover_list">
                    <li id="page_1" className="selected">
                    <a href="#">1</a>
                    </li>
                    </ul>
                  </div>
                  </div>

                </div>
              </li>
              <li className="select_all">
                <a href="#" className="sprite_item_list_checkbox img">
                <input style={displayNone} type="checkbox" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      );

  }
});

module.exports = ActionBar;
