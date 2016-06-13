var React = require('react');

var ActionBar = React.createClass({


  render: function () {

    var uploadMenuStyle = {
      position: 'absolute', display: 'none'
    };

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

    return (
      <div id="actionbar-stalking-wrapper" className="multiple-rows">
        <div id="actionbar-wrapper" data-actionbar="files" data-resin-component="actionbar">
          <div id="mod-actionbar-files" className="actionbar ptn man " data-module="actionbar-files">
            <ul className="actionbar_buttons">
              <li className="actionbar_button_wrapper" data-resin-feature="upload">
              <button id="upload_button" className="btn btn-primary dropdown_button mvn" data-type="upload-menu-btn" aria-haspopup="true" data-resin-target="uploadmenu">
                <ul className="inline_list">
                <li className="actionbar-upload">Upload</li>
                <li><span className="toggle"><b className="arrow"></b></span></li>
                </ul>
              </button>
                <ul tabindex="0" role="menu" className="ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" data-type="upload-menu" style={uploadMenuStyle}>
                  <li role="presentation" className="ui-menu-item" data-type="upload-files-option"> <a role="menuitem" tabindex="-1" id="ui-id-2" className="upload-files-icon ui-corner-all" href="#">Files</a></li>
                  <li role="presentation" className="ui-menu-item" data-type="upload-directory-option">
                  <a role="menuitem" tabindex="-1" id="ui-id-3" className="upload-folders-icon ui-corner-all" href="#">Folders</a>
                  </li>
                </ul>
              </li>
              <li className="actionbar_button_wrapper" data-resin-feature="none">
                <button id="create_item_button" className="btn dropdown_button mvn" data-type="create-item-menu-btn" aria-haspopup="true" data-legacy-popup="true" data-resin-target="newmenu"><ul className="inline_list"> <li className="actionbar-new">New</li><li><span className="toggle"><b className="arrow"></b></span></li></ul></button>


                <div className="box-menu mls drop_down_ext handle_menu_events" id="dd_menu_create_item" style={displayNone} data-resin-component="actionbar|newmenu">
                  <ul className="list_menu hover_list">
                    <li id="new_item_new_folder" data-resin-feature="itemops" data-resin-target="newfolder">
                      <a id="new_item_new_folder_link" href="#">
                        <span className="sprite_16x16_small_typed_folder list_img"></span>

                        Folder
                      </a>
                    </li>

                    <li id="new_item_new_boxnote" data-resin-feature="upload" data-resin-target="newboxnote">
                      <a id="new_item_new_boxnote_link" href="#">
                        <span className="sprite_16x16 sprite_doc_16_16-boxnote list_img"></span>

                        Box Note
                      </a>
                    </li>

                    <li id="new_item_new_bookmark" data-resin-feature="upload" data-resin-target="newbookmark">
                      <a id="new_item_new_bookmark_link" href="#">
                        <span className="sprite_16x16_new_bookmark list_img"></span>

                        Bookmark
                      </a>
                    </li>

                    <li className="separator pan ignore_mouseover box_edit_types">
                      <hr className="divider" />
                    </li>

                    <li id="new_box_edit_word" className="new_file_type box_edit_types" data-newdoc_extension="doc" data-newdoc_type="box_edit_word" data-resin-target="newboxeditword">
                      <a id="new_box_edit_word_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_box_edit_word_link}></span>
                        Word Document
                      </a>
                    </li>

                    <li id="new_box_edit_powerpoint" className="new_file_type box_edit_types" data-newdoc_extension="ppt" data-newdoc_type="box_edit_powerpoint" data-resin-target="newboxeditpowerpoint">
                      <a id="new_box_edit_powerpoint_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_box_edit_powerpoint_link}></span>
                        PowerPoint Document
                      </a>
                    </li>

                    <li id="new_box_edit_excel" className="new_file_type box_edit_types" data-newdoc_extension="xls" data-newdoc_type="box_edit_excel" data-resin-target="newboxeditexcel">
                      <a id="new_box_edit_excel_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_box_edit_excel_link}></span>
                        Excel Spreadsheet
                      </a>
                    </li>


                    <li className="separator pan ignore_mouseover office_online_types">
                      <hr className="divider" />
                    </li>

                    <li id="new_word_online" className="new_file_type office_online_types" data-newdoc_type=" word_online" data-resin-target="newwordonline">
                      <a id="new_word_online_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_word_online_link}></span>
                        Word Document
                      </a>
                    </li>

                    <li id="new_powerpoint_online" className="new_file_type office_online_types" data-newdoc_type=" powerpoint_online" data-resin-target="newpowerpointonline">
                      <a id="new_powerpoint_online_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_powerpoint_online_link}></span>
                        PowerPoint Document
                      </a>
                    </li>

                    <li id="new_excel_online" className="new_file_type office_online_types" data-newdoc_type=" excel_online" data-resin-target="newexcelonline">
                      <a id="new_excel_online_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_excel_online_link}></span>
                        Excel Document
                      </a>
                    </li>


                    <li className="separator pan ignore_mouseover newdoc_types"><hr className="divider" /></li>

                    <li id="new_gdocapps" className="new_file_type newdoc_types" data-newdoc_type=" gdocapps" data-resin-target="newgdocapps">
                      <a id="new_gdocapps_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_gdocapps_link}></span>
                        Google Doc
                      </a>
                    </li>

                    <li id="new_gsheetapps" className="new_file_type newdoc_types" data-newdoc_type=" gsheetapps" data-resin-target="newgsheetapps">
                      <a id="new_gsheetapps_link" href="#">
                        <span className="sprite_16x16 list_img" style={new_gsheetapps_link}></span>
                        Google Spreadsheet
                      </a>
                    </li>


                  </ul>
                </div>
              </li>
              <li className="actionbar_button_wrapper" data-resin-feature="interactions"><button id="folder_options_button" className="btn dropdown_button mvn hidden" data-type="folder-options-btn" aria-haspopup="true" data-legacy-popup="true" data-resin-target="moredropdown"><ul className="inline_list"> <li className="actionbar-more">More</li><li><span className="toggle"><b className="arrow"></b></span></li></ul></button></li>
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
