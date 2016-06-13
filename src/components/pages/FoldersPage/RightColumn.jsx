var React = require('react');

var RightColumn = React.createClass({

  render: function () {
    var displayNone = {
      display: 'none'
    };

    var sidebar_favorites_placeholder = {
      height: '28px'
    };

    return (
    <div className="right_col">
        <div id="content_sidebar" className="content_sidebar disable_selectable" data-resin-component="sidebar">
          <div id="sidebar_in_product_marketing" className="cntr feature cntr_sidebar misc-files-module" style={displayNone}>
          </div>

          <div id="sidebar-favorites-module" className="cntr_sidebar favorites-module misc-files-module" data-module="favorites" data-resin-feature="favorites">
            <h3><span data-type="link">
              <a className="title-link" href="https://app.box.com/files/favorites" data-resin-component="favoriteshome"> Favorites</a></span></h3> 
            <div style={sidebar_favorites_placeholder} className="sidebar-favorites-placeholder fx">
              <div className="sidebar-favorites-spinner-container fx-fast hidden">
                <div className="spinner-amsterdam">
                  <div className="crawler">
                    <div>
                    </div>
                  <div>
                  </div>
                  <div>
                  </div>
                  </div>
                  <img className="crawler-gif" src="/img/crawler-__jQMT.gif" />
                </div>
              </div><div className="sidebar-favorites-container">
                <ul className="sidebar-favorite-items"> <li className="pas sidebar-item" data-type="item" data-typed-id="d_8140174821" data-new-tab="false"><div className="media"><span className="img sprite_folder_16_16"></span><a className="item-link ellipsis ellipsis_170" href="https://app.box.com/files/0/f/8140174821/Billboard" data-resin-target="favoritesfolder">Billboard</a><button className="btn-plain favorites-remove-btn" data-type="unfavorite-btn" data-tooltip="" aria-label="Remove from favorites" data-tooltip-position="top" data-resin-target="unfavoritefolder"><span className="accessibility-hidden"> Remove from favorites</span></button></div></li> </ul>
              </div>
            </div>
          </div>
          <div className="cntr_sidebar misc-files-module" id="sidebar_download_apps_section" data-module="download-apps">
          <div>
            <button className="btn download_cta" id="download_sync" data-type="sync-button">
            <ul className="inline_list"><li className="sprite_16x16_sync_dark_gray mrm"></li> <li>Install Box Sync</li></ul>
            </button>
          </div>
          </div>


          <div id="sidebar_pending_items" className="inbox_sidebar cntr_sidebar" style={displayNone}><h3>Pending Items</h3><div className="sidebar_text"><ul className="icon_list"></ul>
            </div>
          </div>

          <div className="sidebar-search-filters-outer"></div>

          <div id="account_info_sidebar_module" className="account_info misc-files-module cntr_sidebar" data-resin-feature="none">

            <h3>Support</h3>
            <ul className="icon_list">
              <li>
                <div className="media">
                  <span className="img icon sprite_16x16_help"></span>
                  <div className="bd">
                    <a id="sidebar_help_link" href="https://app.box.com/help" target="_blank" data-resin-target="help">

                      Help
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <span className="img icon sprite_16x16_box_webinar"></span>
                  <div className="bd">
                    <a href="https://box.csod.com/singlesignon.aspx?ouid=2" target="_blank" data-resin-target="gettraining">

                      Get Training
                    </a>
                  </div>
                </div>
              </li>

            </ul>
          </div>



        </div>
    </div>

    );
  }

});

module.exports = RightColumn;
