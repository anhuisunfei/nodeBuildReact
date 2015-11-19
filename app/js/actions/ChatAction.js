 var AppDispatcher = require('../dispatcher/AppDispatcher.js');
 var ChatConstant=require('../constants/ChatConstant');

  var IndexAction = { 
 	sendMessage:function(data){
 		AppDispatcher.dispatch({
 			actionType:ChatConstant.SEND_MESSAGE,
 			data:data
 		})
 	}
 }


 module.exports = IndexAction;
