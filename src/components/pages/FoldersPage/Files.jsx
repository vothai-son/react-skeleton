var React = require('react');
var FolderItem = require('./FolderItem.jsx');
var FileItem = require('./FileItem.jsx');
var Body = React.createClass({

  render: function () {
    var displayNone = {
      display: 'none'
    };

    return (
        <div id="files" className="main multi_options_container">
          <div id="mod-item-description-1" className="item_description_container mhn mvm pam edit_in_place_cntr cntr disable_selectable" data-module="item-description" data-type="folder-description" style={displayNone}> <span className="item_description prs" data-url="/index.php?rm=box_files_update_item_info" data-field="description" data-item_id="current" data-item_type="folder" data-behavior="edit_in_place" data-type="textarea" data-maxlength="255" placeholder="Add a folder description..."></span></div> <div id="mod-tag-filters-1" className="cntr actions line pbn" data-module="tag-filters" style={displayNone}>
          <ul className="inline_list unit size4of5"></ul><div className="unit size1of5"><a href="#" className="img_ext" data-type="remove-all-tags-btn">Remove all</a></div></div>
          <div id="top_notification" className="top-notification" data-module="notifications">


          </div>

          <div id="box_confirmation" className="cntr feature confirmation confirmation_v2 disable_selectable" data-module="legacy-confirmations" style={displayNone}>
            <div className="media">
              <a id="box_confirmation_close" className="img_ext icon sprite_14x14_close mrn" href="#"></a>
              <div className="bd">
                <div id="box_confirmation_content"></div>
                <div id="box_confirmation_description" className="pts" style={displayNone}></div>
              </div>
            </div>
          </div>

          <div id="banner_message_anchor" className=""></div>

          <div id="contextual-message-banner-anchor"></div>
          <div id="automationRetentionContainer" className="hidden"></div><div id="html5_upload_target_overlay" className="receiving_drop dashed_outline_small"></div> <div id="mod-item-list" data-module="item-list" data-resin-component="content">
            <ul id="item-list" className="list_ext item_collection use_comments_expansion use_share_expansion use_tasks_expansion list_view ">

              <FolderItem name="Billboard" type="folder" />
              <FolderItem name="Thai Son" type="folder" />
              <FolderItem name="Favorites" type="folder" />

              <FileItem name="Relax. Take it easy!" type="file" />
            </ul>
            <div style={displayNone} id="empty-placeholder" data-resin-feature="emptystate">
              <div id="empty_files" className="empty line" style={displayNone}></div><div id="search_loading" className="empty line" style={displayNone}><div className="unit size1of4">&nbsp;</div><div id="searching_for_data" className="unit size1of2 pal"><div className="center_contents"><div className="center search_gif_container_disabled"></div><h2>Loading search results for <span id="search_pattern"></span></h2></div></div><div className="unit size1of4 last_unit">&nbsp;</div></div>
            </div>
          </div><div className="media"><div id="mod-paging-bottom" className="ptm txt_r" data-module="paging-bottom"></div></div>
        </div>

    );
  }

});

module.exports = Body;
