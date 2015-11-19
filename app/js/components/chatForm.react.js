var React=require('react');
var ChatAction=require('../actions/ChatAction');
var ChatSocket=require('../utils/socketio.chat.js')


 

module.exports=React.createClass({ 
	 
	sendMessage:function(e){
		e.preventDefault();
		var chatMessage = this.refs.chatMessage.value;
		if (!chatMessage) return;
		ChatSocket.emit('send', chatMessage);
		this.refs.chatMessage.value = '';
		// e.preventDefault(); 
		// var chatMessage=this.refs.chatMessage.value; 
		// if(!chatMessage)return;
		// ChatAction.sendMessage(chatMessage);
		// this.refs.chatMessage.value='';
	}, 
	componentWillMount:function(){
		ChatSocket.on('tweet', function(data) { 
			ChatAction.sendMessage(data); 
		});
	},
	render:function(){
		return (
			<form onSubmit={this.sendMessage}>
			  <fieldset>
			    <div className="form-group">
			      <label htmlFor="disabledTextInput">Disabled input</label>
			      <input ref="chatMessage" type="text" id="disabledTextInput" className="form-control" placeholder="chatMessage..." />
			    </div>   
			  </fieldset>
			</form>
		)
	} 
})