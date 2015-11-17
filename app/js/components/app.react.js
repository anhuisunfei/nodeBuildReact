var React=require('react');
var HeadApp=require('./head.react.js');
var BodyApp=require('./body.react.js');
var IndexStore=require('../stores/IndexStore.js');


function getIndexState(){
	return {
		Title:IndexStore.getTitle()
	}
}
module.exports=React.createClass({
	getInitialState:function(){
		return getIndexState();
	},
	componentDidMount:function(){
		IndexStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
		IndexStore.removeChangeListener(this._onChange);
	},
	render:function(){
		return(
			<div>
				<HeadApp />
				<BodyApp Title={this.state.Title} />
			</div>
		)
	},
	_onChange:function(){
		this.setState(getIndexState());
	}
})