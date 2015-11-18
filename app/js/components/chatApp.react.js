var React=require('react');
var ChatForm=require('./chatForm.react');
var ChatTable=require('./chatTable.react');
var ChatStore=require('../stores/ChatStore');


function getInitialState() { 
	return {
		messages: ChatStore.getAll()
	};
}
module.exports=React.createClass({
	getInitialState:function(){
		return getInitialState();
	},
	componentDidMount:function(){
		ChatStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
		ChatStore.removeChangeListener(this._onChange);
	},
	render:function(){
		return (
			<div>
				 <div className="row jumbotron">
			       	<ChatForm sendMessage={this._handlerSubmit} />
			     </div>
			     <div className="row">
			     	<ChatTable messages={this.state.messages} />
			     </div> 
			</div>
		)
	},
	_onChange:function(){
		this.setState(getInitialState());
	},
	_handlerSubmit:function(_message){ 
		alert(_message);
	}
})