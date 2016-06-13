var React = require('react');


var NameField = React.createClass({
    getInitialState: function(){
        return {value: ''};
    },
    
    onChange: function(e){
        var val = e.target.value;
        this.setState({value: val});
    },
    
    clear: function(){
        this.setState({value: ''});
    },
       
    render: function(){
		return (
			<div className='form-group'>
                <input 
                    className="form-control" 
                    onChange={this.onChange} 
                    placeholder={this.props.type + " Email"} 
                    value={this.state.value} />
			</div>
		);
    }

});

module.exports = NameField;
