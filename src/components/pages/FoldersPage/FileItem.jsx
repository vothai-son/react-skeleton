var React = require('react');

var FolderItem = React.createClass({

  render: function () {
    var displayNone = {
      display: 'none'
    };

    var displayBlock = {
      display: 'block'
    };

    return (
      <li data-type="item-row" data-typed-id="f_67140317225" className="item_mouseover_handler file item song" id="c0_f_67140317225">
        <div className="dnd" draggable="true" data-downloadurl="audio/mpeg:03 Red Ditty (Non-LP Version).mp3:/index.php?rm=box_v2_download_file&amp;file_id=f_67140317225&amp;print_download_url=1" style={displayBlock}>
          <ul className="file_properties man">
            <li className="lock_right_icon">
              <div className="lock file-lock-gray">
              </div>
            </li>
            <li className="concurrent_lock_right_icon">
              <div className="concurrent_lock collaborative-lock-gray">
              </div>
            </li>
            <li className="locked_key_right_icon">
              <div className="locked_key file-lock-gray">
              </div>
            </li>
            <li className="task_to_complete">
              <div className="sprite_16x16_task" data-hover="tooltip" aria-label="Click to see task(s) assigned to you">
              </div>
            </li>
          </ul> <div className="media man">
            <div className="img">
              <div className="thumb_small sprite_doc_32_32-mp3" data-background-image="">
                <div className="corner_overlay sync sprite_16x16_sync" data-hover="tooltip" aria-label="Synced|Box Sync is enabled for all items in this folder.">
                </div>
              </div>                    
          <div className="thumb_large thumb_large_center sprite_doc_40_40-mp3" data-background-image="" >
                <div className="corner_overlay sync sprite_16x16_sync" data-hover="tooltip" aria-label="Synced|Box Sync is enabled for all items in this folder.">
                </div>
              </div>
            </div>  <div className="item_data bd">
              <ul className="action_list">
                <li className="action_share">
                  <a href="#" id="share_menu_67140317225" className="share_menu share_link" data-type="share-btn" data-tooltip="" data-tooltip-position="top" aria-label="   Share this file  " data-resin-feature="share" data-resin-target="sharefile">  Share </a>
                </li>
                <li className="action feed_item">
                  <a href="#" id="item_feed_menu_67140317225" className="item_feed_menu sprite_item_list_comment" data-type="item-feed-btn" data-hover="tooltip" aria-label="     Add a comment or task.   ">
                  </a>
                </li>
                <li className="action unfavorite">
                  <a href="#" className="sprite_item_list_unfavorite" data-type="favorite-btn" data-tooltip="" data-tooltip-position="top" data-resin-target="favorite" aria-label="Add to favorites">
                  </a>
                </li>
                <li className="action more_item" aria-haspopup="true" data-legacy-popup="true">
                  <a href="#" className="sprite_item_list_more" id="arrow_67140317225" data-type="context-menu-btn" data-resin-feature="none" aria-label="More">
                  </a>
                </li>
                <li className="action select">
                  <a href="#" className="sprite_item_list_checkbox" data-type="select-checkbox" data-resin-feature="none">
                    <input style={displayNone} type="checkbox" />
            </a>
          </li>
        </ul>
        <div className="item-name-container" id="filename_67140317225" name={this.props.name}>         
          <a href="https://app.box.com/files/0/f/0/1/f_67140317225" className="item_link item_name_text edit_in_place item_name dnd highlight" data-url="/index.php?rm=box_files_update_item_info" data-field="name" data-item_id="67140317225" data-item_type="file" data-behavior="edit_in_place" data-validate="filename not_empty_item_type">
            {this.props.name}
          </a>   
           </div>
        <ul className="inline_list mvn for_hidden_external_collab_only">
          <li>This folder is owned by an external collaborator</li>
          <li className="file_count">
            <span className="item_stat">
              <span className="list_img">
              </span>
            </span>
          </li>
        </ul>
        <ul className="inline_list item_creation_info mvn">
          <li>       Uploaded&nbsp;May 25, 2016 by <a className="hoverlight profile_link" data-type="profile-link" data-resin-feature="none" href="https://app.box.com/profile/207784212" target="_blank">vo thaison</a>&nbsp;</li>
          <li className="item_size">2.4 MB</li>
          <li className="share-menu-indicator hidden" data-id="67140317225" data-hover="tooltip" aria-label="Shared">
            <button className="btn-plain" data-type="share-btn">
              <span className="img mrn sprite_16x16_horizontal_grey_link">
              </span>
            </button>
          </li>
          <li>
            <ul className="inline_list_ext inline_list_expirations">
              <li id="link_info_67140317225" style={displayNone}>
                <span className="js_enabled_text">
                </span>
              </li>
            </ul>
          </li>
        </ul>  <ul className="inline_list_ext edit_description mbn" style={displayNone}>
          <li className="tags tag_container last-child" style={displayNone}>
          </li>
        </ul>
      </div>
    </div>
  </div>
      </li>

    );
  }

});

module.exports = FolderItem;
