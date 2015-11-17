var AppDispatcher = require('../dispatcher/AppDispatcher');
var IndexConstant = require('../constants/IndexConstant');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _text = '首页';
var CHANGE_EVENT="change";
var IndexStore = assign({}, EventEmitter.prototype, {
	emitChange: function() { 
		this.emit(CHANGE_EVENT);
	},
	getTitle: function() {
		return _text;
	}, 
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	}, 
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

function indexLink(url,text) {
	_text = text;
	window.location.href = url;
}

AppDispatcher.register(function(action) {
	switch (action.actionType) {
		case IndexConstant.INDEX_LINK:
			indexLink(action.url,action.text);
			IndexStore.emitChange();
			break;

		default:
			break;
	}
})


module.exports = IndexStore;