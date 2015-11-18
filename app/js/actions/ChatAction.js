 var AppDispatcher = require('../dispatcher/AppDispatcher.js');
 var ChatConstant=require('../constants/ChatConstant');

  var IndexAction = { 
 	sendMessage:function(_text){
 		AppDispatcher.dispatch({
 			actionType:ChatConstant.SEND_MESSAGE,
 			text:_text
 		})
 	}
 }


 module.exports = IndexAction;
