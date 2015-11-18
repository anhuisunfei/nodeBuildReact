 var AppDispatcher = require('../dispatcher/AppDispatcher.js');
 var IndexConstant = require('../constants/IndexConstant');



 var IndexAction = {
 	openLink: function(_link,_text) {
 		AppDispatcher.dispatch({
 			actionType: IndexConstant.INDEX_LINK,
 			url: _link,
 			text:_text
 		});
 	},
 	addMessage:function(_text){
 		AppDispatcher.dispatch({
 			actionType:IndexConstant.SEND_MESSAGE,
 			text:_text
 		})
 	}
 }


 module.exports = IndexAction;