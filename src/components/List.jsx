var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({
    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],

    getInitialState: function () {
        return { ingredients: [], newText: ''};
    },
    componentWillMount: function () {
        Actions.getIngredients();
    },

    onChange: function (event, ingredients) {
        this.setState({ ingredients: ingredients });
    },
    onClick: function(e){
        if(this.state.newText){
            Actions.postIngredient(this.state.newText);            
        }
        this.setState({newText: ''});
    },

    onInputChange: function(e){
        this.setState({ newText: e.target.value });
    },

    render: function () {
        var listItems = this.state.ingredients.map(function (item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (
            <div>
                <input placeholder="Add item" 
                       value={this.state.newText}
                       onChange={this.onInputChange}/>

                <button onClick={this.onClick}>Add</button>

            <ul>{listItems}</ul>
            </div>
        );
    }
});

module.exports = List;
