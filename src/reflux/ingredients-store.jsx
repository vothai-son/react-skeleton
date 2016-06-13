var Reflux = require('reflux');
var HTTP = require('../services/httpservice');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
    listenables: [Actions],

    getIngredients: function () {
        HTTP.get('/ingredients')
            .then(function (json) {
                this.ingredients = json;
                this.fireUpdate(); 
            }.bind(this));        
    },

    postIngredient: function (text) {
        if (!this.ingredients) {
            this.ingredients = [];
        }

        var ingredient = {
            text: text,
            id: Date.now() + '-' + text
        };
        
        this.ingredients.push(ingredient);
        this.fireUpdate();

        HTTP.post('/ingredients', ingredient)
        .then(function (response) {
            this.getIngredients();
        }.bind(this));
    },

    fireUpdate: function () {
        this.trigger('change', this.ingredients);
    }
});

module.exports = IngredientStore;