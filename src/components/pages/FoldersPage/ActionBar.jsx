var React = require('react');
var Modal = require('react-modal');
var ActionButton = require('./ActionButton.jsx');

var ActionBar = React.createClass({

  getInitialState: function () {
    return { modalIsOpen: false };
  },

  openModal: function () {
    this.setState({ modalIsOpen: true });
  },

  afterOpenModal: function () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function () {
    console.log('input value: ', this.refs.formInput.value);
    this.setState({ modalIsOpen: false });
  },

  clickNew: function (e) {
    this.openModal();
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

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
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

    var popupStyle = {
      top:'5px', left: '464.5px', width: '420px',
    };

    var submitStyle = {
      left: '-10000px', position: 'absolute', width: '50px',
    };

    var displayNone = {
      display: 'none'
    };

    var positionRelative = {
      position: 'relative'
    };

    return (
      <div id="actionbar-stalking-wrapper" className="multiple-rows">

        <Modal isOpen={this.state.modalIsOpen}
               onAfterOpen={this.afterOpenModal}
               onRequestClose={this.closeModal}
               style={customStyles}>

          <div className="cntr_popup popup_layout ral popup_open" style={popupStyle}>
          <div className="popup_inner">
          <div className="hd rtll rtrl" id="box_popup_header">
          <div className="media mvn pvs">
          <span id="popup_favicon" className="img mts sprite_24x24_folder"></span>				<a className="img_ext mls sprite_16x16_close_modern" id="popup_title_close_button" href="#" data-hover="tooltip" aria-label="Close"></a>
            <div id="popup_title_text" className="bd lc"><h2 className="popup_title ">Create New Folder</h2></div>
          </div>		<div id="popup_tabs" className="btn-group">
            </div>
          </div>	<div id="j_popup_div">
            <div className="bd phl" id="popup_content">
            <form className="basic_list">
            <input type="submit" value="Submit" style={submitStyle} />
            <ul className="basic_list pop_form"></ul><li>
            <div className="line"><div className="unit size1of1"><strong>Folder Name:</strong></div></div><div className="line split_column">
            <div className="unit control mbm size1of1">
            <input type="text" name="folder_name" id="new_folder_popup_name" onclick="" value="" className="input" />
            </div>
            </div>
            </li>
            </form>
            </div>
            </div>	<div className="progress center_contents" id="popup_progress_footer" style={displayNone}><ul id="popup_slider_progress_crumbs" className="popup_slider_progress_crumbs inline_list pvm"></ul></div>	<div className="ft rbll rbrl " id="popup_footer" style={positionRelative}>
            <li id="popup_footer_buttons" className="">
            <div className="line split_column">
            <div className="unit control size1of1">
            <ul className="inline_list footer_buttons_list">
            <li className="">
            <div className="control">
              <button className="btn button_control" id="popup_button_okay"><span className="button_val">Okay</span></button>
            </div>
            </li>
              <li className="">
              <div className="control">
              <button className="btn button_control" id="popup_button_cancel">
              <span className="button_val">Cancel</span>
              </button>
              </div>
              </li>
            </ul>
            </div>
            </div>
            </li>
            </div>
          </div><a href="#" className="btn_label" id="popup_accessibility_helper">&nbsp;</a>
          </div>

        </Modal>

        <div id="actionbar-wrapper" data-actionbar="files" data-resin-component="actionbar">
          <div id="mod-actionbar-files" className="actionbar ptn man " data-module="actionbar-files">
            <ul className="actionbar_buttons">
              <li className="actionbar_button_wrapper" data-resin-feature="upload">
                <ActionButton text="New" hasDropdown={true} menuItems={menuItems} />
              </li>

              <li className="actionbar_button_wrapper" data-resin-feature="interactions">
                <button id="folder_options_button" className="btn dropdown_button mvn hidden" data-type="folder-options-btn" aria-haspopup="true" data-legacy-popup="true" data-resin-target="moredropdown">
                  <ul className="inline_list">
                    <li className="actionbar-more">More</li>
                    <li>
                      <span className="toggle">
                      <b className="arrow" />
                      </span>
                    </li>
                  </ul>
                </button>
              </li>
              <li className="actionbar_button_wrapper" data-resin-feature="boxnotes"> <button id="new_box_note_button" className="btn mvn" data-type="new-box-note-btn" data-tooltip="" data-tooltip-position="top" aria-label="Write a quick note" data-resin-target="newboxnote"><ul className="inline_list"><li className="icon sprite_actionbar_note_create_grey man mls"></li></ul></button></li>
            </ul>
          </div>


          <div id="mod-actionbar-search" className="actionbar ptn man " data-module="actionbar-search"><ul className="actionbar_buttons"></ul></div>
          <script type="text/x-template" id="jst-search-page-title-placeholder">
            <li className="page_title">Loading...</li>
          </script>


          <div id="mod-actionbar-trash" className="actionbar ptn man " data-module="actionbar-trash"><ul className="actionbar_buttons"><li className="actionbar_button_wrapper"><button id="restore_button" className="btn mvn" data-type="trash-restore"><ul className="inline_list"><li>Restore All</li></ul></button></li><li className="actionbar_button_wrapper"><button id="delete_button" className="btn mvn" data-type="trash-delete"><ul className="inline_list"><li>Delete All</li></ul></button></li></ul></div>

          <div id="actionbar-multiple-selection" className="actionbar ptn man handle_menu_events "><ul className="actionbar_buttons"><li className="actionbar_button_wrapper" id="multi_options_download"><button className="btn mvn" data-hover="tooltip" aria-label="Download"><span className="man icon sprite_actionbar_download"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_sharebar"><button className="btn mvn" data-hover="tooltip" aria-label="Send"><span className="man icon sprite_actionbar_send"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_tag"><button className="btn mvn" data-hover="tooltip" aria-label="Tag"><span className="man icon sprite_actionbar_tags"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_move"><button className="btn mvn" data-hover="tooltip" aria-label="Move / Copy"><span className="man icon sprite_actionbar_movecopy"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_restore"><button className="btn mvn" data-hover="tooltip" aria-label="Restore"><span className="man icon sprite_actionbar_restore"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_delete_me"><button className="btn mvn" data-hover="tooltip" aria-label="Delete"><span className="man icon sprite_actionbar_delete"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_delete_from_trash"><button className="btn mvn" data-hover="tooltip" aria-label="Delete"><span className="man icon sprite_actionbar_delete_from_trash"></span></button></li><li className="actionbar_button_wrapper" id="multi_options_synchronize"><button className="btn mvn" data-hover="tooltip" aria-label="Sync"><span className="man icon sprite_actionbar_sync"></span></button></li><li className="actionbar-plain-text" id="multi_options_no_actions"><em>No actions available</em></li></ul></div>


          <div id="mod-view-options" className="view_options ptn man" data-module="view-options">
            <ul className="actionbar_buttons mbn">
              <li className="actionbar_button_wrapper"><button id="view_options_button" className="btn dropdown_button mvn mrn" data-type="view-options-menu-btn" aria-haspopup="true" data-resin-feature="none" data-resin-target="viewoptionsmenu" data-tooltip="" data-tooltip-position="top" aria-label="View Options"><ul className="inline_list"><li className="icon sprite_actionbar_eyeball"></li><li><span className="toggle"><b className="arrow"></b></span></li></ul></button></li>
              <li id="nav_paging" className="actionbar_button_wrapper">
                <div id="top_pages">


                  <div id="paging_menu" className="box-menu handle_menu_events" style={displayNone}><div className="cntr drop_down_ext scrollable ignore_mousedown"><ul className="list_menu hover_list"> <li id="page_1" className="selected"><a href="#" id="page_link_1" data-page_num="1" data-type="paging-link">1</a></li></ul></div></div>

                </div>
              </li>
              <li className="select_all">
                <a href="#" className="sprite_item_list_checkbox img" data-resin-feature="none" data-resin-target="checkall" data-tooltip="" data-tooltip-position="top" aria-label="Select / Deselect All" data-type="toggle-item-list-selection"><input style={displayNone} type="checkbox" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
}

});

module.exports = ActionBar;
