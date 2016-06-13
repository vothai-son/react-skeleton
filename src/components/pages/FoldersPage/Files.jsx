var React = require('react');

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

              <li data-type="item-row" data-typed-id="d_8140174821" className="item_mouseover_handler folder item" id="c0_d_8140174821">
                <ul className="file_properties man"><li className="lock_right_icon"><div className="lock file-lock-gray"></div></li><li className="concurrent_lock_right_icon"><div className="concurrent_lock collaborative-lock-gray"></div></li><li className="locked_key_right_icon"><div className="locked_key file-lock-gray"></div></li><li className="task_to_complete"><div className="sprite_16x16_task" data-hover="tooltip" aria-label="Click to see task(s) assigned to you"></div></li></ul> <div className="media man">
                  <div className="img">               <div className="thumb_small sprite_32x32_folder" data-background-image="" ><div className="corner_overlay sync sprite_16x16_sync" data-hover="tooltip" aria-label="Synced|Box Sync is enabled for all items in this folder."></div> </div>                  <div className="thumb_large thumb_large_center sprite_48x48_folder" data-background-image="" ><div className="corner_overlay sync sprite_16x16_sync" data-hover="tooltip" aria-label="Synced|Box Sync is enabled for all items in this folder."></div> </div></div>  <div className="item_data bd">
                    <ul className="action_list">      <li className="action_share">  <a href="#" id="share_menu_8140174821" className="share_menu share_link" data-type="share-btn" data-tooltip="" data-tooltip-position="top" aria-label="   Share this folder  " data-resin-feature="share" data-resin-target="sharefolder">  Share </a></li>         <li className="action favorite"><a href="#" className="sprite_item_list_favorite" data-type="unfavorite-btn" data-tooltip="" data-tooltip-position="top" data-resin-target="favorite" aria-label="Remove from favorites"></a></li>    <li className="action more_item" aria-haspopup="true" data-legacy-popup="true"><a href="#" className="sprite_item_list_more" id="arrow_8140174821" data-type="context-menu-btn" data-resin-feature="none" aria-label="More"></a></li>   <li className="action select"><a href="#" className="sprite_item_list_checkbox" data-type="select-checkbox" data-resin-feature="none"><input style={displayNone} type="checkbox" /></a></li></ul>
                    <div className="item-name-container" id="filename_8140174821" name="Billboard">         <a href="https://app.box.com/files/0/f/8140174821/Billboard" className="item_link item_name_text edit_in_place item_name dnd highlight" data-url="/index.php?rm=box_files_update_item_info" data-field="name" data-item_id="8140174821" data-item_type="folder" data-behavior="edit_in_place" data-validate="filename not_empty_item_type">Billboard</a>    </div><ul className="inline_list mvn for_hidden_external_collab_only"><li>This folder is owned by an external collaborator</li><li className="file_count"><span className="item_stat"><span className="list_img"></span></span></li></ul><ul className="inline_list item_creation_info mvn"> <li className="">       Updated&nbsp;May 28, 2016 by <a className="hoverlight profile_link" data-type="profile-link" data-resin-feature="none" href="https://app.box.com/profile/207784212" target="_blank">vo thaison</a>&nbsp;</li><li className="file_count" data-hover="tooltip" aria-label="40 Files, 284.8 MB"><span className="item_stat"><span className="list_img sprite_12x12_file"></span>40</span></li><li className="share-menu-indicator hidden" data-id="8140174821" data-hover="tooltip" aria-label="Shared"><button className="btn-plain" data-type="share-btn"><span className="img mrn sprite_16x16_horizontal_grey_link"></span></button></li>    <li><ul className="inline_list_ext inline_list_expirations"><li id="link_info_8140174821" style={displayNone}><span className="js_enabled_text"></span></li></ul></li></ul>  <ul className="inline_list_ext edit_description mbn" style={displayNone}>
                    <li className="tags tag_container last-child" style={displayNone}></li>
                    </ul>
                  </div>
                </div>
              </li>

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
