var React = require('react');
var SubHeader = require('./FoldersPage/SubHeader.jsx');
var PageBody = require('./FoldersPage/PageBody.jsx');

var FoldersPage = React.createClass({

  getInitialState: function(){
    return { fId: '' };
  },

  componentDidMount: function () {
    this.setState({ fId: this.props.params.folderId });
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({ fId: nextProps.params.folderId });
  },

  render: function () {
    return (
      <div>
        <SubHeader />
        <PageBody />        
      </div>
    );
  }

});

module.exports = FoldersPage;
