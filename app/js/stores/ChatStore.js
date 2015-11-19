var AppDispatcher = require('../dispatcher/AppDispatcher');
var ChatConstant = require('../constants/ChatConstant');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
 
var CHANGE_EVENT="change";
var messageList=[]; 
var Chatstore = assign({}, EventEmitter.prototype, {
	emitChange: function() { 
		this.emit(CHANGE_EVENT);
	}, 
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	}, 
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getAll:function(){
		return messageList;
	}
}); 
 
function sendMessage(data){
	messageList.push(data) 
}

AppDispatcher.register(function(action) {
	switch (action.actionType) { 
		case ChatConstant.SEND_MESSAGE:
			sendMessage(action.data);
			Chatstore.emitChange();
		default:
			break;
	}
})


module.exports = Chatstore;