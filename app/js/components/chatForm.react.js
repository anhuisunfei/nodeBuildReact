var React=require('react');
var ChatAction=require('../actions/ChatAction');


 

module.exports=React.createClass({ 
	sendMessage:function(){ 
		var chatMessage=this.refs.chatMessage.value; 
		if(!chatMessage)return;
		ChatAction.sendMessage(chatMessage);
		this.refs.chatMessage.value='';
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