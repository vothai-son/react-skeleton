var React = require('react');
var Modal = require('react-modal');

var AddItemDialog = React.createClass({

  getInitialState: function(){
    return {
      modalIsOpen: this.props.modalIsOpen || false,
      newFolderName: this.props.initialInputText || ''
    };
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({modalIsOpen: nextProps.modalIsOpen});
  },

  openModal: function () {
    this.setState({ modalIsOpen: true });
  },

  afterOpenModal: function () {
    this.refs.formInput.focus();
  },

  closeModal: function () {
    this.setState({ modalIsOpen: false });
  },

  saveNew: function () {
    var name = this.refs.formInput.value;
    var saveCall = this.props.clickSave;
    if(saveCall){
      saveCall(name);
    }
    this.setState({ modalIsOpen: false });
  },

  newFolderNameChange: function (e) {
    this.setState({ newFolderName: e.target.value });
  },

  render: function () {
    var bodyStyle = {
    };

    var positionRelative = {
      position: 'relative'
    };

    var customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
      overlay: {
        zIndex: 3,
        backgroundColor: 'rgba(221, 221, 221, 0.74902)',

      }
    };

    var popupStyle = {
      top:'5px', left: '464.5px', width: '420px',
      zIndex: 4
    };

    var displayNone = {
      display: 'none'
    };

    return (
      <Modal isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={customStyles}>

          <div style={popupStyle}>
            <div className="popup_inner">
              <div className="hd rtll rtrl" id="box_popup_header">
                <div className="media mvn pvs">
                  <a className="img_ext mls sprite_16x16_close_modern" onClick={this.closeModal}></a>
                  <div className="bd lc">
                    <h2 className="popup_title ">Create New Folder</h2>
                  </div>
                </div>
              </div>

              <div className="bd phl" id="popup_content">
                <form className="basic_list">

                  <div className="line">
                  <div className="unit size1of1">
                    <strong>Folder Name:</strong>
                  </div>
                  </div>
                  <div className="line split_column">
                    <div className="unit control mbm size1of1">
                      <input type="text" name="folder_name" id="new_folder_popup_name" onclick="" value={this.state.newFolderName} onChange={this.newFolderNameChange} className="input" ref="formInput" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="ft rbll rbrl " id="popup_footer" style={positionRelative}>
              <li id="popup_footer_buttons" className="">
              <div className="line split_column">
              <div className="unit control size1of1">
              <ul className="inline_list footer_buttons_list">
              <li className="">
                <div className="control">
                  <button className="btn button_control" onClick={this.saveNew}><span className="button_val">Okay</span></button>
                </div>
              </li>
              <li className="">
                <div className="control">
                <button className="btn button_control" onClick={this.closeModal}>
                  <span className="button_val">Cancel</span>
                </button>
                </div>
              </li>
              </ul>
                < /div>
              </div>
              </li>
              </div>
            </div>
          </div>

      </Modal>

    );
}

});

module.exports = AddItemDialog;
